import { Link } from 'react-router'
import BarraSuperior from './BarraSuperior'
import { botonPrimario } from './botones'
import { FlechaIzquierdaIcono } from './icons'
import Marca from './Marca'

// otra versión del header, para el detalle de los proyectos
export default function HeaderProyectos() {
    return (
        <BarraSuperior>
            <Marca to="/" />

            <Link to="/" className={`${botonPrimario} flex h-11 px-[18px] md:px-[22px]`}>
                <FlechaIzquierdaIcono className="h-[15px] w-[15px]" />
                Volver
            </Link>
        </BarraSuperior>
    )
}
