/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "quadratic-diplomacy",
  titleTemplate: "%s | quadratic-diplomacy",
  defaultTitle: "quadratic-diplomacy",
  description:
    "Distribute tokens among your team members based on quadratic voting.",
  canonical: "https://quadratic-diplomacy.com",
  openGraph: {
    url: "https://quadratic-diplomacy.com",
    title: "quadratic-diplomacy",
    description:
      "Distribute tokens among your team members based on quadratic voting.",
    //TODO: replace with qd image
    images: [
      {
        url: "",
        alt: "quadratic-diplomacy.com og-image",
      },
    ],
    site_name: "quadratic-diplomacy",
  },
  twitter: {
    handle: "@moonshotcollect",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
