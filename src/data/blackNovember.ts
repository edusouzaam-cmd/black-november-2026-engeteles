export type Course = {
  id: "pcm" | "rcm" | "gfm";
  eyebrow: string;
  title: string;
  shortTitle: string;
  role: string;
  description: string;
  image: string;
  sourceUrl: string;
  metrics: { value: string; label: string }[];
  topics: string[];
  modules?: string[];
  price: number | null;
  installments: number;
  installmentPrice: number;
};

export const BLACK_NOVEMBER = {
  startsAt: "2026-11-01T00:00:00-03:00",
  endsAt: "2026-11-30T23:59:59-03:00",
  checkoutUrl: "",
  blackNovemberPrice: null as number | null,
  installments: null as number | null,
  installmentPrice: null as number | null,
  bookReferencePrice: null as number | null,
  gtmId: "",
  metaPixelId: "",
};

export const courses: Course[] = [
  {
    id: "pcm",
    eyebrow: "CURSO 01",
    title: "Planejamento e Controle da Manutenção",
    shortTitle: "PCM",
    role: "Planejar e controlar.",
    description:
      "Uma formação para estruturar a jornada do PCM — do cadastro e criticidade à programação, indicadores, custos e implantação.",
    image: "/assets/black-november/pcm.webp",
    sourceUrl: "https://cursos.engeteles.com.br/curso-de-pcm/",
    metrics: [
      { value: "120h", label: "de conteúdo" },
      { value: "64", label: "aulas" },
      { value: "9", label: "módulos" },
      { value: "4", label: "certificações" },
    ],
    topics: [
      "Fundamentos do PCM",
      "Cadastro e criticidade",
      "Planos de manutenção",
      "Recursos e programação",
      "Indicadores de manutenção",
      "Gestão de custos",
      "Implantação do PCM",
      "Pessoas, processos e ativos",
    ],
    price: 662.9,
    installments: 12,
    installmentPrice: 68.56,
  },
  {
    id: "rcm",
    eyebrow: "CURSO 02",
    title: "RCM — Manutenção Centrada na Confiabilidade",
    shortTitle: "RCM",
    role: "Decidir com base em confiabilidade.",
    description:
      "Uma formação para estruturar decisões de manutenção com base na função dos ativos, consequências das falhas, criticidade e confiabilidade.",
    image: "/assets/black-november/rcm.webp",
    sourceUrl: "https://cursos.engeteles.com.br/rcmpro/",
    metrics: [
      { value: "200h", label: "de conteúdo" },
      { value: "+100", label: "aulas" },
      { value: "8", label: "módulos" },
      { value: "3", label: "certificações" },
    ],
    topics: [
      "Fundamentos do RCM",
      "Contexto operacional",
      "Criticidade",
      "FMEA e modos de falha",
      "Planos centrados em confiabilidade",
      "MTBF e MTTR",
      "Disponibilidade",
      "Mantenabilidade e confiabilidade",
    ],
    price: 1499,
    installments: 12,
    installmentPrice: 155.03,
  },
  {
    id: "gfm",
    eyebrow: "CURSO 03",
    title: "GFM — Gestão Financeira da Manutenção",
    shortTitle: "GFM",
    role: "Transformar manutenção em decisão financeira.",
    description:
      "Porque manutenção também precisa falar a linguagem do negócio: orçamento, custos, OPEX, CAPEX, engenharia econômica e indicadores financeiros.",
    image: "/assets/black-november/gfm.webp",
    sourceUrl: "https://cursos.engeteles.com.br/curso-gfm/",
    metrics: [
      { value: "60h", label: "de conteúdo" },
      { value: "41", label: "aulas" },
      { value: "9", label: "módulos" },
      { value: "4", label: "certificações" },
    ],
    topics: [
      "Orçamento de manutenção",
      "Custos de manutenção",
      "OPEX",
      "CAPEX",
      "Engenharia econômica",
      "Indicadores financeiros",
      "Decisões de investimento",
      "Relatórios gerenciais",
    ],
    modules: [
      "Fundamentos da gestão financeira, orçamentária e de custos",
      "Contexto financeiro das estratégias de manutenção",
      "Orçamento de manutenção realista",
      "Estruturação e apuração dos custos",
      "CAPEX e engenharia econômica",
      "OPEX e redução estruturada de custos",
      "Decisões financeiras estratégicas",
      "Indicadores, estimativas e relatórios financeiros",
      "Tecnologia e gestão financeira da manutenção",
    ],
    price: 649,
    installments: 12,
    installmentPrice: 67.12,
  },
];

export const regularTotal = courses.every((course) => course.price != null)
  ? courses.reduce((sum, course) => sum + (course.price ?? 0), 0)
  : null;

export const savings =
  regularTotal != null && BLACK_NOVEMBER.blackNovemberPrice != null
    ? regularTotal - BLACK_NOVEMBER.blackNovemberPrice
    : null;

export const formatCurrency = (value: number | null) =>
  value == null
    ? null
    : new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
