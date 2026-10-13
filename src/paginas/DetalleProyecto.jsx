import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router'
import { botonPrimario, botonSecundario } from '../components/botones'
import Etiqueta from '../components/Etiqueta'
import FondoRejilla from '../components/FondoRejilla'
import Footer from '../components/Footer'
import HeaderProyectos from '../components/HeaderProyectos'
import { GitHubIcono, WebIcono } from '../components/icons'
import TecnologiasProyecto from '../components/proyectos/TecnologiasProyecto'
import { buscarProyecto } from '../datos/proyectos'

export default function DetalleProyecto() {
    const { slug } = useParams()
    const proyecto = buscarProyecto(slug)

    useEffect(() => {
        if (!proyecto) return

        const tituloAnterior = document.title
        document.title = `${proyecto.titulo} · Fer Gómez`
        return () => {
            document.title = tituloAnterior
        }
    }, [proyecto])

    // Un slug que no existe (un enlace viejo, una errata) cae aquí, porque la
    // ruta /proyectos/:slug acepta cualquier valor. Va después del efecto para
    // no saltarse un hook entre renders.
    if (!proyecto) return <Navigate to="/" replace />

    const { titulo, imagen, repositorio, web, enConstruccion, resumen, descripcion, tecnologias } =
        proyecto

    return (
        <>
            <HeaderProyectos />
            <main>
                <FondoRejilla>
                    <article className="mx-auto min-h-svh w-full max-w-6xl px-6 pt-[calc(env(safe-area-inset-top)+124px)] pb-24 md:pt-[calc(env(safe-area-inset-top)+172px)] md:pb-32">
                        <Etiqueta>Proyecto</Etiqueta>

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

                        {/* centrado respecto a la imagen */}
                        {enConstruccion && (
                            <div className="flex max-w-[880px] justify-center">
                                <p className="font-display mt-4 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-[11px] tracking-[0.18em] text-neutral-300 uppercase md:text-[15px] md:tracking-[0.22em]">
                                    <span aria-hidden="true">🚧</span>
                                    En construcción
                                    <span aria-hidden="true">🚧</span>
                                </p>
                            </div>
                        )}

                        {descripcion.map((parrafo) => (
                            <p
                                key={parrafo}
                                className="font-display mt-6 max-w-[640px] text-[15px] leading-relaxed text-neutral-400 text-pretty md:text-[19px]"
                            >
                                {parrafo}
                            </p>
                        ))}

                        <TecnologiasProyecto tecnologias={tecnologias} />

                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            {/* Solo los proyectos desplegados traen `web` */}
                            {web && (
                                <a
                                    href={web}
                                    target="_blank"
                                    rel="noopener"
                                    className={`${botonPrimario} inline-flex h-12 px-6`}
                                >
                                    <WebIcono className="h-[17px] w-[17px]" />
                                    Ver la web
                                </a>
                            )}

                            <a
                                href={repositorio}
                                target="_blank"
                                rel="noopener"
                                // Si hay botón de web, este pasa a segundo plano
                                className={`${web ? botonSecundario : botonPrimario} inline-flex h-12 px-6`}
                            >
                                <GitHubIcono className="h-[17px] w-[17px]" />
                                Ver el código en GitHub
                            </a>
                        </div>
                    </article>
                </FondoRejilla>
            </main>
            <Footer />
        </>
    )
}
