import { Link } from 'react-router'
import { GitHubIcono } from '../icons'

// Botón compartido por los dos enlaces de la tarjeta.
// En móvil 44px, que es el mínimo que se puede pulsar con el dedo sin fallar.
const baseBoton =
    'flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-neutral-300 transition-colors transition-shadow hover:border-cyan-400/60 hover:text-cyan-400 hover:shadow-[0_0_28px_-8px_rgb(34_211_238)] focus-visible:border-cyan-400/60 focus-visible:text-cyan-400 md:h-12 md:w-12'

export default function TarjetaProyecto({ slug, titulo, imagen, repositorio }) {
    return (
        <article className="flex flex-col rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-md md:p-6">
            <h3 className="font-heading text-center text-lg font-semibold tracking-tight text-white md:text-xl">
                {titulo}
            </h3>

            {/* La caja es 16:9 porque es lo que miden las capturas de pantalla.
                No la aplanes para ganar alto: con object-contain, una imagen
                16:9 en una caja más plana sale con barras negras a los lados. */}
            <img
                src={imagen}
                alt={`Vista previa de ${titulo}`}
                width="1200"
                height="675"
                loading="lazy"
                className="mt-4 aspect-video w-full rounded-xl border border-white/8 bg-black object-contain md:mt-5"
            />

            <div className="mt-5 flex items-center justify-center gap-4 md:mt-6">
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
