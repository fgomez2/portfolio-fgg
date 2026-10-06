import {
    ApiIcono,
    BaseDatosIcono,
    DockerIcono,
    ReactIcono,
    SpringIcono,
    SupabaseIcono,
} from '../icons'

const iconos = {
    React: ReactIcono,
    Supabase: SupabaseIcono,
    'Spring Boot': SpringIcono,
    PostgreSQL: BaseDatosIcono,
    Docker: DockerIcono,
}

const columnas = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
}

export default function TecnologiasProyecto({ tecnologias }) {
    if (tecnologias.length === 0) return null

    return (
        <section className="mt-12 max-w-[640px] md:mt-16">
            <h2 className="font-heading text-[19px] font-semibold tracking-tight text-white md:text-[23px]">
                Tecnologías
            </h2>

            <ul
                className={`mt-5 grid gap-3 md:mt-6 md:gap-4 ${
                    columnas[tecnologias.length] ?? 'md:grid-cols-4'
                }`}
            >
                {tecnologias.map((tecnologia) => {
                    const Icono = iconos[tecnologia] ?? ApiIcono

                    return (
                        <li
                            key={tecnologia}
                            className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center"
                        >
                            <Icono className="h-7 w-7 text-cyan-400" />
                            <span className="font-heading text-[14px] font-medium text-neutral-200 md:text-[15px]">
                                {tecnologia}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
