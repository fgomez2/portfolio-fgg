import CabeceraSeccion from './CabeceraSeccion'

export default function SobreMi() {
    return (
        <section id="sobre-mi" className="flex min-h-svh items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
                <CabeceraSeccion numero="01" titulo="Sobre mí" />

                {/* BORRADOR */}
                <p className="font-display mt-6 max-w-[560px] text-[15px] leading-relaxed text-neutral-300 text-pretty md:mt-8 md:text-[19px]">
                    Soy Fernando Gómez, desarrollador Full Stack Junior... (EJEMPLO)
                </p>
                <p className="font-display mt-4 max-w-[560px] text-[15px] leading-relaxed text-neutral-400 text-pretty md:mt-5 md:text-[19px]">
                    Este portfolio es un ejemplo de cómo trabajo. Está hecho con
                    React, Vite y Tailwind, y en él cuido cosas que no siempre
                    se ven: que funcione igual de bien en un móvil que en un
                    portátil, que se pueda navegar con el teclado y que cargue
                    rápido. (EJEMPLOO)
                </p>
                {/* TODO: párrafo de dónde soy y qué busco. */}
            </div>
        </section>
    )
}
