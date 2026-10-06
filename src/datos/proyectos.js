// Fuente única de los proyectos: la comparten la sección Proyectos de la
// portada y la página de detalle de cada uno (/proyectos/:slug).
// El slug es la parte de la URL, así que va en minúsculas y sin acentos.
// web y enConstruccion son opcionales: el primero saca el botón "Ver la
// web" y el segundo el aviso que va bajo la imagen en la página de detalle

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
        enConstruccion: true,
        resumen:
            'Calculadora de los gastos de importar un coche desde Alemania a España, para cualquiera que se plantee comprar fuera: particulares, curiosos y compraventas.',
        descripcion: [
            'Importar un coche sale a cuenta sobre el papel y puede dejar de salir cuando aparecen los gastos que nadie te cuenta. autoimport-hub parte del precio del vehículo y devuelve un desglose con lo que de verdad cuesta traerlo: el transporte hasta España, el impuesto de matriculación y el resto de factores que suelen aparecer más tarde.',
            'La cifra es una estimación y el proyecto lo asume de partida: hay variables que dependen del coche concreto y de la comunidad autónoma, así que una cantidad exacta sería mentir. La idea es que alguien pueda hacerse una idea realista antes de decidir, no después.',
            'El logo parece informal y lo es a propósito: está dibujado como el boceto de un niño. Calcular lo que cuesta importar un coche suena a papeleo y a hoja de cálculo, y quiero que la herramienta diga lo contrario desde el primer momento. Metes la marca, modelo y precio del vehículo y sacas una cifra aproximada, sin más.',
            'Lo estoy montando con React en el frontend y Spring Boot en el backend, con una base de datos PostgreSQL en un contenedor Docker. En kickRadar el plazo mandaba y tiré de un backend como servicio; aquí no tengo esa prisa y quiero el backend de mi mano, con los cálculos y las tablas de impuestos en el servidor, donde se pueden actualizar sin tocar la aplicación.',
            'Arranca por Alemania, y la intención es ir sumando países europeos una vez el cálculo esté afinado.',
        ],
        tecnologias: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    },
]

export function buscarProyecto(slug) {
    return proyectos.find((proyecto) => proyecto.slug === slug)
}
