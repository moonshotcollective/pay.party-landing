/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "pay.party",
  titleTemplate: "%s | pay.party",
  defaultTitle: "pay.party",
  description: "Distribute tokens among your team members.",
  canonical: "https://pay.party",
  openGraph: {
    url: "https://pay.party",
    title: "pay.party",
    description: "Distribute tokens among your team members.",
    //TODO: replace with qd image
    images: [
      {
        url: "",
        alt: "pay.party og-image",
      },
    ],
    site_name: "pay.party",
  },
  twitter: {
    handle: "@moonshotcollect",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
