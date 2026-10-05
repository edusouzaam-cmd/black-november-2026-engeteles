import { Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { legalDocuments } from "../data/legalDocuments";

export function LegalPage({ document }: { document: "terms" | "privacy" }) {
  const content = legalDocuments[document];
  const linkClass = "rounded-sm underline underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#documento" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:p-4">Ir para o documento</a>
      <header className="border-b border-border">
        <div className="bn-container flex flex-wrap items-center justify-between gap-6 py-7">
          <Link to="/" aria-label="Engeteles — voltar à campanha" className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><img src="https://livros.engeteles.com.br/wp-content/uploads/2022/08/Logotipo-4-1-1.png" alt="Engeteles" className="h-7 w-auto"/></Link>
          <Link to="/" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowLeft size={16} aria-hidden="true"/>Voltar para a Black November</Link>
        </div>
      </header>
      <main id="documento" className="bn-container py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="bn-eyebrow">ENGETELES · DOCUMENTOS LEGAIS</span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{content.title}</h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{content.introduction}</p>
          <p className="mt-5 text-sm text-muted-foreground">Última atualização: <time dateTime="2026-10-05">5 de outubro de 2026</time></p>
        </div>
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="Sumário do documento" className="rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-8">
            <h2 className="text-base font-semibold">Neste documento</h2>
            <ol className="mt-5 space-y-3">{content.sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="block rounded-sm py-1 text-sm leading-6 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{section.title}</a></li>)}</ol>
          </nav>
          <article className="min-w-0 max-w-3xl space-y-12">
            {content.sections.map(section => <section id={section.id} key={section.id} aria-labelledby={`${section.id}-titulo`} className="scroll-mt-10 border-b border-border pb-12">
              <h2 id={`${section.id}-titulo`} className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">{section.title}</h2>
              <div className="mt-6 space-y-5">{section.paragraphs.map(paragraph => <p key={paragraph} className="break-words text-base leading-8 text-muted-foreground">{paragraph}</p>)}</div>
            </section>)}
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-xl font-semibold">Precisa de ajuda?</h2>
              <a href="mailto:contato@engeteles.com.br" className={`mt-4 inline-flex min-h-11 flex-wrap items-center gap-2 break-all text-sm ${linkClass}`}><Mail size={18} aria-hidden="true"/>contato@engeteles.com.br</a>
            </div>
          </article>
        </div>
      </main>
      <footer className="border-t border-border py-10">
        <div className="bn-container flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground">© 2026 Engeteles. Todos os direitos reservados.</p>
          <nav aria-label="Documentos legais" className="flex flex-wrap gap-6"><Link to="/termos-de-uso" aria-current={document === "terms" ? "page" : undefined} className={linkClass}>Termos de Uso</Link><Link to="/politica-de-privacidade" aria-current={document === "privacy" ? "page" : undefined} className={linkClass}>Política de Privacidade</Link></nav>
        </div>
      </footer>
    </div>
  );
}
