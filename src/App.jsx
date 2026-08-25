import './App.css'
import FondoRejilla from './components/FondoRejilla'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FondoRejilla>
          {/* BLOQUE TEMPORAL — bloque de prueba solo para ver la rejilla. BORRAR. */}
          {['Sobre mí', 'Proyectos', 'Contacto'].map((titulo, i) => (
            <section key={titulo} className="flex min-h-svh items-center">
              <div className="mx-auto w-full max-w-6xl px-6">
                <div className="flex items-center gap-2.5 md:gap-3">
                  <span className="block h-px w-7 bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)] md:w-10" />
                  <span className="font-mono text-[10px] tracking-[0.18em] text-cyan-400 uppercase md:text-[11px] md:tracking-[0.22em]">
                    {String(i + 2).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="font-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-white md:text-[56px]">
                  {titulo}
                </h2>
                <p className="font-display mt-4 max-w-[560px] text-[15px] leading-relaxed text-neutral-400 md:text-[19px]">
                  Texto de rellenoOOOOOO PARA VER COMO SE VE LA REJILLA
                </p>
              </div>
            </section>
          ))}
        </FondoRejilla>
      </main>
    </>
  )
}

export default App
