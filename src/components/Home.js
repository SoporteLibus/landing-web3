import "../styles/home.css"
import Animation from "./Animation"

export default function Home() {
    return (
        <div className="first">
            <div className="panel-left">
                <div className="content-top">
                    <h2><span>Boton de pago.</span></h2>
                    <p>
                    Comision cero
                    </p>
                </div>
                <div className="content">
                    <p>
                        La Web 3.0 cambia, fundamentalmente
                        la forma en que se desarrollan los negocios.
                    </p>
                    <p>
                        Las tecnologías Web 3.0 pueden ayudar a mejorar
                        la transparencia y la confianza entre las empresas
                        y sus clientes al crear un registro de transacciones a
                        prueba de manipulaciones a través de la tecnología blockchain.
                    </p>
                    <p>
                        Reciba el pago de sus productos sin intermediarios y a costo 0.
                    </p>
                </div>
            </div>
            <div className="right-panel">
                <Animation/>
            </div>
        </div>
    )
}