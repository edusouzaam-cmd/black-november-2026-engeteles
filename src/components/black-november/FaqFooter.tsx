import { Link } from "@tanstack/react-router";
import { ChevronDown, Instagram, Linkedin } from "lucide-react";
import { Countdown, PrimaryCta, type CampaignPhase } from "./shared";

const LOGO = "https://livros.engeteles.com.br/wp-content/uploads/2022/08/Logotipo-4-1-1.png";

const faq = [
  ["Os três cursos estão inclusos na compra?","Sim. A oferta reúne PCM, RCM e GFM."],
  ["O livro está incluso?","Sim. Você recebe o livro físico PCM Descomplicado — 4ª edição (2026) como brinde."],
  ["Os cursos são 100% on-line?","Sim. Os três cursos são on-line."],
  ["Por quanto tempo terei acesso?","O prazo de acesso será informado antes da abertura das compras."],
  ["Os cursos possuem certificado?","Sim. Os requisitos de certificação estão descritos em cada curso."],
  ["Como receberei o livro e o frete está incluso?","Os prazos de envio e as condições de frete serão informados antes da compra."],
  ["Quando meu acesso será liberado?","O prazo de liberação será informado antes da compra."],
  ["Existe garantia?","As condições de garantia do combo serão informadas antes da compra."],
  ["A oferta termina quando?","Em 30 de novembro de 2026, às 23:59:59, no horário de Brasília."],
  ["Posso comprar como empresa?","As condições para empresas serão informadas antes da abertura das compras."],
];

export function FaqFooter({ phase, showSticky }: { phase: CampaignPhase; showSticky: boolean }) {
  return <>
    <section className="bn-section border-y border-border bg-card/30"><div className="bn-container"><span className="bn-eyebrow">PARA QUEM É</span><h2 className="bn-section-title mt-6 max-w-4xl">Para profissionais de manutenção.</h2><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["PCM e planejamento","Engenharia de manutenção","Confiabilidade","Supervisão","Coordenação","Gestão","Técnicos em evolução profissional","Responsáveis por orçamento e indicadores"].map(x => <div key={x} className="flex min-h-24 items-end rounded-2xl border border-border bg-card p-5 text-sm font-medium">{x}</div>)}</div></div></section>
    <section id="duvidas" className="bn-section scroll-mt-28"><div className="bn-container grid gap-14 lg:grid-cols-[.65fr_1.35fr]"><div><span className="bn-eyebrow">DÚVIDAS</span><h2 className="bn-section-title mt-6">Perguntas frequentes.</h2></div><div className="space-y-4">{faq.map(([q,a]) => <details key={q} className="group rounded-2xl border border-border bg-card"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-sm font-medium">{q}<ChevronDown size={17} className="shrink-0 transition-transform group-open:rotate-180"/></summary><p className="border-t border-border px-6 py-6 text-sm leading-7 text-muted-foreground">{a}</p></details>)}</div></div></section>
    <section className="pb-32 pt-12 sm:pb-40 sm:pt-16"><div className="bn-container"><div className="bn-card bn-soft-glow relative overflow-hidden px-6 py-16 text-center sm:px-16 sm:py-24"><div className="absolute inset-0 bn-grid-line opacity-[.12]"/><div className="relative mx-auto max-w-4xl"><span className="bn-eyebrow">BLACK NOVEMBER 2026</span><h2 className="mt-5 text-[clamp(38px,6vw,76px)] font-semibold leading-[1.05] tracking-[-.062em]">Aproveite a Black November.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground">Oferta disponível até 30 de novembro de 2026.</p><div className="mt-8 flex justify-center"><PrimaryCta phase={phase}/></div><div className="mt-8 flex justify-center"><Countdown compact/></div></div></div></div></section>
    <footer className="border-t border-border pb-40 pt-16 sm:pb-16">
      <div className="bn-container flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <img src={LOGO} alt="Engeteles" className="h-7 w-auto"/>
          <p className="mt-4 max-w-md text-xs leading-5 text-muted-foreground">Engeteles · Escola de Gestão da Manutenção.</p>
          <nav aria-label="Redes sociais da Engeteles" className="mt-6 flex gap-3">
            <a href="https://www.instagram.com/engeteles.oficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Engeteles (abre em nova aba)" className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Instagram size={22} aria-hidden="true"/></a>
            <a href="https://www.linkedin.com/company/engeteles-gestao-da-manutencao/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Engeteles (abre em nova aba)" className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Linkedin size={22} aria-hidden="true"/></a>
          </nav>
        </div>
        <div className="lg:text-right">
          <nav aria-label="Documentos legais" className="flex flex-wrap gap-x-6 gap-y-2 text-sm lg:justify-end">
            <Link to="/termos-de-uso" className="inline-flex min-h-11 items-center text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Termos de Uso</Link>
            <Link to="/politica-de-privacidade" className="inline-flex min-h-11 items-center text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Política de Privacidade</Link>
          </nav>
          <p className="mt-6 text-xs leading-5 text-muted-foreground">© 2026 Engeteles. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
    {showSticky && <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl sm:hidden"><div className="mx-auto flex max-w-xl flex-col items-stretch gap-3"><div><span className="block text-[10px] font-semibold uppercase tracking-[.1em] text-muted-foreground">PCM + RCM + GFM</span><strong className="mt-1 block text-sm">3 cursos + livro de presente</strong></div><PrimaryCta phase={phase} className="min-h-12 w-full px-4 text-[11px]"/></div></div>}
  </>;
}
