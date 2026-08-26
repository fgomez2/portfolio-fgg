import fotoPerfil from '../assets/foto_git.jpg'

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
                        Fer{' '}
                        <br className="md:hidden" />
                        Gómez
                    </h1>

                    <p className="font-display mt-5 max-w-[300px] text-[15px] leading-relaxed text-neutral-400 text-pretty md:mt-7 md:max-w-[560px] md:text-[19px]">
                        Desarrollador Full Stack Junior
                    </p>
                    <p className="font-display mt-1.5 max-w-[300px] text-[15px] leading-relaxed text-neutral-500 text-pretty md:mt-2 md:max-w-[560px] md:text-[19px]">
                        zzz... aquí irá una descripcion
                    </p>
                </div>

                <img
                    src={fotoPerfil}
                    alt="@fgomez2 en Github"
                    className="mt-8 mx-auto md:mx-0 h-[132px] w-[132px] shrink-0 rounded-full border border-cyan-400/30 object-cover object-top shadow-[0_0_34px_-12px_rgb(34_211_238)] md:mt-0 md:mr-[10%] md:h-[280px] md:w-[280px] md:shadow-[0_0_70px_-20px_rgb(34_211_238)]"
                />
            </div>
        </section>
    )
}
