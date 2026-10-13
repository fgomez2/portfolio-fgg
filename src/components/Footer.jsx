import Marca from './Marca'
import { redesSociales } from '../redes'

export default function Footer() {
    const anio = new Date().getFullYear()

    return (
        <footer className="border-t border-cyan-400/15 bg-[#080f11]">
            <div className="mx-auto w-full max-w-6xl px-6 py-[41px] md:py-14">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div>
                        <Marca href="/#inicio" className="text-[15px] md:text-[19px]" />
                    </div>

                    {/* Los perfiles solo en escritorio */}
                    <div className="hidden items-center gap-1.5 md:flex">
                        {redesSociales.map(({ label, href, Icon }) => {
                            const externo = href.startsWith('http')

                            return (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={externo ? '_blank' : undefined}
                                    rel={externo ? 'noopener' : undefined}
                                    className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-cyan-400"
                                >
                                    <Icon />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-[34px] border-t border-white/6 pt-[20px] md:mt-10 md:pt-6">
                    <p className="font-display text-[13px] tracking-[0.12em] text-neutral-400 uppercase md:text-[13px]">
                        © {anio} Fernando Gómez
                    </p>
                </div>
            </div>
        </footer>
    )
}
