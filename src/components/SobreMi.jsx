import CabeceraSeccion from './CabeceraSeccion'

const datos = [
    { etiqueta: 'Ubicación', valor: 'Soria' },
    {
        etiqueta: 'Idiomas',
        valor: 'Español (nativo) · Inglés (B2 Cambridge, preparando el C1)',
    },
    { etiqueta: 'Busco', valor: 'Prácticas en el extranjero' },
]

export default function SobreMi() {
    return (
        <section id="sobre-mi" className="flex min-h-svh items-center py-24 md:py-28">
            <div className="mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="01" titulo="Sobre mí" />

                <div className="mt-6 md:mt-8 md:flex md:items-start md:gap-14">
                    <div className="max-w-[560px]">
                        <p className="font-display text-[15px] leading-relaxed text-neutral-300 text-pretty md:text-[19px]">
                            Soy Fernando Gómez. Empecé montando equipos y acabé construyendo
                            aplicaciones: me gusta entender cómo funcionan las cosas, desde el
                            hardware hasta la interfaz.
                        </p>

                        <p className="font-display mt-4 text-[15px] leading-relaxed text-neutral-400 text-pretty md:mt-5 md:text-[19px]">
                            Vengo de Sistemas Microinformáticos y Redes, que me llevó a
                            unas prácticas en Italia trabajando con hardware en una
                            empresa de RFID. Después di el salto al desarrollo con el
                            ciclo de Desarrollo de Aplicaciones Web y, en las prácticas
                            en Solarig, trabajé en la intranet de la empresa con Laravel,
                            PHP, Power Automate y SharePoint. Ahora curso Desarrollo de
                            Aplicaciones Multiplataforma para completar el perfil.
                        </p>

                        <p className="font-display mt-4 text-[15px] leading-relaxed text-neutral-400 text-pretty md:mt-5 md:text-[19px]">
                            Este portfolio es un buen ejemplo de cómo trabajo. Lo he
                            hecho con React, Vite y Tailwind, y en él cuido lo que no
                            siempre se ve, que funcione igual de bien en un móvil que en
                            un ordenador o un portátil
                        </p>

                        <p className="font-display mt-4 text-[15px] leading-relaxed text-neutral-400 text-pretty md:mt-5 md:text-[19px]">
                            Ya sé lo que es adaptarse a otro país, a otra forma de
                            trabajar y a otro idioma, y tengo el B2 de Cambridge en
                            inglés. Quiero un equipo en el que pueda aportar desde el
                            primer día y aprender de gente con más experiencia que yo.
                        </p>
                    </div>

                    <dl className="mt-10 w-full max-w-[560px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:mt-0 md:ml-auto md:w-[320px] md:p-6">
                        {datos.map(({ etiqueta, valor }) => (
                            <div
                                key={etiqueta}
                                className="border-t border-white/8 pt-4 first:border-0 first:pt-0 [&:not(:first-child)]:mt-4"
                            >
                                <dt className="font-mono text-[10px] tracking-[0.18em] text-cyan-400 uppercase md:text-[11px] md:tracking-[0.22em]">
                                    {etiqueta}
                                </dt>
                                <dd className="font-display mt-1.5 text-[15px] leading-relaxed text-neutral-300 text-pretty md:text-[16px]">
                                    {valor}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
