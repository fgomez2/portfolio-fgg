import { useEffect } from 'react'
import { useParams } from 'react-router'
import HeaderProyectos from '../components/HeaderProyectos'
import FondoRejilla from '../components/FondoRejilla'
import Footer from '../components/Footer'
import { GitHubIcono } from '../components/icons'
import { buscarProyecto } from '../datos/proyectos'

// El mismo <title> que index.html, para restaurarlo al salir de la página
const tituloBase = 'Fer Gómez · Desarrollador Full Stack'

export default function DetalleProyecto() {
    const { slug } = useParams()
    const proyecto = buscarProyecto(slug)

    useEffect(() => {
        if (!proyecto) return

        document.title = `${proyecto.titulo} · Fer Gómez`
        return () => {
            document.title = tituloBase
        }
    }, [proyecto])

    const { titulo, imagen, repositorio, resumen, descripcion, tecnologias } = proyecto

    return (
        <>
            <HeaderProyectos />
            <main>
                <FondoRejilla>
                    <article className="mx-auto min-h-svh w-full max-w-6xl px-6 pt-[calc(env(safe-area-inset-top)+124px)] pb-24 md:pt-[calc(env(safe-area-inset-top)+172px)] md:pb-32">
                        <div className="flex items-center gap-2.5 md:gap-3">
                            <span className="block h-px w-7 bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)] md:w-10" />
                            <span className="font-mono text-[10px] tracking-[0.18em] text-cyan-400 uppercase md:text-[11px] md:tracking-[0.22em]">
                                Proyecto
                            </span>
                        </div>

                        <h1 className="font-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-white md:text-[56px]">
                            {titulo}
                        </h1>

                        <p className="font-display mt-5 max-w-[640px] text-[15px] leading-relaxed text-neutral-300 text-pretty md:mt-6 md:text-[19px]">
                            {resumen}
                        </p>

                        <img
                            src={imagen}
                            alt={`Vista previa de ${titulo}`}
                            width="1200"
                            height="675"
                            className="mt-10 aspect-video w-full max-w-[880px] rounded-2xl border border-white/10 bg-black object-contain md:mt-12"
                        />

                        {descripcion.map((parrafo) => (
                            <p
                                key={parrafo}
                                className="font-display mt-6 max-w-[640px] text-[15px] leading-relaxed text-neutral-400 text-pretty md:text-[19px]"
                            >
                                {parrafo}
                            </p>
                        ))}

                        {tecnologias.length > 0 && (
                            <ul className="mt-8 flex flex-wrap gap-2.5">
                                {tecnologias.map((tecnologia) => (
                                    <li
                                        key={tecnologia}
                                        className="font-mono rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] tracking-[0.12em] text-neutral-300 uppercase"
                                    >
                                        {tecnologia}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <a
                            href={repositorio}
                            target="_blank"
                            rel="noopener"
                            className="font-heading mt-10 inline-flex h-12 items-center gap-2.5 rounded-full border border-cyan-400/55 bg-cyan-400/8 px-6 text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400/14 hover:shadow-[0_0_28px_-8px_rgb(34_211_238)]"
                        >
                            <GitHubIcono className="h-[17px] w-[17px]" />
                            Ver el código en GitHub
                        </a>
                    </article>
                </FondoRejilla>
            </main>
            <Footer />
        </>
    )
}
