import { ArrowDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Countdown, PrimaryCta, type CampaignPhase } from "./shared";

const LOGO = "https://livros.engeteles.com.br/wp-content/uploads/2022/08/Logotipo-4-1-1.png";
const BOOK = "https://livros.engeteles.com.br/wp-content/uploads/2026/03/MOCKUP-LIVRO-PCM-DESCOMPLICADO-4a-EDICAO_COMPRESSED.png";
const BLACK_NOVEMBER_ICON = "/assets/black-november/black-november-icon.png?v=e69352f9";

export function HeaderHero({ phase }: { phase: CampaignPhase }) {
  const [open, setOpen] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState<"books" | "courses" | null>(null);
  const phaseText = phase === "upcoming" ? "abre em 1º de novembro" : phase === "active" ? "condição disponível até 30 de novembro" : "edição encerrada";
  return <>
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl">
      <div className="bn-container flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="Engeteles — início"><img src={LOGO} alt="Engeteles" className="h-7 w-auto" /></a>
        <nav className="hidden gap-7 text-xs font-medium text-muted-foreground lg:flex">{[["#combo","O combo"],["#cursos","Cursos"],["#livro","Livro"],["#oferta","Oferta"],["#duvidas","Dúvidas"]].map(([href,label]) => <a key={href} href={href} className="hover:text-foreground">{label}</a>)}</nav>
        <div className="flex items-center gap-2"><PrimaryCta phase={phase} className="hidden sm:inline-flex"/><button onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card lg:hidden">{open ? <X size={18}/> : <Menu size={18}/>}</button></div>
      </div>
      {open && <nav className="border-t border-border bg-background lg:hidden"><div className="bn-container grid gap-1 py-4">{[["#combo","O combo"],["#cursos","Cursos"],["#livro","Livro"],["#oferta","Oferta"],["#duvidas","Dúvidas"]].map(([href,label]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-card hover:text-foreground">{label}</a>)}<PrimaryCta phase={phase} className="mt-2 w-full sm:hidden"/></div></nav>}
    </header>
    <section id="top" className="relative overflow-hidden border-b border-border pt-8 sm:pt-12 lg:pt-32">
      <div className="absolute inset-0 bn-grid-line opacity-[.12]"/><div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"/>
      <div className="bn-container relative grid items-center gap-x-14 gap-y-10 pb-28 lg:grid-cols-[1.02fr_.98fr] lg:gap-x-16 lg:pb-36">
        <div className="order-1 flex min-w-0 flex-col items-center gap-5 text-center lg:col-start-2 lg:row-start-1">
          <p className="text-[10px] font-semibold uppercase leading-5 tracking-[.16em] text-muted-foreground">Black November 2026 · {phaseText}</p>
          <div className="w-full max-w-[480px]"><Countdown /></div>
        </div>
        <div className="order-2 min-w-0 lg:col-start-1 lg:row-start-1 lg:row-span-2"><span className="bn-eyebrow">BLACK NOVEMBER · ENGETELES</span><img src={BLACK_NOVEMBER_ICON} alt="Black November Engeteles" className="mt-6 h-auto w-full max-w-full sm:w-[600px]" /><h1 className="bn-hero-headline mt-5 max-w-[780px]">Livros ou cursos completos.<span className="block text-muted-foreground">Escolha seu combo Black November.</span></h1><p className="mt-7 max-w-2xl text-xl font-medium leading-7 tracking-[-.025em] sm:text-2xl">Dois combos para aprofundar seus conhecimentos em manutenção.</p><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Escolha o combo de livros ou leve PCM, RCM e Gestão Financeira da Manutenção com o livro PCM Descomplicado de bônus.</p><div className="mt-10 flex flex-col items-start gap-5 xl:flex-row xl:items-center"><a href="#escolher-combo" className="bn-button bn-button-primary">Escolher meu combo <ArrowDown size={15}/></a><a href="#combo" className="inline-flex min-h-12 items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">Ver tudo que está incluso <ArrowDown size={15}/></a></div><p className="mt-4 text-xs text-muted-foreground">Campanha válida de 01/11/2026 a 30/11/2026 às 23:59:59 (horário de Brasília).</p></div>

        <div id="escolher-combo" className="hero-stage order-3 scroll-mt-24 lg:col-start-2 lg:row-start-2" aria-label="Escolha seu combo Black November">
          <h2 className="text-lg font-semibold">Qual combo combina com você?</h2>
          <article className={`rounded-2xl border p-4 transition-colors ${selectedCombo === "courses" ? "border-accent bg-accent/10" : "border-border bg-card"}`}>
            <span className="bn-eyebrow">COMBO 1</span>
            <h3 className="mt-2 text-xl font-semibold">3 cursos + livro de bônus</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[["pcm", "PCM Descomplicado"], ["rcm", "RCM PRO"], ["gfm", "Gestão Financeira da Manutenção"]].map(([id, title]) => <figure key={id} className="min-w-0"><img src={`/assets/black-november/${id}-mockup.webp`} alt={`Mockup do curso ${title}`} className="h-32 w-full object-contain sm:h-40"/><figcaption className="mt-2 text-center text-[10px] leading-4 text-muted-foreground">{title}</figcaption></figure>)}
            </div>
            <div className="mt-4 flex items-center gap-4 rounded-xl bg-secondary/50 p-3">
              <img src={BOOK} alt="Livro PCM Descomplicado — 4ª edição" className="h-20 w-16 object-contain"/>
              <p className="text-xs leading-5"><span className="block font-semibold text-accent">Livro de bônus</span>PCM Descomplicado — 4ª edição</p>
            </div>
            <button type="button" aria-pressed={selectedCombo === "courses"} onClick={() => setSelectedCombo("courses")} className="bn-button bn-button-secondary mt-4 w-full">{selectedCombo === "courses" ? "Combo de cursos selecionado" : "Escolher combo de cursos"}</button>
            {selectedCombo === "courses" && <a href="#oferta" className="mt-3 block text-center text-sm font-medium text-accent">Ver condição do combo de cursos ↓</a>}
          </article>
          <article className={`rounded-2xl border p-4 transition-colors ${selectedCombo === "books" ? "border-accent bg-accent/10" : "border-border bg-card"}`}>
            <span className="bn-eyebrow">COMBO 2</span>
            <h3 className="mt-2 text-xl font-semibold">Combo de livros</h3>
            <img src="/assets/black-november/books-combo.webp" alt="Combo de três livros de manutenção em formato de escada" className="mt-4 h-auto w-full object-contain"/>
            <button type="button" aria-pressed={selectedCombo === "books"} onClick={() => setSelectedCombo("books")} className="bn-button bn-button-secondary mt-4 w-full">{selectedCombo === "books" ? "Combo de livros selecionado" : "Escolher combo de livros"}</button>
          </article>
          <p role="status" className="sr-only">{selectedCombo === "books" ? "Combo de livros selecionado." : selectedCombo === "courses" ? "Combo de cursos e livro de bônus selecionado." : "Escolha entre os dois combos."}</p>
        </div>
      </div>
    </section>
    <section className="border-b border-border bg-card/40 py-10 sm:py-12"><div className="bn-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[["+30 mil","alunos"],["101","países"],["+900","empresas atendidas"],["ISO 9001","processos de capacitação"]].map(([value,label]) => <div key={label} className="flex items-end gap-3 lg:border-r lg:border-border lg:last:border-r-0"><strong className="text-2xl font-semibold tracking-[-.04em]">{value}</strong><span className="pb-1 text-xs leading-4 text-muted-foreground">{label}</span></div>)}</div></section>
  </>;
}
