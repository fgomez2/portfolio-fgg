import { Link } from 'react-router'

export default function Marca({ href, to, className = 'text-lg md:text-[19px]' }) {
    const clases = `font-heading font-semibold tracking-tight text-white transition-colors hover:text-cyan-400 ${className}`
    const logo = (
        <>
            fgg
            <span className="text-cyan-400 [text-shadow:0_0_12px_rgb(34_211_238)]">.</span>
        </>
    )

    if (to) {
        return (
            <Link to={to} className={clases}>
                {logo}
            </Link>
        )
    }

    return (
        <a href={href} className={clases}>
            {logo}
        </a>
    )
}
