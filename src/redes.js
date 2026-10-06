import { GitHubIcono, LinkedInIcono, CorreoIcono } from './components/icons'

// Compartido por el menú móvil del Header, el Footer y la sección Contacto.
// `usuario` es lo que se lee en los botones de Contacto; el Header y el Footer
// solo enseñan el icono, así que lo ignoran.
export const redesSociales = [
    { label: 'GitHub', href: 'https://github.com/fgomez2', usuario: '@fgomez2', Icon: GitHubIcono },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fernandogomgar', usuario: 'linkedin.com/in/fernandogomgar', Icon: LinkedInIcono },
    { label: 'Correo', href: '#contacto', Icon: CorreoIcono },
]
