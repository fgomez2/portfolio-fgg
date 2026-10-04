// Fuente única de los proyectos: la comparten la sección Proyectos de la
// portada y la página de detalle de cada uno (/proyectos/:slug).
// El slug es la parte de la URL, así que va en minúsculas y sin acentos.

// TODO: escribir resumen, descripción y tecnologías de cada proyecto,
// y sustituir la imagen genérica por una captura real.
export const proyectos = [
    {
        slug: 'kickradar',
        titulo: 'kickRadar',
        imagen: '/kickradar-proyecto.svg',
        repositorio: 'https://github.com/fgomez2/kickRadar',
        resumen: 'Pendiente: una frase con qué es el proyecto y para quién.',
        descripcion: [
            'Pendiente: qué problema resuelve, cómo lo he montado y qué he aprendido por el camino.',
        ],
        tecnologias: [],
    },
    {
        slug: 'autoimport-hub',
        titulo: 'autoimport-hub',
        imagen: '/proyecto-generico.svg',
        repositorio: 'https://github.com/fgomez2/autoimport-hub',
        resumen: 'Pendiente: una frase con qué es el proyecto y para quién.',
        descripcion: [
            'Pendiente: qué problema resuelve, cómo lo he montado y qué he aprendido por el camino.',
        ],
        tecnologias: [],
    },
]

export function buscarProyecto(slug) {
    return proyectos.find((proyecto) => proyecto.slug === slug)
}
