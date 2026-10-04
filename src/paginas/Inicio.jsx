import CabeceraSeccion from '../components/CabeceraSeccion'
import FondoRejilla from '../components/FondoRejilla'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Proyectos from '../components/proyectos/Proyectos'
import SobreMi from '../components/SobreMi'

export default function Inicio() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <FondoRejilla>
                    <SobreMi />
                    <Proyectos />

                    {/* BLOQUE TEMPORAL, se va sustituyendo por su componente. BORRAR. */}
                    {[
                        { id: 'tecnologias', titulo: 'Tecnologías' },
                        { id: 'contacto', titulo: 'Contacto' },
                    ].map(({ id, titulo }, i) => (
                        <section key={id} id={id} className="flex min-h-svh items-center">
                            <div className="mx-auto w-full max-w-6xl px-6">
                                <CabeceraSeccion numero={String(i + 3).padStart(2, '0')} titulo={titulo} />
                                <p className="font-display mt-4 max-w-[560px] text-[15px] leading-relaxed text-neutral-400 md:text-[19px]">
                                    Sección en construcción.
                                </p>
                            </div>
                        </section>
                    ))}
                </FondoRejilla>
            </main>
            <Footer />
        </>
    )
}
