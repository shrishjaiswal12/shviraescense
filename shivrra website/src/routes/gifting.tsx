import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/gifting")({
  head: () => ({
    meta: [
      { title: "Gifting — SHIVRRA" },
      { name: "description", content: "SHIVRRA Gifting — a curated experience of luxury fragrance gifts. Coming soon." },
      { property: "og:title", content: "Gifting — SHIVRRA" },
      { property: "og:description", content: "Luxury fragrance gifting from SHIVRRA. Coming soon." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ComingSoon
        eyebrow="Gifting"
        title="Coming Soon"
        description="A curated gifting experience is being prepared in the SHIVRRA atelier — signature scent, hand-lettered notes and bespoke wrapping."
      />
    </SiteLayout>
  ),
});