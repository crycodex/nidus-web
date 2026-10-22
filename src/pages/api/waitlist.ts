import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: Record<string, unknown>, status = 200) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});

export const POST: APIRoute = async ({ request }) => {
	const apiKey = import.meta.env.RESEND_API_KEY;
	if (!apiKey) return json({ ok: false, error: 'not_configured' }, 500);

	const form = await request.formData().catch(() => null);
	const email = String(form?.get('email') ?? '').trim().toLowerCase();

	// Honeypot: real users never fill this field.
	if (form?.get('company')) return json({ ok: true });

	if (!EMAIL_RE.test(email) || email.length > 254) {
		return json({ ok: false, error: 'invalid_email' }, 400);
	}

	const resend = new Resend(apiKey);
	const segmentId = import.meta.env.RESEND_SEGMENT_ID;

	const { error } = await resend.contacts.create({
		email,
		unsubscribed: false,
		...(segmentId ? { segments: [{ id: segmentId }] } : {}),
	});

	// Re-registering an existing email is fine from the user's point of view.
	if (error && !/already exists/i.test(error.message)) {
		console.error('[waitlist] resend error', error);
		return json({ ok: false, error: 'upstream' }, 502);
	}

	return json({ ok: true });
};
