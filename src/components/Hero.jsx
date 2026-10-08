import fotoPerfil from '../assets/foto_fgg.jpg'
import { aprendiendo, stackPrincipal } from '../datos/tecnologias'
import { iconoDe } from './iconosTecnologias'
import { FlechaAbajoIcono } from './icons'

const baseTarjeta =
    'flex w-[92px] flex-col items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center md:w-[104px]'

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex min-h-svh flex-col overflow-hidden pt-[calc(env(safe-area-inset-top)+112px)] md:justify-center md:pt-0"
        >
            {/* neón detrás de la barra */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[520px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(34_211_238/0.15)_0%,transparent_70%)] md:-top-70 md:h-[700px] md:w-[1100px] md:bg-[radial-gradient(50%_50%_at_50%_50%,rgb(34_211_238/0.13)_0%,transparent_70%)]"
            />

            <div className="relative mx-auto w-full max-w-6xl px-6 md:flex md:items-center md:justify-between md:gap-14">
                <div>
                    <div className="flex items-center gap-2.5 md:gap-3">
                        <span className="block h-px w-7 bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)] md:w-10" />
                        <span className="font-mono text-[10px] tracking-[0.18em] text-cyan-400 uppercase md:text-[11px] md:tracking-[0.22em]">
                            Portfolio
                        </span>
                    </div>

                    <h1 className="mt-[18px] font-display text-[44px] leading-[1.05] font-semibold tracking-[-0.035em] text-white md:mt-6 md:text-[92px] md:leading-none md:tracking-[-0.04em]">
                        Fernando{' '}
                        <br className="md:hidden" />
                        Gómez
                    </h1>

                    <p className="font-display mt-5 max-w-[300px] text-[15px] leading-relaxed text-neutral-400 text-pretty md:mt-7 md:max-w-[560px] md:text-[19px]">
                        Desarrollador Full Stack Junior
                    </p>
                    <p className="font-display mt-1.5 max-w-[300px] text-[15px] leading-relaxed text-neutral-500 text-pretty md:mt-2 md:max-w-[560px] md:text-[19px]">
                        Con experiencia profesional en desarrollo y hardware, busco unas prácticas en el extranjero donde aportar lo que sé y seguir creciendo en un equipo.
                    </p>

                    <a
                        href="#sobre-mi"
                        className="font-heading mt-7 inline-flex h-11 items-center gap-2.5 rounded-full border border-cyan-400/55 bg-cyan-400/8 px-[22px] text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400/14 hover:shadow-[0_0_28px_-8px_rgb(34_211_238)] md:mt-9"
                    >
                        Conoce más sobre mí
                        <FlechaAbajoIcono className="h-[15px] w-[15px]" />
                    </a>
                </div>

                <div className="mt-8 flex shrink-0 flex-col items-center md:relative md:top-[77px] md:mt-0 md:mr-[10%]">
                    <img
                        src={fotoPerfil}
                        alt="Fer Gómez, Desarrollador Full Stack"
                        className="h-[132px] w-[132px] rounded-full border border-cyan-400/30 object-cover object-[center_12%] shadow-[0_0_34px_-12px_rgb(34_211_238)] md:h-[280px] md:w-[280px] md:shadow-[0_0_70px_-20px_rgb(34_211_238)]"
                    />

                    <div className="mt-7 w-full max-w-[300px] md:mt-9 md:max-w-[340px]">
                        <h2 className="font-display text-center text-[10px] tracking-[0.18em] text-neutral-400 uppercase md:text-[13px] md:tracking-[0.12em]">
                            Stack
                        </h2>
                        <ul className="mt-3.5 flex flex-wrap justify-center gap-2.5">
                            {stackPrincipal.map((tecnologia) => {
                                const Icono = iconoDe(tecnologia)

                                return (
                                    <li
                                        key={tecnologia}
                                        className={`${baseTarjeta} border-white/10 bg-white/5`}
                                    >
                                        <Icono className="h-5 w-5 text-cyan-400" />
                                        <span className="font-heading text-[12px] font-medium text-neutral-200 md:text-[13px]">
                                            {tecnologia}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>

                        <h2 className="font-display mt-6 text-center text-[10px] tracking-[0.18em] text-neutral-400 uppercase md:text-[13px] md:tracking-[0.12em]">
                            Aprendiendo
                        </h2>
                        <ul className="mt-3.5 flex flex-wrap justify-center gap-2.5">
                            {aprendiendo.map((tecnologia) => {
                                const Icono = iconoDe(tecnologia)

                                return (
                                    <li
                                        key={tecnologia}
                                        className={`${baseTarjeta} border-cyan-400/30 bg-cyan-400/8`}
                                    >
                                        <Icono className="h-5 w-5 text-cyan-400" />
                                        <span className="font-heading text-[12px] font-medium text-cyan-100 md:text-[13px]">
                                            {tecnologia}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
