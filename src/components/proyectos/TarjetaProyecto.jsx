import { Link } from 'react-router'
import { GitHubIcono } from '../icons'

// Botón compartido por los dos enlaces de la tarjeta
const baseBoton =
    'flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-neutral-300 transition-colors transition-shadow hover:border-cyan-400/60 hover:text-cyan-400 hover:shadow-[0_0_28px_-8px_rgb(34_211_238)] focus-visible:border-cyan-400/60 focus-visible:text-cyan-400'

export default function TarjetaProyecto({ slug, titulo, imagen, repositorio }) {
    return (
        <article className="flex flex-col rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-md md:p-6">
            <h3 className="font-heading text-center text-lg font-semibold tracking-tight text-white md:text-xl">
                {titulo}
            </h3>

            <img
                src={imagen}
                alt={`Vista previa de ${titulo}`}
                width="1200"
                height="675"
                loading="lazy"
                className="mt-5 aspect-video w-full rounded-xl border border-white/8 bg-black object-contain"
            />

            <div className="mt-6 flex items-center justify-center gap-4">
                <Link
                    to={`/proyectos/${slug}`}
                    aria-label={`Ver el detalle de ${titulo}`}
                    className={`${baseBoton} font-heading text-sm font-medium`}
                >
                    Ir
                </Link>
                <a
                    href={repositorio}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Código de ${titulo} en GitHub`}
                    className={baseBoton}
                >
                    <GitHubIcono />
                </a>
            </div>
        </article>
    )
}
