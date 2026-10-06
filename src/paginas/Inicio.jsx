import Contacto from '../components/Contacto'
import FondoRejilla from '../components/FondoRejilla'
import Footer from '../components/Footer'
import Formacion from '../components/Formacion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Proyectos from '../components/proyectos/Proyectos'
import SobreMi from '../components/SobreMi'
import Tecnologias from '../components/Tecnologias'

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

                    <Tecnologias />
                    <Contacto />
                </FondoRejilla>
            </main>
            <Footer />
        </>
    )
}
