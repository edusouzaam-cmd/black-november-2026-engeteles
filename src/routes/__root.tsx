import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 text-foreground">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Página não encontrada.</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          O endereço pode ter mudado ou não estar mais disponível.
        </p>
        <Link to="/" className="bn-button bn-button-primary mt-7 inline-flex">
          Voltar para a Black November
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 text-foreground">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">ENGETELES</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">A página não carregou.</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Tente novamente. Se o problema continuar, volte para o início.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bn-button bn-button-primary"
          >
            Tentar novamente
          </button>
          <a href="/" className="bn-button bn-button-secondary">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#090909" },
      { name: "author", content: "Engeteles" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
