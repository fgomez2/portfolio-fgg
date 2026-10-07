import CabeceraSeccion from '../CabeceraSeccion'
import { proyectos } from '../../datos/proyectos'
import TarjetaProyecto from './TarjetaProyecto'

export default function Proyectos() {
    return (
        <section id="proyectos" className="flex min-h-svh items-center py-24 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="04" titulo="Proyectos" />

                <div className="mt-10 grid gap-8 px-5 md:mt-14 md:grid-cols-2 md:px-0">
                    {proyectos.map((proyecto) => (
                        <TarjetaProyecto key={proyecto.slug} {...proyecto} />
                    ))}
                </div>
            </div>
        </section>
    )
}
