import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({ meta: [
    { title: "Termos de Uso | Engeteles" },
    { name: "description", content: "Termos de Uso da Black November Engeteles: cursos PCM, RCM e GFM e livro PCM Descomplicado." },
  ] }),
  component: () => <LegalPage document="terms"/>,
});
