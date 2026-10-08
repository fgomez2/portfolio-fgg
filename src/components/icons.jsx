const baseIcono = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
}

export function FlechaDerechaIcono({ className = 'h-4 w-4' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.6" className={className} aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

export function FlechaAbajoIcono({ className = 'h-4 w-4' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.6" className={className} aria-hidden="true">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
        </svg>
    )
}

export function FlechaIzquierdaIcono({ className = 'h-4 w-4' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.6" className={className} aria-hidden="true">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
        </svg>
    )
}

export function FlechaDerechaPequenaIcono({ className = 'h-4 w-4' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}

export function GitHubIcono({ className = 'h-[19px] w-[19px]' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}

export function LinkedInIcono({ className = 'h-[19px] w-[19px]' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}

export function CorreoIcono({ className = 'h-[19px] w-[19px]' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

export function CopiarIcono({ className = 'h-4 w-4' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.6" className={className} aria-hidden="true">
            <rect width="13" height="13" x="9" y="9" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
    )
}

export function CheckIcono({ className = 'h-4 w-4' }) {
    return (
        <svg {...baseIcono} strokeWidth="2" className={className} aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}

export function DescargarIcono({ className = 'h-4 w-4' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.6" className={className} aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
            <path d="M12 15V3" />
        </svg>
    )
}

// Iconos de tecnologías
export function ReactIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.4" className={className} aria-hidden="true">
            <circle cx="12" cy="12" r="2" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
    )
}

export function SupabaseIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <path d="M13.5 2 4 13.5h6.5V22L20 10.5h-6.5z" />
        </svg>
    )
}

export function SpringIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
            <path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" />
        </svg>
    )
}

export function NodeIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.4" className={className} aria-hidden="true">
            <path d="M12 2.4 20.6 7v10L12 21.6 3.4 17V7z" />
            <path d="M9.4 15.4V8.6l5.2 6.8V8.6" />
        </svg>
    )
}

export function NextIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.4" className={className} aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M8.8 16V8l7.4 9.6" />
            <path d="M15.4 8v5.2" />
        </svg>
    )
}

export function TypeScriptIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" />
            <text
                x="12"
                y="12.8"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="none"
                fill="currentColor"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.3"
                fontFamily="Sora, ui-sans-serif, system-ui, sans-serif"
            >
                TS
            </text>
        </svg>
    )
}

export function BaseDatosIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14a9 3 0 0 0 18 0V5" />
            <path d="M3 12a9 3 0 0 0 18 0" />
        </svg>
    )
}

export function DockerIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.4" className={className} aria-hidden="true">
            <rect x="2.5" y="11" width="4" height="4" rx="0.4" />
            <rect x="7.5" y="11" width="4" height="4" rx="0.4" />
            <rect x="12.5" y="11" width="4" height="4" rx="0.4" />
            <rect x="7.5" y="6.5" width="4" height="4" rx="0.4" />
            <path d="M2 16.5c1.8 1.7 4.6 2.5 8 2.5 5.3 0 8.8-2.4 10.5-6.5" />
        </svg>
    )
}

// Genérico para API
export function ApiIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <path d="M12 22v-5" />
            <path d="M9 8V2" />
            <path d="M15 8V2" />
            <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z" />
        </svg>
    )
}

export function WebIcono({ className = 'h-4 w-4' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.6" className={className} aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}

// Iconos de las categorías de la sección Tecnologías
export function CodigoIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.6" className={className} aria-hidden="true">
            <path d="m8 17-5-5 5-5" />
            <path d="m16 7 5 5-5 5" />
            <path d="m13.5 4-3 16" />
        </svg>
    )
}

export function ServidorIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <rect x="2.5" y="3" width="19" height="7" rx="2" />
            <rect x="2.5" y="14" width="19" height="7" rx="2" />
            <path d="M6.5 6.5h.01" />
            <path d="M6.5 17.5h.01" />
        </svg>
    )
}

export function MartilloIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <rect x="3.5" y="3.5" width="17" height="5.5" rx="1.5" />
            <path d="M10.25 9v9.5a1.75 1.75 0 0 0 3.5 0V9" />
        </svg>
    )
}

export function IaIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <rect x="2.5" y="4" width="19" height="16" rx="3.5" />
            <text
                x="12"
                y="12.4"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="none"
                fill="currentColor"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.3"
                fontFamily="Sora, ui-sans-serif, system-ui, sans-serif"
            >
                IA
            </text>
        </svg>
    )
}

export function MovilIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <rect x="6" y="2" width="12" height="20" rx="2.5" />
            <path d="M11 18.5h2" />
        </svg>
    )
}

export function RedIcono({ className = 'h-6 w-6' }) {
    return (
        <svg {...baseIcono} strokeWidth="1.5" className={className} aria-hidden="true">
            <rect x="8.5" y="2.5" width="7" height="7" rx="1.5" />
            <rect x="1.5" y="14.5" width="7" height="7" rx="1.5" />
            <rect x="15.5" y="14.5" width="7" height="7" rx="1.5" />
            <path d="M12 9.5v3" />
            <path d="M5 14.5v-2h14v2" />
        </svg>
    )
}
