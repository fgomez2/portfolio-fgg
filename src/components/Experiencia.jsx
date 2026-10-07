import CabeceraSeccion from './CabeceraSeccion'

const experiencias = [
    {
        puesto: 'Desarrollador Full Stack en prácticas',
        empresa: 'Solarig Global Services S.A',
        lugar: 'Soria, presencial',
        periodo: 'Sept. – Dec. 2025',
        masNuevo: true,
        descripcion:
            'Falta por rellenaaar.',
        logros: [
            'Rehíce...',
            'Monté...',
            'Unifiqué...',
            'Soy...',
        ],
    },
    {
        puesto: 'IT & Hardware Technician (Intern)',
        empresa: 'Sensor ID Srl',
        lugar: 'Campochiaro (Italia), presencial',
        periodo: 'Mar. – Jun. 2022',
        descripcion:
            'Falta por rellenaaar.',
        logros: [
            'Rehíce...',
            'Sustituí...',
            'Optimicé...',
            'Documenté...',
        ],
    },
]

export default function Experiencia() {
    return (
        <section id="experiencia" className="flex min-h-svh items-center py-24 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="03" titulo="Experiencia" />

                <ol className="relative mt-10 max-w-[560px] md:mt-14 md:max-w-[740px]">
                    {/* hilo de la cronología */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-2.5 bottom-2.5 left-[3px] w-px bg-gradient-to-b from-cyan-400/50 via-white/12 to-transparent md:left-[145px]"
                    />

                    {experiencias.map(
                        ({ puesto, empresa, lugar, periodo, masNuevo, descripcion, logros }) => (
                            <li
                                key={puesto}
                                className="grid gap-x-8 pb-9 last:pb-0 md:grid-cols-[110px_1fr] md:pb-10"
                            >
                                <p
                                    className={`order-last mt-3 font-mono text-[12px] tracking-[0.18em] uppercase md:order-first md:mt-0 md:pt-[5px] md:text-[13px] md:leading-[1.5] md:tracking-[0.14em] ${
                                        masNuevo ? 'text-cyan-400' : 'text-neutral-500'
                                    }`}
                                >
                                    {periodo}
                                </p>

                                <div className="relative pl-7">
                                    <span
                                        aria-hidden="true"
                                        className={`absolute top-2 left-0 block h-[7px] w-[7px] rounded-full ${
                                            masNuevo
                                                ? 'bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)]'
                                                : 'bg-neutral-700'
                                        }`}
                                    />

                                    <h3 className="font-heading text-[17px] font-semibold tracking-tight text-white md:text-[21px]">
                                        {puesto}
                                    </h3>

                                    <p className="font-display mt-1.5 text-[15px] leading-relaxed text-neutral-400 md:text-[17px]">
                                        {empresa} · {lugar}
                                    </p>

                                    <p className="font-display mt-1 text-[15px] leading-relaxed text-neutral-500 text-pretty md:text-[17px]">
                                        {descripcion}
                                    </p>

                                    <ul className="mt-3.5 space-y-2">
                                        {logros.map((logro) => (
                                            <li
                                                key={logro}
                                                className="font-display relative pl-[18px] text-[15px] leading-relaxed text-neutral-500 text-pretty md:text-[17px]"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute top-[0.62em] left-0 block h-[3px] w-[3px] rounded-full bg-cyan-400/70"
                                                />
                                                {logro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ),
                    )}
                </ol>
            </div>
        </section>
    )
}
