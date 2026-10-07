import { redesSociales } from "../redes";

export default function Footer() {
    const anio = new Date().getFullYear();

    return (
        <footer className="border-t border-cyan-400/15 bg-[#080f11]">
        <div className="mx-auto w-full max-w-6xl px-6 py-[41px] md:py-14">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
                <a
                href="#inicio"
                className="font-heading text-[15px] font-semibold tracking-tight text-white transition-colors hover:text-cyan-400 md:text-[19px]"
                >
                fgg
                <span className="text-cyan-400 [text-shadow:0_0_12px_rgb(34_211_238)]">
                    .
                </span>
                </a>
            </div>

            {/* Los perfiles solo en escritorio */}
            <div className="-ml-2.5 hidden items-center gap-1.5 md:ml-0 md:flex">
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

            <div className="mt-[34px] border-t border-white/6 pt-[20px] md:mt-10 md:pt-6">
            <p className="font-mono text-[13px] tracking-[0.12em] text-neutral-400 uppercase md:text-[13px]">
                © {anio} Fernando Gómez
            </p>
            </div>
        </div>
        </footer>
    );
}