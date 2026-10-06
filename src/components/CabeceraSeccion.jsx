// Cabecera común de las secciones: línea cian, número y titular
export default function CabeceraSeccion({ numero, titulo }) {
    return (
        <>
            <div className="flex items-center gap-2.5 md:gap-3">
                <span className="block h-px w-7 bg-cyan-400 shadow-[0_0_10px_-1px_rgb(34_211_238)] md:w-10" />
                <span className="font-mono text-[12px] tracking-[0.18em] text-cyan-400 uppercase md:text-[13px] md:tracking-[0.22em]">
                    {numero}
                </span>
            </div>
            <h2 className="font-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-white md:text-[56px]">
                {titulo}
            </h2>
        </>
    )
}
