export const SITE_URL = 'https://nidu.app';
export const SITE_NAME = 'Nidus';
export const LEGAL_NAME = 'Nidu';
export const SITE_TITLE = 'Nidus — Fideliza a tus clientes sin fricción';
export const SITE_DESCRIPTION =
	'Tarjetas de fidelización digitales en Apple Wallet y Google Wallet para negocios locales. El cliente no descarga nada. Tú sellas en el mostrador.';
export const SUPPORT_EMAIL = 'soporte@nidu.app';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const OG_IMAGE_ALT = 'Nidus: fideliza a tus clientes sin fricción';
export const LOCALE = 'es_EC';
export const FOUNDER = {
	name: 'Cristhian Recalde',
	url: 'https://www.linkedin.com/in/cristhian-recalde/',
};

export const faqs = [
	{
		q: '¿Qué es Nidus?',
		a: 'Nidus es la app para el negocio que emite tarjetas de fidelización reales en Apple Wallet y Google Wallet. El cliente se une con un QR del mostrador y no instala nada.',
	},
	{
		q: '¿El cliente tiene que descargar una app?',
		a: 'No. Escanea el QR, pone su nombre y guarda el pase en Apple Wallet o Google Wallet. Cero apps, cero cuentas, cero contraseñas.',
	},
	{
		q: '¿Cómo sella el negocio?',
		a: 'Abres Sellar en Nidus, apuntas al QR del pase y listo. Cuando completa, canjeas. El wallet del cliente se actualiza solo.',
	},
	{
		q: '¿Para qué negocios es Nidus?',
		a: 'Para el local, no para la cadena: café, barbería, restaurante, gimnasio, tienda de ropa, farmacia y más. Eliges el rubro y Nidus arma sellos y recompensa.',
	},
	{
		q: '¿Qué tipos de pase puedo crear?',
		a: 'Fidelización, cupón, entrada, membresía, tarjeta de regalo o un pase. También niveles Bronce, Plata y Oro.',
	},
	{
		q: '¿Cuánto cuesta Nidus?',
		a: 'Un precio, sin letra chica. El detalle se anuncia al lanzamiento. Los primeros negocios entran a la oferta de fundadores.',
	},
];

const organization = {
	'@type': 'Organization',
	'@id': `${SITE_URL}/#organization`,
	name: LEGAL_NAME,
	alternateName: SITE_NAME,
	url: SITE_URL,
	email: SUPPORT_EMAIL,
	logo: {
		'@type': 'ImageObject',
		url: `${SITE_URL}/brand/nidus.png`,
	},
	founder: {
		'@type': 'Person',
		name: FOUNDER.name,
		url: FOUNDER.url,
	},
	sameAs: [FOUNDER.url],
	areaServed: {
		'@type': 'Country',
		name: 'Ecuador',
	},
};

const software = {
	'@type': 'SoftwareApplication',
	'@id': `${SITE_URL}/#app`,
	name: SITE_NAME,
	alternateName: LEGAL_NAME,
	url: SITE_URL,
	applicationCategory: 'BusinessApplication',
	operatingSystem: 'iOS, Android',
	inLanguage: 'es',
	description: SITE_DESCRIPTION,
	image: OG_IMAGE,
	author: { '@id': `${SITE_URL}/#organization` },
	offers: {
		'@type': 'Offer',
		url: `${SITE_URL}/#lista-espera`,
		availability: 'https://schema.org/PreOrder',
		priceCurrency: 'USD',
	},
};

export const baseJsonLd = [organization, software];

export const homeJsonLd = [
	{
		'@type': 'WebSite',
		'@id': `${SITE_URL}/#website`,
		url: SITE_URL,
		name: SITE_NAME,
		alternateName: LEGAL_NAME,
		description: SITE_DESCRIPTION,
		inLanguage: 'es',
		publisher: { '@id': `${SITE_URL}/#organization` },
	},
	{
		'@type': 'WebPage',
		'@id': `${SITE_URL}/#webpage`,
		url: SITE_URL,
		name: SITE_TITLE,
		description: SITE_DESCRIPTION,
		isPartOf: { '@id': `${SITE_URL}/#website` },
		about: { '@id': `${SITE_URL}/#app` },
		inLanguage: 'es',
		primaryImageOfPage: OG_IMAGE,
	},
	{
		'@type': 'HowTo',
		name: 'Cómo funciona Nidus',
		description: 'Publica tu tarjeta, el cliente se une en 20 segundos y tú sellas en el mostrador.',
		step: [
			{
				'@type': 'HowToStep',
				position: 1,
				name: 'Publica tu tarjeta',
				text: 'Eliges el rubro. Nidus arma sellos y recompensa. Imprimes el QR.',
			},
			{
				'@type': 'HowToStep',
				position: 2,
				name: 'El cliente se une en 20 segundos',
				text: 'Escanea, pone su nombre, guarda el pase. Cero apps.',
			},
			{
				'@type': 'HowToStep',
				position: 3,
				name: 'Tú sellas en el mostrador',
				text: 'Abres Sellar, apuntas al pase, listo. Cuando completa, canjeas. El wallet se actualiza solo.',
			},
		],
	},
	{
		'@type': 'FAQPage',
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	},
];
