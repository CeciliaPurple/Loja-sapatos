import estilos from './Produtos.module.css'

export default function Produtos() {
    return (
        <section id='produtos' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Nossos Produtos</h2>

                <p>
                    Aqui, reunimos os estilos mais diferentes do mercado, trazendo
                    para você marcas renomadas e modelos marcantes que trazem luxo, 
                    elegância e personalidade.
                </p>

                <p>
                    Autenticidade garantida | As melhores marcas do mundo | Envio rápido
                     e seguro
                </p>

                <div className={estilos.sapato_img}>
                    <div className={estilos.card_sapato}>
                        <span className={estilos.selo}>Mais Vendido</span>
                        <h3>Paris preto</h3>
                        <picture>
                            <img src='./1.png'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 134,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_sapato}>
                        <span className={estilos.seloNovo}>Novo</span>
                        <h3>Celi's Bota de Inverno </h3>
                        <picture>
                            <img src='./2.png'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 240,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_sapato}>
                        <h3>Bota cano alto Elen</h3>
                        <picture>
                            <img src='./3.png'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 258,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                     <div className={estilos.card_sapato}>
                        <h3>Paris Curve preto</h3>
                        <picture>
                            <img src='./4.png'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 300,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
                </div>
            </div>
        </section>
    )
}