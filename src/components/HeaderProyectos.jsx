import { Link } from 'react-router'
import { FlechaIzquierdaIcono } from './icons'

// otra versión del header, para el detalle de los proyectos
export default function HeaderProyectos() {
    return (
        <header className="fixed inset-x-0 top-[calc(env(safe-area-inset-top)+14px)] z-50 flex justify-center px-3.5 md:top-[calc(env(safe-area-inset-top)+20px)] md:px-6">
            <div className="flex h-14 w-full max-w-6xl items-center justify-between overflow-hidden rounded-full border border-cyan-400/20 bg-black/70 pr-1.5 pl-[18px] shadow-[0_0_34px_-12px_rgb(34_211_238)] backdrop-blur-md md:h-16 md:pr-2.5 md:pl-[26px]">
                <Link
                    to="/"
                    className="font-heading text-lg font-semibold tracking-tight text-white transition-colors hover:text-cyan-400 md:text-[19px]"
                >
                    fgg
                    <span className="text-cyan-400 [text-shadow:0_0_12px_rgb(34_211_238)]">.</span>
                </Link>

                <Link
                    to="/"
                    className="font-heading flex h-11 items-center gap-2.5 rounded-full border border-cyan-400/55 bg-cyan-400/8 px-[18px] text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400/14 hover:shadow-[0_0_28px_-8px_rgb(34_211_238)] md:px-[22px]"
                >
                    <FlechaIzquierdaIcono className="h-[15px] w-[15px]" />
                    Volver
                </Link>
            </div>
        </header>
    )
}
