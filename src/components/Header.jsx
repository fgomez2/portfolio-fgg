import { useEffect, useState } from 'react'
import BarraSuperior from './BarraSuperior'
import { botonPrimario } from './botones'
import { FlechaDerechaIcono, FlechaDerechaPequenaIcono } from './icons'
import Marca from './Marca'
import { redesSociales } from '../redes'

const links = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', n: '01', label: 'Sobre mí' },
    { id: 'formacion', n: '02', label: 'Formación' },
    { id: 'experiencia', n: '03', label: 'Experiencia' },
    { id: 'proyectos', n: '04', label: 'Proyectos' },
    { id: 'tecnologias', n: '05', label: 'Tecnologías' },
]
// Contacto no está en el menú: se llega por el botón, que es el destacado

export default function Header() {
    const [abierto, setAbierto] = useState(false)
    const [activo, setActivo] = useState(links[0].id)

    // resalta en el menú la sección que se está viendo
    useEffect(() => {
        const sections = links
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean)

        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

                if (visible) setActivo(visible.target.id)
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    // con la hoja abierta, bloquear el scroll de fondo y cerrar con esc
    useEffect(() => {
        if (!abierto) return

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setAbierto(false)
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [abierto])

    return (
        <>
            <BarraSuperior>
                <Marca href="#inicio" />

                <nav className="hidden items-center gap-9 md:flex">
                    {links.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            aria-current={activo === id ? 'true' : undefined}
                            className={`font-heading group relative flex h-10 items-center gap-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                                activo === id ? 'text-white' : 'text-neutral-400'
                            }`}
                        >
                            {activo === id && (
                                <span className="block h-[5px] w-[5px] rounded-full bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)]" />
                            )}
                            <span>{label}</span>
                            <span className="absolute -bottom-[7px] left-0 h-px w-0 bg-cyan-400 shadow-[0_0_8px_rgb(34_211_238)] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-3.5 md:flex">
                    <a href="#contacto" className={`${botonPrimario} flex h-11 px-[22px]`}>
                        Contacto
                        <FlechaDerechaIcono className="h-[15px] w-[15px]" />
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setAbierto(!abierto)}
                    aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={abierto}
                    aria-controls="menu-movil"
                    className="flex h-11 w-11 items-center justify-center rounded-full text-cyan-400 md:hidden"
                >
                    <span className="relative block h-[11px] w-[18px]">
                        <span
                            className={`absolute top-0 left-0 block h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 ${
                                abierto ? 'translate-y-[4.75px] rotate-45' : ''
                            }`}
                        />
                        <span
                            className={`absolute bottom-0 left-0 block h-[1.5px] rounded-full bg-current transition-all duration-300 ${
                                abierto ? 'w-[18px] -translate-y-[4.75px] -rotate-45' : 'w-[13px]'
                            }`}
                        />
                    </span>
                </button>
            </BarraSuperior>

            {/* Fondo oscurecido de la hoja — solo móvil */}
            <div
                onClick={() => setAbierto(false)}
                aria-hidden="true"
                className={`fixed inset-0 z-30 bg-black/55 backdrop-blur-[3px] transition-opacity duration-300 md:hidden ${
                    abierto ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
            />

            <nav
                id="menu-movil"
                aria-label="Navegación principal"
                aria-hidden={!abierto}
                className={`fixed inset-x-0 bottom-0 z-40 rounded-t-[28px] border-t border-cyan-400/28 bg-[#04080a]/95 px-[18px] pt-2.5 pb-[calc(env(safe-area-inset-bottom)+26px)] backdrop-blur-lg transition-transform duration-[380ms] ease-[cubic-bezier(.32,.72,0,1)] md:hidden ${
                    abierto
                        ? 'translate-y-0 shadow-[0_-18px_80px_-26px_rgb(34_211_238)]'
                        : 'translate-y-[105%]'
                }`}
            >
                <span
                    aria-hidden="true"
                    className="mx-auto mb-4 block h-1 w-10 rounded-full bg-white/16"
                />

                <ul className="flex flex-col">
                    {links.map(({ id, n, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={() => setAbierto(false)}
                                tabIndex={abierto ? undefined : -1}
                                aria-current={activo === id ? 'true' : undefined}
                                className="flex h-14 items-center gap-3.5 border-b border-white/6 px-1.5 transition-colors hover:bg-white/3"
                            >
                                <span
                                    className={`w-5 font-mono text-[11px] ${
                                        activo === id
                                            ? 'text-cyan-400 [text-shadow:0_0_12px_rgb(34_211_238)]'
                                            : 'text-neutral-600'
                                    }`}
                                >
                                    {n}
                                </span>
                                <span
                                    className={`font-heading grow text-[17px] font-medium tracking-[-0.01em] ${
                                        activo === id ? 'text-white' : 'text-neutral-400'
                                    }`}
                                >
                                    {label}
                                </span>
                                {activo === id ? (
                                    <span className="block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)]" />
                                ) : (
                                    <FlechaDerechaPequenaIcono className="h-4 w-4 text-neutral-700" />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contacto"
                    onClick={() => setAbierto(false)}
                    tabIndex={abierto ? undefined : -1}
                    className="font-heading mt-[18px] flex h-13 items-center justify-center gap-2.5 rounded-full border border-cyan-400/55 bg-cyan-400/9 text-[15px] font-medium text-cyan-400 shadow-[0_0_34px_-12px_rgb(34_211_238)] transition-colors hover:bg-cyan-400/14"
                >
                    Contacto
                    <FlechaDerechaIcono />
                </a>

                <div className="mt-2.5 flex items-center justify-center gap-1.5">
                    {redesSociales.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            onClick={() => setAbierto(false)}
                            tabIndex={abierto ? undefined : -1}
                            className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-cyan-400"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </nav>
        </>
    )
}
