import CabeceraSeccion from './CabeceraSeccion'

const CENTRO = 'IES Virgen del Espino (Soria)'

// De lo más reciente a lo más antiguo, como en un CV.
// BORRADOR: las descripciones son de los títulos oficiales; reescríbelas con
// lo que de verdad hiciste en cada uno si quieres que suenen a ti.
const ciclos = [
    {
        titulo: 'Desarrollo de Aplicaciones Multiplataforma',
        nivel: 'CFGS',
        descripcion: 'Aplicaciones de escritorio y móvil, con sus bases de datos y servicios.',
        periodo: 'Cursando, termino en 2027',
        enCurso: true,
    },
    {
        titulo: 'Desarrollo de Aplicaciones Web',
        nivel: 'CFGS',
        descripcion: 'Desarrollo web de principio a fin: interfaz, servidor, base de datos y despliegue.',
        periodo: '2023 – 2025',
    },
    {
        titulo: 'Sistemas Microinformáticos y Redes',
        nivel: 'CFGM',
        descripcion: 'Montaje y mantenimiento de equipos, sistemas operativos y redes locales.',
        periodo: '2020 – 2022',
    },
]

const idiomas = [{ titulo: 'Inglés B2', detalle: 'Certificado por Cambridge' }]

export default function Formacion() {
    return (
        <section id="formacion" className="flex min-h-svh items-center py-24 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="02" titulo="Formación" />

                <ol className="relative mt-10 max-w-[560px] md:mt-14">
                    {/* hilo de la cronología */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-2.5 bottom-2.5 left-[3px] w-px bg-gradient-to-b from-cyan-400/50 via-white/12 to-transparent"
                    />

                    {ciclos.map(({ titulo, nivel, descripcion, periodo, enCurso }) => (
                        <li key={titulo} className="relative pb-9 pl-7 last:pb-0 md:pb-11 md:pl-9">
                            <span
                                aria-hidden="true"
                                className={`absolute top-2 left-0 block h-[7px] w-[7px] rounded-full ${
                                    enCurso
                                        ? 'bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)]'
                                        : 'bg-neutral-700'
                                }`}
                            />

                            <h3 className="font-heading text-[17px] font-semibold tracking-tight text-white md:text-[21px]">
                                {titulo}
                            </h3>

                            <p className="font-display mt-1.5 text-[15px] leading-relaxed text-neutral-400 md:text-[17px]">
                                {nivel} en el {CENTRO}
                            </p>

                            <p className="font-display mt-1 text-[15px] leading-relaxed text-neutral-500 text-pretty md:text-[17px]">
                                {descripcion}
                            </p>

                            <p
                                className={`mt-3 font-mono text-[12px] tracking-[0.18em] uppercase md:text-[14px] md:tracking-[0.22em] ${
                                    enCurso ? 'text-cyan-400' : 'text-neutral-500'
                                }`}
                            >
                                {periodo}
                            </p>
                        </li>
                    ))}
                </ol>

                {/* fuera de la cronología */}
                <div className="mt-10 max-w-[560px] border-t border-white/10 pt-8 md:mt-12">
                    <h3 className="font-mono text-[10px] tracking-[0.18em] text-cyan-500 uppercase md:text-[15px] md:tracking-[0.22em]">
                        Idiomas
                    </h3>

                    <ul className="mt-4">
                        {idiomas.map(({ titulo, detalle }) => (
                            <li key={titulo} className="flex flex-wrap items-baseline gap-x-2.5">
                                <span className="font-heading text-[17px] font-semibold tracking-tight text-white md:text-[21px]">
                                    {titulo}
                                </span>
                                <span className="font-display text-[15px] text-neutral-400 md:text-[17px]">
                                    {detalle}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
