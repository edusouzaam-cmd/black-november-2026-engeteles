import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BLACK_NOVEMBER, formatCurrency } from "../../data/blackNovember";

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
    <div>
      {!compact && <p className="mb-4 text-sm text-muted-foreground">{phase === "upcoming" ? "A Black November começa em" : "A Black November termina em"}</p>}
      <div className="flex gap-2">
        {items.map(([value, unit]) => (
          <div key={unit} className={`${compact ? "min-w-[42px] px-2 py-2" : "min-w-[72px] px-3 py-3 sm:min-w-[84px]"} rounded-2xl border border-border bg-secondary text-center`}>
            <strong className={`${compact ? "text-sm" : "text-xl sm:text-2xl"} countdown-number block font-semibold`}>{value == null ? "--" : String(value).padStart(2, "0")}</strong>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[.12em] text-muted-foreground">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Price({ value, fallback = "Valor em validação" }: { value: number | null; fallback?: string }) {
  const formatted = formatCurrency(value);
  return formatted ? <>{formatted}</> : <span className="text-base font-medium text-muted-foreground">{fallback}</span>;
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
