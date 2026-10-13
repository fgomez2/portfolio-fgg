// Lista con un hilo vertical, compartida por Formación y Experiencia.
// Cada elemento es un <HitoCronologia>
export default function Cronologia({ children }) {
    return (
        <ol className="relative mt-10 max-w-[560px] md:mt-14 md:max-w-[740px]">
            <span
                aria-hidden="true"
                className="pointer-events-none absolute top-2.5 bottom-2.5 left-[3px] w-px bg-gradient-to-b from-cyan-400/50 via-white/12 to-transparent md:left-[145px]"
            />
            {children}
        </ol>
    )
}
