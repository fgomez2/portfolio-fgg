import { useEffect, useState } from 'react'
import CabeceraSeccion from './CabeceraSeccion'
import { redesSociales } from '../redes'
import { CheckIcono, CopiarIcono, DescargarIcono } from './icons'

const CORREO = 'fgomezdev2@gmail.com'
// TODO: dejar el PDF en public/ con este nombre, o el botón dará un 404.
const CV = '/cv-fernando-gomez.pdf'

const perfiles = redesSociales.filter(({ href }) => href.startsWith('http'))

export default function Contacto() {
    const [copiado, setCopiado] = useState(false)

    useEffect(() => {
        if (!copiado) return

        const aviso = setTimeout(() => setCopiado(false), 2000)
        return () => clearTimeout(aviso)
    }, [copiado])

    async function copiarCorreo() {
        try {
            await navigator.clipboard.writeText(CORREO)
            setCopiado(true)
        } catch {
            // Si el navegador bloquea el portapapeles no pasa nada: el correo
            // está escrito a la vista y el enlace mailto sigue funcionando.
        }
    }

    return (
        <section id="contacto" className="relative flex min-h-svh items-center py-24 md:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 h-[380px] w-[520px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(34_211_238/0.10)_0%,transparent_70%)] md:h-[560px] md:w-[900px]"
            />

            <div className="relative mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="05" titulo="Contacto" />

                <p className="font-display mt-6 max-w-[560px] text-[15px] leading-relaxed text-neutral-300 text-pretty md:mt-8 md:text-[19px]">
                    Busco prácticas como desarrollador Full Stack. Si tienes una
                    vacante, una duda sobre algo de lo que hay aquí o quieres ver
                    más código, escríbeme.
                </p>

                <a
                    href={`mailto:${CORREO}`}
                    className="font-display mt-10 inline-block text-[24px] font-semibold tracking-[-0.03em] text-white transition-all duration-300 hover:text-cyan-400 hover:[text-shadow:0_0_12px_rgb(34_211_238)] focus-visible:text-cyan-400 md:mt-12 md:text-[52px]"
                >
                    {CORREO}
                </a>

                <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-9">
                    <button
                        type="button"
                        onClick={copiarCorreo}
                        className="font-heading flex h-11 items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-[18px] text-sm font-medium text-neutral-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-400 focus-visible:border-cyan-400/60 focus-visible:text-cyan-400"
                    >
                        {copiado ? <CheckIcono /> : <CopiarIcono />}
                        <span aria-live="polite">
                            {copiado ? 'Copiado' : 'Copiar correo'}
                        </span>
                    </button>

                    <a
                        href={CV}
                        download
                        className="font-heading flex h-11 items-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-[18px] text-sm font-medium text-neutral-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-400 focus-visible:border-cyan-400/60 focus-visible:text-cyan-400"
                    >
                        <DescargarIcono />
                        Descargar CV
                    </a>
                </div>

                <p className="font-display mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-neutral-400 md:mt-7 md:text-[17px]">
                    {perfiles.map(({ label, href, usuario }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener"
                            className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-cyan-400 hover:decoration-cyan-400/60 focus-visible:text-cyan-400 focus-visible:decoration-cyan-400/60"
                        >
                            {usuario ? `${label} ${usuario}` : label}
                        </a>
                    ))}
                </p>

                <p className="font-display mt-10 flex items-center gap-2.5 text-[15px] text-neutral-400 md:mt-12 md:text-[17px]">
                    <span
                        aria-hidden="true"
                        className="block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)]"
                    />
                    Buscando prácticas en España y Europa.
                </p>
            </div>
        </section>
    )
}
