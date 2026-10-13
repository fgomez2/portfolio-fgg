import { useEffect } from 'react'
import { useLocation } from 'react-router'


// Si la URL lleva un ancla (/#contacto, desde el Footer de una página de
// proyecto), se baja hasta ella.
export default function ScrollArriba() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView()
            return
        }

        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname, hash])

    return null
}
