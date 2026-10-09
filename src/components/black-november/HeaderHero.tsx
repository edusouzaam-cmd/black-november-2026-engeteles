import { ArrowDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Countdown, PrimaryCta, type CampaignPhase } from "./shared";

const LOGO = "https://livros.engeteles.com.br/wp-content/uploads/2022/08/Logotipo-4-1-1.png";
const BOOK = "https://livros.engeteles.com.br/wp-content/uploads/2026/03/MOCKUP-LIVRO-PCM-DESCOMPLICADO-4a-EDICAO_COMPRESSED.png";
const BLACK_NOVEMBER_ICON = "/assets/black-november/black-november-icon.png?v=e69352f9";

export function HeaderHero({ phase }: { phase: CampaignPhase }) {
  const [open, setOpen] = useState(false);
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
    <section id="top" className="relative overflow-hidden border-b border-border pt-[30px] pb-[50px]">
      <div className="absolute inset-0 bn-grid-line opacity-[.12]"/><div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"/>
      <div className="relative mx-auto flex w-[calc(100%-40px)] max-w-[1365px] flex-col items-center gap-6 text-center sm:gap-8">
        <img src={BLACK_NOVEMBER_ICON} alt="Black November Engeteles" fetchPriority="high" className="block h-auto max-h-[calc((100svh-19rem)*1.3)] w-full max-w-[1365px] object-contain" />
        <div className="flex w-full flex-col items-center gap-3">
          <p className="text-xs font-semibold uppercase leading-5 tracking-[.16em] text-muted-foreground sm:text-sm">Black November 2026 · {phaseText}</p>
          <Countdown enlarged />
        </div>
      </div>
    </section>
    <section aria-label="Formação Black November" className="relative border-b border-border py-16 sm:py-24 lg:py-28">
      <div className="bn-container grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
        <div className="min-w-0"><span className="bn-eyebrow">BLACK NOVEMBER · ENGETELES</span><h1 className="bn-hero-headline mt-5 max-w-[780px]">Planejamento, confiabilidade e gestão financeira.<span className="block text-muted-foreground">Em uma única formação.</span></h1><p className="mt-7 max-w-2xl text-xl font-medium leading-7 tracking-[-.025em] sm:text-2xl">3 cursos completos + o livro PCM Descomplicado de presente.</p><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Aprenda a planejar a manutenção, analisar falhas e controlar custos.</p><div className="mt-10 flex flex-col items-start gap-5 xl:flex-row xl:items-center"><PrimaryCta phase={phase}/><a href="#combo" className="inline-flex min-h-12 items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">Ver tudo que está incluso <ArrowDown size={15}/></a></div><p className="mt-4 text-xs text-muted-foreground">Campanha válida de 01/11/2026 a 30/11/2026 às 23:59:59 (horário de Brasília).</p></div>
        <div className="hero-stage" aria-label="PCM, RCM, GFM e livro PCM Descomplicado">
          <div className="hero-courses">
            <figure className="hero-product-card">
              <div className="hero-product-image"><img src="/assets/black-november/pcm-logo.png" alt="Logo PCM Descomplicado"/></div>
              <figcaption><span className="hero-product-label">PCM</span><p className="hero-product-name">PCM Descomplicado</p></figcaption>
            </figure>
            <figure className="hero-product-card">
              <div className="hero-product-image"><img src="/assets/black-november/rcm-logo.png" alt="Logo RCM PRO"/></div>
              <figcaption><span className="hero-product-label">RCM</span><p className="hero-product-name">RCM PRO — Manutenção Centrada na Confiabilidade</p></figcaption>
            </figure>
            <figure className="hero-product-card">
              <div className="hero-product-image"><img src="/assets/black-november/gfm-logo.png" alt="Logo Gestão Financeira da Manutenção"/></div>
              <figcaption><span className="hero-product-label">GFM</span><p className="hero-product-name">Gestão Financeira da Manutenção</p></figcaption>
            </figure>
          </div>
          <figure className="hero-product-card hero-book-card">
            <div className="hero-product-image hero-book-image"><img className="hero-book" src={BOOK} alt="Livro PCM Descomplicado — 4ª edição"/></div>
            <figcaption><span className="hero-product-label">Livro de presente</span><p className="hero-product-name">PCM Descomplicado — 4ª edição</p></figcaption>
          </figure>
        </div>

      </div>
    </section>
    <section className="border-b border-border bg-card/40 py-10 sm:py-12"><div className="bn-container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[["+30 mil","alunos"],["101","países"],["+900","empresas atendidas"],["ISO 9001","processos de capacitação"]].map(([value,label]) => <div key={label} className="flex items-end gap-3 lg:border-r lg:border-border lg:last:border-r-0"><strong className="text-2xl font-semibold tracking-[-.04em]">{value}</strong><span className="pb-1 text-xs leading-4 text-muted-foreground">{label}</span></div>)}</div></section>
  </>;
}
