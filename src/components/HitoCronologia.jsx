// Un elemento de la <Cronologia>: el periodo a la izquierda (debajo en móvil),
// el punto sobre el hilo, el titular y lo que cada sección quiera añadir.
// "destacado" enciende en cian el periodo y el punto
export default function HitoCronologia({ periodo, titulo, destacado, children }) {
    return (
        <li className="grid gap-x-8 pb-9 last:pb-0 md:grid-cols-[110px_1fr] md:pb-10">
            <p
                className={`order-last mt-3 font-mono text-[12px] tracking-[0.18em] uppercase md:order-first md:mt-0 md:pt-[5px] md:text-[13px] md:leading-[1.5] md:tracking-[0.14em] ${
                    destacado ? 'text-cyan-400' : 'text-neutral-500'
                }`}
            >
                {periodo}
            </p>

            <div className="relative pl-7">
                <span
                    aria-hidden="true"
                    className={`absolute top-2 left-0 block h-[7px] w-[7px] rounded-full ${
                        destacado
                            ? 'bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)]'
                            : 'bg-neutral-700'
                    }`}
                />

                <h3 className="font-heading text-[17px] font-semibold tracking-tight text-white md:text-[21px]">
                    {titulo}
                </h3>

                {children}
            </div>
        </li>
    )
}
