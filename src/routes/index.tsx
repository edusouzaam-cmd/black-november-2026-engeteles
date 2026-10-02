import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Courses } from "../components/black-november/Courses";
import { FaqFooter } from "../components/black-november/FaqFooter";
import { HeaderHero } from "../components/black-november/HeaderHero";
import { Offer } from "../components/black-november/Offer";
import { track, useCampaignClock } from "../components/black-november/shared";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Black November Engeteles 2026 | PCM + RCM + GFM" },
    { name: "description", content: "PCM + RCM + Gestão Financeira da Manutenção e o livro PCM Descomplicado — 4ª edição de presente durante a Black November Engeteles 2026." },
    { property: "og:title", content: "Black November Engeteles 2026 | PCM + RCM + GFM" },
    { property: "og:description", content: "3 cursos completos + o livro PCM Descomplicado — 4ª edição de presente." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const { phase } = useCampaignClock();
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    track("view_black_november");
    const onScroll = () => setShowSticky(window.scrollY > Math.max(620, window.innerHeight * .75));
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="min-h-screen overflow-x-clip bg-background text-foreground"><HeaderHero phase={phase}/><main><Courses/><Offer phase={phase}/><FaqFooter phase={phase} showSticky={showSticky}/></main></div>;
}
