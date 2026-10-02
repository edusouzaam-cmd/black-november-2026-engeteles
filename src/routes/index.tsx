import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clareza — Simples, direto, essencial" },
      {
        name: "description",
        content:
          "Uma landing page limpa e objetiva. Tudo que você precisa saber em uma única tela.",
      },
      { property: "og:title", content: "Clareza — Simples, direto, essencial" },
      {
        property: "og:description",
        content:
          "Uma landing page limpa e objetiva. Tudo que você precisa saber em uma única tela.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex h-dvh min-h-[560px] flex-col overflow-hidden bg-background text-foreground">
      <header className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-10">
        <span className="font-display text-xl tracking-tight">
          Clareza<span className="text-primary">.</span>
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#contato"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Contato
          </a>
          <a
            href="#contato"
            className="rounded-full border border-foreground px-4 py-1.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            Começar
          </a>
        </div>
      </header>

      <main
        id="contato"
        className="flex flex-1 flex-col items-center justify-center px-6 text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Novo serviço
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          O essencial, apresentado{" "}
          <em className="italic text-muted-foreground">com clareza</em>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Uma página única, rápida e objetiva para apresentar seu produto ou
          serviço — sem distrações, sem ruído.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Quero saber mais
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver como funciona →
          </a>
        </div>
      </main>

      <footer className="grid grid-cols-1 gap-2 border-t border-border px-6 py-5 text-xs text-muted-foreground sm:grid-cols-3 sm:px-10">
        <p>Feito para converter com simplicidade</p>
        <p className="sm:text-center">Uma dobra. Zero distração.</p>
        <p className="sm:text-right">© {new Date().getFullYear()} Clareza</p>
      </footer>
    </div>
  );
}
