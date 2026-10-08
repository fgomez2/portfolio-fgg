import {
    ApiIcono,
    BaseDatosIcono,
    DockerIcono,
    NextIcono,
    NodeIcono,
    ReactIcono,
    SpringIcono,
    SupabaseIcono,
    TypeScriptIcono,
} from './icons'

const iconos = {
    React: ReactIcono,
    'Next.js': NextIcono,
    TypeScript: TypeScriptIcono,
    'Node.js': NodeIcono,
    'Spring Boot': SpringIcono,
    Supabase: SupabaseIcono,
    PostgreSQL: BaseDatosIcono,
    Docker: DockerIcono,
}

// lo que no esté en la lista sale con el icono genérico de API
export function iconoDe(tecnologia) {
    return iconos[tecnologia] ?? ApiIcono
}
