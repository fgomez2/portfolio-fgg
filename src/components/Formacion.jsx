import CabeceraSeccion from './CabeceraSeccion'

const CENTRO = 'IES Virgen del Espino (Soria)'

// del más nuevo al más antiguo
const ciclos = [
    {
        titulo: 'Desarrollo de Aplicaciones Multiplataforma',
        nivel: 'CFGS',
        descripcion: 'Aplicaciones de escritorio (Java, JavaFX) y móvil (Android, Kotlin), con sus bases de datos y servicios.',
        periodo: 'Cursando, termino en 2027',
        enCurso: true,
    },
    {
        titulo: 'Desarrollo de Aplicaciones Web',
        nivel: 'CFGS',
        descripcion: 'Desarrollo web de principio a fin: interfaz (HTML, CSS, JavaScript), servidor (PHP, Node.js), base de datos (SQL, MySQL, MongoDB) y despliegue.',
        periodo: '2023 – 2025',
    },
    {
        titulo: 'Sistemas Microinformáticos y Redes',
        nivel: 'CFGM',
        descripcion: 'Montaje y mantenimiento de equipos, sistemas operativos y redes locales.',
        periodo: '2020 – 2022',
    },
]

const idiomas = [
    { titulo: 'Inglés B2', detalle: 'Certificado por Cambridge, preparándome para obtener el C1' }]

export default function Formacion() {
    return (
        <section id="formacion" className="flex min-h-svh items-center py-24 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="02" titulo="Formación" />

                <ol className="relative mt-10 max-w-[560px] md:mt-14 md:max-w-[740px]">
                    {/* hilo de la cronología */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-2.5 bottom-2.5 left-[3px] w-px bg-gradient-to-b from-cyan-400/50 via-white/12 to-transparent md:left-[145px]"
                    />

                    {ciclos.map(({ titulo, nivel, descripcion, periodo, enCurso }) => (
                        <li
                            key={titulo}
                            className="grid gap-x-8 pb-9 last:pb-0 md:grid-cols-[110px_1fr] md:pb-10"
                        >
                            <p
                                className={`order-last mt-3 font-mono text-[12px] tracking-[0.18em] uppercase md:order-first md:mt-0 md:pt-[5px] md:text-[13px] md:leading-[1.5] md:tracking-[0.14em] ${
                                    enCurso ? 'text-cyan-400' : 'text-neutral-500'
                                }`}
                            >
                                {periodo}
                            </p>

                            <div className="relative pl-7">
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
                            </div>
                        </li>
                    ))}
                </ol>

                {/* fuera de la cronología */}
                <div className="mt-10 max-w-[560px] border-t border-white/10 pt-8 md:mt-12 md:max-w-[740px]">
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
