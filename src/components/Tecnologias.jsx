import CabeceraSeccion from './CabeceraSeccion'
import { categorias } from '../datos/tecnologias'
import {
    BaseDatosIcono,
    CodigoIcono,
    IaIcono,
    MartilloIcono,
    MovilIcono,
    RedIcono,
    ServidorIcono,
} from './icons'

const iconos = {
    codigo: CodigoIcono,
    servidor: ServidorIcono,
    bbdd: BaseDatosIcono,
    movil: MovilIcono,
    herramientas: MartilloIcono,
    red: RedIcono,
    ia: IaIcono,
}

export default function Tecnologias() {
    return (
        <section id="tecnologias" className="flex min-h-svh items-center py-24 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="05" titulo="Tecnologías" />

                <div className="mt-10 grid gap-6 px-5 md:mt-14 md:grid-cols-3 md:gap-7 md:px-0">
                    {categorias.map(({ id, titulo, icono, items }) => {
                        const Icono = iconos[icono] ?? CodigoIcono

                        return (
                            <article
                                key={id}
                                className="flex flex-col rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-md md:p-6"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/8 text-cyan-400">
                                        <Icono className="h-5 w-5" />
                                    </span>
                                    <h3 className="font-heading text-[17px] font-semibold tracking-tight text-white md:text-[19px]">
                                        {titulo}
                                    </h3>
                                </div>

                                <ul className="mt-5 space-y-2.5">
                                    {items.map((item) => (
                                        <li
                                            key={item}
                                            className="font-display flex items-center gap-2.5 text-[15px] text-neutral-300 md:text-[16px]"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="block h-1 w-1 shrink-0 rounded-full bg-cyan-400"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
