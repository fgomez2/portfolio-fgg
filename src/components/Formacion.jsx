import CabeceraSeccion from './CabeceraSeccion'
import Cronologia from './Cronologia'
import HitoCronologia from './HitoCronologia'

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
    { titulo: 'Inglés B2', detalle: 'Certificado por Cambridge, preparándome para obtener el C1' },
]

export default function Formacion() {
    return (
        <section id="formacion" className="flex min-h-svh items-center py-24 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="02" titulo="Formación" />

                <Cronologia>
                    {ciclos.map(({ titulo, nivel, descripcion, periodo, enCurso }) => (
                        <HitoCronologia key={titulo} periodo={periodo} titulo={titulo} destacado={enCurso}>
                            <p className="font-display mt-1.5 text-[15px] leading-relaxed text-neutral-400 md:text-[17px]">
                                {nivel} en el {CENTRO}
                            </p>

                            <p className="font-display mt-1 text-[15px] leading-relaxed text-neutral-500 text-pretty md:text-[17px]">
                                {descripcion}
                            </p>
                        </HitoCronologia>
                    ))}
                </Cronologia>

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
