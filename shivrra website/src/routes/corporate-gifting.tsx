import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/corporate-gifting")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting — SHIVRRA" },
      { name: "description", content: "Bespoke corporate gifting from SHIVRRA — signature fragrance editions for clients, partners and teams. Coming soon." },
      { property: "og:title", content: "Corporate Gifting — SHIVRRA" },
      { property: "og:description", content: "Bespoke corporate gifting from SHIVRRA. Coming soon." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ComingSoon
        eyebrow="Corporate Gifting"
        title="Coming Soon"
        description="Signature SHIVRRA editions for your clients, partners and team — engraved bottles, branded packaging, and a private concierge. Coming soon."
      />
    </SiteLayout>
  ),
});