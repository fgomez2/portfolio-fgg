import Etiqueta from './Etiqueta'

// Cabecera común de las secciones: etiqueta con el número y titular
export default function CabeceraSeccion({ numero, titulo }) {
    return (
        <>
            <Etiqueta>{numero}</Etiqueta>
            <h2 className="font-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-white md:text-[56px]">
                {titulo}
            </h2>
        </>
    )
}
