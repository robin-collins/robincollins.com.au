const canonicalUrl = 'https://robincollins.com.au';
const metaImage = 'https://cloud.teamcollins.net/public/images/aulianza-id.png';
const metaDescription =
  'Experienced IT Professional in AI, Machine Learning, and Cyber Security with a zeal for automation.';

const defaultSEOConfig = {
  defaultTitle: 'Robin Collins - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Robin Collins - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'robincollins.com.au og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'robincollins.com.au og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'robincollins.com.au og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'robincollins.com.au',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
