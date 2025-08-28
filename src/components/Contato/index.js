import estilos from './Contato.module.css';
export default function Contato() {
    return (
        <section id={estilos.contato}>
            <div className={estilos.contato}>
                <h2>Fale Conosco</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas
                    ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>

                <div className={estilos.central_redes}>
                    <div className={estilos.bloco_contato}>
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src='./local.png' alt='localizção'/>
                                </picture>Caraguatatuba - SP
                            </li>

                            <li>
                                <picture>
                                    <img src='./whatsapp.png' alt='telefone'/>
                                </picture>(12) 99999-9999
                            </li>

                            <li>
                                <picture>
                                    <img src='./email.png' alt='email'/>
                                </picture>contato@celinastore.com.br
                            </li>
                        </ul>
                    </div>

                    <div className={estilos.bloco_contato}>
                        <h4>Redes Sociais</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src='./facebook.png'/>
                                </picture>/CelinaStore
                            </li>

                            <li>
                                <picture>
                                    <img src='./insta.png'/>
                                </picture>@CelinaStore
                            </li>
                            
                            <li>
                                <picture>
                                    <img src='./x.png'/>
                                </picture>@CelinaStore
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}