import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/LegalPage";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({ meta: [
    { title: "Política de Privacidade | Engeteles" },
    { name: "description", content: "Política de Privacidade da Black November Engeteles: cursos PCM, RCM e GFM e livro PCM Descomplicado." },
  ] }),
  component: () => <LegalPage document="privacy"/>,
});
