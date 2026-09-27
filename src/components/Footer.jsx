import { redesSociales } from "../redes";

export default function Footer() {
    const anio = new Date().getFullYear();

    return (
        <footer className="border-t border-cyan-400/15 bg-[#080f11]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
                <a
                href="#inicio"
                className="font-heading text-lg font-semibold tracking-tight text-white transition-colors hover:text-cyan-400 md:text-[19px]"
                >
                fgg
                <span className="text-cyan-400 [text-shadow:0_0_12px_rgb(34_211_238)]">
                    .
                </span>
                </a>

                <p className="font-display mt-3 text-sm text-neutral-400">
                Desarrollador Full Stack Junior
                </p>
            </div>

            <div className="-ml-2.5 flex items-center gap-1.5 md:ml-0">
                {redesSociales.map(({ label, href, Icon }) => {
                const externo = href.startsWith("http");

                return (
                    <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={externo ? "_blank" : undefined}
                    rel={externo ? "noopener" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-cyan-400"
                    >
                    <Icon />
                    </a>
                );
                })}
            </div>
            </div>

            <div className="mt-10 border-t border-white/6 pt-6">
            <p className="font-mono text-[11px] tracking-[0.12em] text-neutral-400 uppercase">
                © {anio} Fernando Gómez
            </p>
            </div>
        </div>
        </footer>
    );
}