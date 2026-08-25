export default function FondoRejilla({ children }) {
    return (
        <div className="relative">
            <div
                aria-hidden="true"
                className="fondo-rejilla pointer-events-none absolute inset-0"
            />
            <div className="relative">{children}</div>
        </div>
    )
}
