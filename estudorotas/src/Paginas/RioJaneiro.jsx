import { Link } from "react-router-dom";

export default function RioJaneiro() {
    return(
        <div>
            <h1>Seja Bem-Vindo ao Rio de Janeiro</h1>

            <p>
                <img src="/RJ.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}