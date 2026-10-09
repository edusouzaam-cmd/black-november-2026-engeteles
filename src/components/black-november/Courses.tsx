import { Check, ChevronDown } from "lucide-react";
import { courses, type Course } from "../../data/blackNovember";

function ProductCard({ course }: { course: Course }) {
  return (
    <article id={course.id} data-track-view={`view_${course.id}`} aria-labelledby={`${course.id}-title`} className="bn-card group min-w-0 scroll-mt-28 p-6 sm:p-8 lg:p-5 xl:p-6">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,153,255,.12),transparent_48%)]" />
        <img src={course.id === "pcm" ? "/assets/black-november/pcm-card.webp" : `/assets/black-november/${course.id}-mockup.webp`} alt={`Capa do curso ${course.shortTitle}`} loading="lazy" className="relative h-full w-full object-contain p-8 transition-transform duration-300 group-hover:scale-[1.035]" />
      </div>
      <span className="bn-eyebrow mt-6">{course.eyebrow} · {course.shortTitle}</span>
      <h3 id={`${course.id}-title`} className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-.045em]">{course.title}</h3>
      <p className="mt-5 text-sm leading-6 text-muted-foreground">{course.description}</p>
      <div className="mt-7 grid grid-cols-2 gap-3">
        {course.metrics.map(metric => (
          <div key={metric.label} className="rounded-2xl bg-secondary px-4 py-3">
            <strong className="block text-lg">{metric.value}</strong>
            <span className="text-[11px] text-muted-foreground">{metric.label}</span>
          </div>
        ))}
      </div>
      <h4 className="mt-8 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">Conteúdo do curso</h4>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {course.topics.map(topic => (
          <li key={topic} className="flex gap-3 text-sm leading-6">
            <Check size={15} className="mt-1 shrink-0 text-accent" />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
      {course.modules && (
        <details className="group mt-7 rounded-2xl border border-border bg-secondary/50">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 text-sm font-medium">
            Ver conteúdo programático
            <ChevronDown size={17} className="shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <div className="border-t border-border px-4 py-5">
            <ol className="grid gap-3 text-sm leading-6 text-muted-foreground">
              {course.modules.map((module, index) => (
                <li key={module}><span className="mr-2 text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>{module}</li>
              ))}
            </ol>
          </div>
        </details>
      )}
    </article>
  );
}


function BonusCard() {
  return (
    <article id="livro" data-track-view="view_book_bonus" aria-labelledby="bonus-title" className="book-spotlight bn-card min-w-0 scroll-mt-28 p-6 sm:p-8 lg:p-5 xl:p-6">
      <div className="relative aspect-[4/3] rounded-[22px] bg-secondary">
        <img src="https://livros.engeteles.com.br/wp-content/uploads/2026/03/MOCKUP-LIVRO-PCM-DESCOMPLICADO-4a-EDICAO_COMPRESSED.png" alt="Livro PCM Descomplicado — 4ª edição" loading="lazy" className="h-full w-full object-contain p-6 drop-shadow-2xl" />
      </div>
      <span className="bn-eyebrow mt-6">BÔNUS BLACK NOVEMBER</span>
      <h3 id="bonus-title" className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-.045em]">Livro PCM Descomplicado — 4ª edição.</h3>
      <p className="mt-5 text-sm leading-6 text-muted-foreground">Receba o livro físico como brinde do combo 1.</p>
      <div className="mt-7 grid grid-cols-2 gap-3">
        {[["12", "capítulos"], ["290", "páginas"], ["4ª", "edição"], ["2026", "ano"]].map(([value, label]) => (
          <div key={label} className="rounded-2xl bg-secondary px-4 py-3">
            <strong className="block text-lg">{value}</strong>
            <span className="text-[11px] text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
      <span className="mt-7 inline-flex rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold uppercase tracking-[.12em]">Incluso no combo 1</span>
    </article>
  );
}

export function Courses() {
  return (
    <section id="combo" className="bn-section scroll-mt-28">
      <div className="bn-container">
        <span className="bn-eyebrow">O QUE VOCÊ LEVA</span>
        <h2 className="bn-section-title mt-6 max-w-4xl">Cursos inclusos no combo 1.</h2>
        <div id="cursos" className="mt-14 grid scroll-mt-28 items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map(course => <ProductCard key={course.id} course={course} />)}
          <BonusCard />
        </div>
      </div>
    </section>
  );
}
