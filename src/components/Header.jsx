import { useEffect, useState } from 'react'
import {
    FlechaDerechaIcono,
    FlechaDerechaPequenaIcono,
    GitHubIcono,
    LinkedInIcono,
    CorreoIcono,
} from './icons'

const links = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', n: '01', label: 'Sobre mí' },
    { id: 'proyectos', n: '02', label: 'Proyectos' },
    { id: 'tecnologias', n: '03', label: 'Tecnologías' },
    { id: 'contacto', n: '04', label: 'Contacto' },
]

const redesSociales = [
    { label: 'GitHub', href: '#', Icon: GitHubIcono },
    { label: 'LinkedIn', href: '#', Icon: LinkedInIcono },
    { label: 'Correo', href: '#contacto', Icon: CorreoIcono },
]

export default function Header() {
    const [abierto, setAbierto] = useState(false)
    const [activo, setActivo] = useState(links[0].id)

    // chip de la barra y marca en el menú
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

    const etiquetaActiva = links.find((link) => link.id === activo)?.label ?? links[0].label

    return (
        <>
            <header className="fixed inset-x-0 top-[calc(env(safe-area-inset-top)+14px)] z-50 flex justify-center px-3.5 md:top-[calc(env(safe-area-inset-top)+20px)] md:px-6">
                <div className="relative grid h-14 w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center overflow-hidden rounded-full border border-cyan-400/20 bg-black/70 pr-1.5 pl-[18px] shadow-[0_0_34px_-12px_rgb(34_211_238)] backdrop-blur-md md:flex md:h-16 md:justify-between md:pr-2.5 md:pl-[26px]">
                    <a
                        href="#inicio"
                        className="font-heading justify-self-start text-lg font-semibold tracking-tight text-white transition-colors hover:text-cyan-400 md:text-[19px]"
                    >
                        fgg
                        <span className="text-cyan-400 [text-shadow:0_0_12px_rgb(34_211_238)]">.</span>
                    </a>

                    {/* Sección actual — solo móvil, donde no caben los links */}
                    <div className="flex h-[26px] items-center gap-[7px] justify-self-center rounded-full border border-white/8 bg-white/4 pr-[11px] pl-[9px] md:hidden">
                        <span className="block h-[5px] w-[5px] animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)]" />
                        <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-300 uppercase">
                            {etiquetaActiva}
                        </span>
                    </div>

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
                                {label}
                                <span className="absolute -bottom-[7px] left-0 h-px w-0 bg-cyan-400 shadow-[0_0_8px_rgb(34_211_238)] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3.5 md:flex">
                        <a
                            href="#contacto"
                            className="font-heading flex h-11 items-center gap-2.5 rounded-full border border-cyan-400/55 bg-cyan-400/8 px-[22px] text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400/14 hover:shadow-[0_0_28px_-8px_rgb(34_211_238)]"
                        >
                            Hablemos
                            <FlechaDerechaIcono className="h-[15px] w-[15px]" />
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setAbierto(!abierto)}
                        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={abierto}
                        aria-controls="menu-movil"
                        className="flex h-11 w-11 items-center justify-center justify-self-end rounded-full text-cyan-400 md:hidden"
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
                </div>
            </header>

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
                className={`fixed inset-x-0 bottom-0 z-40 rounded-t-[28px] border-t border-cyan-400/28 bg-[#04080a]/95 px-[18px] pt-2.5 pb-[calc(env(safe-area-inset-bottom)+26px)] shadow-[0_-18px_80px_-26px_rgb(34_211_238)] backdrop-blur-lg transition-transform duration-[380ms] ease-[cubic-bezier(.32,.72,0,1)] md:hidden ${
                    abierto ? 'translate-y-0' : 'translate-y-[105%]'
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
                    Hablemos
                    <FlechaDerechaIcono />
                </a>

                <div className="mt-2.5 flex items-center justify-center gap-1.5">
                    {redesSociales.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
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
