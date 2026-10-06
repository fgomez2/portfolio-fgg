// Fuente única de los proyectos: la comparten la sección Proyectos de la
// portada y la página de detalle de cada uno (/proyectos/:slug).
// El slug es la parte de la URL, así que va en minúsculas y sin acentos.

// TODO: escribir resumen, descripción y tecnologías de cada proyecto
export const proyectos = [
    {
        slug: 'kickradar',
        titulo: 'kickRadar',
        imagen: '/kickradar-proyecto.svg',
        repositorio: 'https://github.com/fgomez2/kickRadar',
        web: 'https://kick-radar.vercel.app/',
        resumen:
            'Es un rastreador que compara el precio de las sneakers en distintas plataformas, pensado para aficionados que quieren comprar siempre al mejor precio.',
        descripcion: [
            'Comprar sneakers suele significar abrir varias webs y comparar a mano. kickRadar reúne esa información en un solo sitio: buscas un modelo y ves su precio en cada plataforma, junto con sus tallas y sus datos, para quedarte con la mejor opción.',
            'Lo desarrollé como proyecto de fin de grado del CFGS de Desarrollo de Aplicaciones Web, en tres meses y compaginándolo con las prácticas. Con ese plazo elegí React para el frontend y Supabase como backend: me daba la base de datos y el servidor ya montados como servicio, y me dejaba dedicar el tiempo al producto.',
            'Los datos salen de la API de StockX, que es privada y para la que tuve que registrarme como desarrollador, y de otras APIs de tiendas. Por el camino aprendí a escribir las funciones que obtienen de cada fuente el nombre, la talla y el precio de cada modelo, y a diseñar una interfaz vistosa que mantenga la coherencia de principio a fin.',
        ],
        tecnologias: ['React', 'Supabase', 'API de StockX'],
    },
    {
        slug: 'autoimport-hub',
        titulo: 'autoimport-hub',
        imagen: '/autoimport-hub-proyecto.webp',
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
