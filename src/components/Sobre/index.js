import estilos from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id={estilos.sobre} className={estilos.sobre}>
            <div className={estilos.center}>
                <h2>Sobre nós</h2>
                <p>Fundada em 2015......</p>


                <div className={estilos.elementos_sobre}>
                    <picture>
                        <img src='loja2.png' />
                    </picture>

                    <div className={estilos.sobre_elementos}>
                        <h4>Variedade de modelos</h4>
                        <p>Os sapatos dos seus sonhos em diversas prateleiras</p>
                    </div>

                    <div className={estilos.sobre_elementos}>
                        <h4>Satisfação garantida</h4>
                        <p>Nenhum cliente sai de mão vazia</p>
                    </div>

                    <picture>
                        <img src='compras2.png' />
                    </picture>
                </div>
            </div>
        </section>
    )
}