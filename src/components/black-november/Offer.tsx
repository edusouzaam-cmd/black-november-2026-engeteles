import { ArrowRight, BookOpen, Check, CircleDollarSign, ShieldCheck, Wrench } from "lucide-react";
import { BLACK_NOVEMBER, courses, regularTotal, savings } from "../../data/blackNovember";
import { Countdown, Price, RegularCoursePrice, track, type CampaignPhase } from "./shared";

export function Offer({ phase }: { phase: CampaignPhase }) {
  const checkout = phase === "active" && Boolean(BLACK_NOVEMBER.checkoutUrl);
  return <>
    <section id="oferta" data-track-view="view_offer" className="bn-section scroll-mt-28 border-y border-border">
      <div className="bn-container grid items-start gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <span className="bn-eyebrow">VALORES DE REFERÊNCIA</span>
          <h2 className="bn-section-title mt-6">Sua formação. Seu próximo passo.</h2>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">Escolha entre a formação com três cursos e um livro de bônus ou o combo com os três livros de Jhonata Teles.</p>
          <div className="mt-8 bn-card p-6">
            <h3 className="text-lg font-semibold">Cursos do combo 1</h3>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">Valores para compra individual fora da Black November.</p>
            {courses.map(c => <div key={c.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-5"><span>{c.shortTitle}</span><div className="text-right"><RegularCoursePrice course={c}/></div></div>)}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-5">
              <span>Livro PCM Descomplicado</span>
              <div className="text-right"><strong className="block text-base font-semibold"><Price value={BLACK_NOVEMBER.bookReferencePrice}/></strong><span className="mt-1 block text-xs text-muted-foreground">Compra avulsa · Bônus no combo 1</span></div>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-3 pt-5"><span className="text-sm text-muted-foreground">Total dos 3 cursos à vista</span><strong className="text-2xl"><Price value={regularTotal}/></strong></div>
          </div>
          <div className="mt-8"><Countdown/></div>
        </div>
        <div className="min-w-0">
          <span className="bn-eyebrow">DOIS COMBOS BLACK NOVEMBER</span>
          <h2 className="mt-5 text-[clamp(34px,4vw,52px)] font-semibold leading-[1.08] tracking-[-.06em]">Escolha como você quer evoluir.</h2>
          <div className="mt-8 grid gap-5">
            <article aria-labelledby="offer-combo-1" className="offer-spotlight bn-card border-accent/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3"><span className="bn-eyebrow">COMBO 1</span><span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-accent">Combo principal</span></div>
              <h3 id="offer-combo-1" className="mt-5 text-3xl font-semibold leading-tight tracking-[-.04em]">Três cursos + livro de bônus.</h3>
              <ul className="mt-6 space-y-3 text-sm leading-6">{courses.map(c => <li key={c.id} className="flex gap-3"><Check size={16} className="mt-1 shrink-0 text-accent"/><span>{c.title}</span></li>)}</ul>
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-accent/25 bg-accent/10 p-4"><BookOpen size={19} className="mt-1 shrink-0 text-accent"/><div><strong className="block text-sm">Livro PCM Descomplicado — 4ª edição</strong><span className="mt-1 block text-xs text-muted-foreground">Livro físico de presente, incluso no combo 1.</span></div></div>
              <div className="mt-6 border-t border-border pt-5"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-accent">Preço Black November · Combo 1</p><div className="mt-2 text-4xl font-semibold tracking-[-.04em]"><Price value={BLACK_NOVEMBER.blackNovemberPrice} fallback="Em breve"/></div>{savings != null && <p className="mt-3 text-sm text-muted-foreground">Economia: <strong className="text-foreground"><Price value={savings}/></strong></p>}</div>
              <div className="mt-6">{phase === "ended" ? <span className="bn-button bn-button-secondary">Edição encerrada</span> : <a href={checkout ? BLACK_NOVEMBER.checkoutUrl : "#cursos"} className="bn-button bn-button-primary w-full" onClick={() => { track("click_combo_1_offer", { phase }); if (checkout) track("begin_checkout"); }}>{checkout ? "Garantir o combo 1" : "Conhecer o combo 1"}<ArrowRight size={15}/></a>}</div>
            </article>
            <article aria-labelledby="offer-combo-2" className="bn-card p-6 sm:p-8">
              <span className="bn-eyebrow">COMBO 2</span>
              <h3 id="offer-combo-2" className="mt-5 text-3xl font-semibold leading-tight tracking-[-.04em]">Três livros para sua biblioteca.</h3>
              <ul className="mt-6 space-y-3 text-sm leading-6">{["Gestão Financeira da Manutenção", "PCM Descomplicado", "Não Existe Melhoria de Processos sem o Desenvolvimento de Pessoas"].map(title => <li key={title} className="flex gap-3"><BookOpen size={16} className="mt-1 shrink-0 text-accent"/><span>{title}</span></li>)}</ul>
              <div className="mt-6 border-t border-border pt-5"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-accent">Preço Black November · Combo 2</p><p className="mt-2 text-base text-muted-foreground">Em breve</p></div>
              <a href="#combo-2" className="bn-button bn-button-secondary mt-6 w-full" onClick={() => track("click_combo_2_offer", { phase })}>Conhecer o combo 2<ArrowRight size={15}/></a>
            </article>
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">Black November de 1 a 30 de novembro de 2026.</p>
        </div>
      </div>
    </section>
    <section className="bn-section"><div className="bn-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]"><div><span className="bn-eyebrow">QUEM ESTÁ POR TRÁS</span><h2 className="bn-section-title mt-6">Conheça seu professor.</h2></div><div className="bn-card min-w-0 p-6 sm:p-10"><div className="flex flex-col items-start gap-8"><div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-5"><img src="/assets/black-november/jhonata-teles.png" alt="Jhonata Teles, professor e fundador da Engeteles" loading="lazy" width={1254} height={1254} className="aspect-square h-auto w-full rounded-2xl object-cover"/><img src="/assets/black-november/jhonata-teles-aula.png" alt="Jhonata Teles ministrando uma aula" loading="lazy" className="aspect-square h-auto w-full rounded-2xl object-cover object-[60%_20%]"/></div><div><h3 className="text-2xl font-semibold">Jhonata Teles</h3><p className="mt-1 text-sm text-muted-foreground">Fundador da Engeteles · Especialista em Gestão da Manutenção</p></div></div><p className="mt-6 text-base leading-7 text-muted-foreground">Autor do PCM Descomplicado e especialista em capacitação de profissionais de manutenção.</p><div className="mt-8 grid gap-4 xl:grid-cols-3">{[[Wrench,"PCM","Estruturação e controle"],[ShieldCheck,"Confiabilidade","RCM e análise de falhas"],[CircleDollarSign,"Gestão","Custos e decisão financeira"]].map(([Icon,title,text]) => { const C = Icon as typeof Wrench; return <div key={String(title)} className="rounded-2xl bg-secondary p-4"><C size={18} className="text-accent"/><strong className="mt-4 block text-sm">{String(title)}</strong><span className="mt-1 block text-xs text-muted-foreground">{String(text)}</span></div>; })}</div></div></div></section>
  </>;
}
