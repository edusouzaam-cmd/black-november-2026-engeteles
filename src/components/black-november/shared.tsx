import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BLACK_NOVEMBER, formatCurrency, type Course } from "../../data/blackNovember";

export type CampaignPhase = "upcoming" | "active" | "ended";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function phaseAt(now: number): CampaignPhase {
  const start = new Date(BLACK_NOVEMBER.startsAt).getTime();
  const end = new Date(BLACK_NOVEMBER.endsAt).getTime();
  if (now < start) return "upcoming";
  if (now > end) return "ended";
  return "active";
}

export function useCampaignClock() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  const phase = now == null ? "upcoming" : phaseAt(now);
  let timeLeft: TimeLeft | null = null;
  if (now != null && phase !== "ended") {
    const target = new Date(phase === "upcoming" ? BLACK_NOVEMBER.startsAt : BLACK_NOVEMBER.endsAt).getTime();
    const ms = Math.max(0, target - now);
    timeLeft = {
      days: Math.floor(ms / 86_400_000),
      hours: Math.floor((ms / 3_600_000) % 24),
      minutes: Math.floor((ms / 60_000) % 60),
      seconds: Math.floor((ms / 1_000) % 60),
    };
  }
  return { phase, timeLeft };
}

export function track(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const target = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  target.dataLayer = target.dataLayer ?? [];
  target.dataLayer.push({ event, ...payload });
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const { phase, timeLeft } = useCampaignClock();
  if (phase === "ended") return <p className="text-sm text-muted-foreground">Esta edição da Black November foi encerrada.</p>;
  const items = [[timeLeft?.days, "dias"], [timeLeft?.hours, "horas"], [timeLeft?.minutes, "min"], [timeLeft?.seconds, "seg"]] as const;
  return (
    <div className={compact ? "max-w-full" : "w-full max-w-[480px]"}>
      {!compact && <p className="mb-4 text-sm font-semibold text-foreground">{phase === "upcoming" ? "A Black November começa em" : "A Black November termina em"}</p>}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {items.map(([value, unit]) => (
          <div key={unit} className={`${compact ? "min-w-[52px] px-2 py-2" : "min-w-0 px-2 py-4 sm:px-4 sm:py-5"} rounded-xl border border-accent/50 bg-accent/10 text-center shadow-[0_0_24px_rgba(0,153,255,0.12)]`}>
            <strong className={`${compact ? "text-2xl" : "text-4xl sm:text-5xl"} countdown-number block font-bold leading-none text-foreground`}>{value == null ? "--" : String(value).padStart(2, "0")}</strong>
            <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[.12em] text-muted-foreground">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Price({ value, fallback = "Valor em validação" }: { value: number | null; fallback?: string }) {
  const formatted = formatCurrency(value);
  return formatted ? <>{formatted}</> : <span className="inline-block text-base font-medium leading-relaxed tracking-normal text-muted-foreground">{fallback}</span>;
}

export function RegularCoursePrice({ course }: { course: Course }) {
  return <div className="space-y-1">
    <strong className="block text-base font-semibold text-foreground">Apenas {course.installments} x de {formatCurrency(course.installmentPrice)} *</strong>
    <span className="block text-xs leading-5 text-muted-foreground">Ou {formatCurrency(course.price)} à vista</span>
    <span className="block text-[10px] leading-4 text-muted-foreground">* Total parcelado: {formatCurrency(Math.round(course.installments * course.installmentPrice * 100) / 100)}.</span>
  </div>;
}

export function PrimaryCta({ phase, className = "" }: { phase: CampaignPhase; className?: string }) {
  if (phase === "ended") return <span className={`bn-button bn-button-secondary ${className}`}>Edição encerrada</span>;
  const checkout = phase === "active" && Boolean(BLACK_NOVEMBER.checkoutUrl);
  return (
    <a href={checkout ? BLACK_NOVEMBER.checkoutUrl : "#oferta"} className={`bn-button bn-button-primary ${className}`} onClick={() => { track("click_primary_cta", { phase }); if (checkout) track("begin_checkout"); }}>
      {phase === "active" ? "Garantir o combo Black November" : "Ver a condição Black November"}<ArrowRight size={15} />
    </a>
  );
}
