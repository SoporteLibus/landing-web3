import "../styles/home.css"
import Animation from "./Animation"

export default function Home() {
    return (
        <div className="first">
            <div className="panel-left">
                <div className="content-top">
                    <h2>KeyCoDev</h2>
                    <p>
                    Tecnologias del futuro:
                    </p>
                </div>
                <div className="content">
                    <p>
                        La web 3.0 promete cambiar la
                        forma de hacer negocios para siempre.
                    </p>
                    <p>
                        Ofrecemos una alternativa diferente, cero comisión , un
                        boton de pago seguro y de facil adaptacion
                        a cada pagina web.
                    </p>
                </div>
            </div>
            <div className="right-panel">
                <Animation/>
            </div>
        </div>
    )
}