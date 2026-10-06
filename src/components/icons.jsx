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
