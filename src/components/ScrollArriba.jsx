import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Al cambiar de ruta el navegador conserva el scroll anterior, así que la
// página nueva aparecería empezada por la mitad. No se toca cuando la URL
// lleva un ancla (#proyectos), que tiene su propio destino.
export default function ScrollArriba() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) return
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname, hash])

    return null
}
