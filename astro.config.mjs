// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import starlightImageZoom from "starlight-image-zoom";
import { sidebar } from "./src/config/sidebar.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.superplane.com",
  redirects: {
    "/": "/get-started/overview",
    "/cli/apps": "/reference/cli",
    "/cli/discovery": "/reference/cli",
    "/cli/overview": "/reference/cli",
    "/cli/resources": "/reference/cli",
    "/cli/runs": "/reference/cli",
    "/concepts/api-reference": "/reference/api",
    "/concepts/expression-functions": "/expressions/functions",
    "/concepts/expressions": "/expressions/guide",
    "/concepts/glossary": "/reference/glossary",
    "/installation/beacon": "/operate/self-hosting",
    "/installation/kubernetes/amazon-eks": "/operate/self-hosting",
    "/installation/kubernetes/gke": "/operate/self-hosting",
    "/installation/local": "/operate/self-hosting",
    "/installation/overview": "/operate/self-hosting",
    "/installation/single-host/aws-ec2": "/operate/self-hosting",
    "/installation/single-host/digitalocean": "/operate/self-hosting",
    "/installation/single-host/gcp-compute-engine": "/operate/self-hosting",
    "/installation/single-host/generic-server": "/operate/self-hosting",
    "/installation/single-host/hetzner": "/operate/self-hosting",
    "/installation/single-host/linode": "/operate/self-hosting",
  },
  integrations: [
    mermaid({ autoTheme: true }),
    starlight({
      plugins: [starlightImageZoom()],
      title: "SuperPlane Factory Docs",
      customCss: ["./src/styles/custom.css"],
      editLink: {
        base: "https://github.com/superplanehq/docs/edit/main/",
      },
      lastUpdated: true,
      logo: {
        src: "./src/assets/superplane-logo.svg",
        alt: "",
      },
      components: {
        Head: "./src/components/CustomHead.astro",
        Header: "./src/components/CustomHeader.astro",
        ContentPanel: "./src/components/CustomContentPanel.astro",
        SiteTitle: "./src/components/CustomSiteTitle.astro",
        SocialIcons: "./src/components/CustomSocialIcons.astro",
        PageTitle: "./src/components/CustomPageTitle.astro",
        TableOfContents: "./src/components/CustomTableOfContents.astro",
        Footer: "./src/components/CustomFooter.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/superplanehq/docs",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.superplane.com",
        },
      ],
      sidebar,
    }),
  ],
});
