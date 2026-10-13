// Barra fija con forma de píldora
export default function BarraSuperior({ children }) {
    return (
        <header className="fixed inset-x-0 top-[calc(env(safe-area-inset-top)+14px)] z-50 flex justify-center px-3.5 md:top-[calc(env(safe-area-inset-top)+20px)] md:px-6">
            <div className="relative flex h-14 w-full max-w-6xl items-center justify-between overflow-hidden rounded-full border border-cyan-400/20 bg-black/70 pr-1.5 pl-[18px] shadow-[0_0_34px_-12px_rgb(34_211_238)] backdrop-blur-md md:h-16 md:pr-2.5 md:pl-[26px]">
                {children}
            </div>
        </header>
    )
}
