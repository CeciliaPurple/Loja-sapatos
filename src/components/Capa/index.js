import estilos from './Capa.module.css'

export default function Capa() {
    return(
        <section className={estilos.secao_capa}>
            <div className={estilos.texto}>
                <h2>A cada par</h2>
                <h1>UM ESTILO ÚNICO</h1>
            </div>
        </section>
    )
}