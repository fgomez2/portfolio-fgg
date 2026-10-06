import CabeceraSeccion from '../components/CabeceraSeccion'
import Contacto from '../components/Contacto'
import FondoRejilla from '../components/FondoRejilla'
import Footer from '../components/Footer'
import Formacion from '../components/Formacion'
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
                    <Formacion />
                    <Proyectos />

                    {/* BLOQUE TEMPORAL, se sustituye por su componente. BORRAR. */}
                    <section id="tecnologias" className="flex min-h-svh items-center">
                        <div className="mx-auto w-full max-w-6xl px-6">
                            <CabeceraSeccion numero="04" titulo="Tecnologías" />
                            <p className="font-display mt-4 max-w-[560px] text-[15px] leading-relaxed text-neutral-400 md:text-[19px]">
                                Sección en construcción.
                            </p>
                        </div>
                    </section>

                    <Contacto />
                </FondoRejilla>
            </main>
            <Footer />
        </>
    )
}
