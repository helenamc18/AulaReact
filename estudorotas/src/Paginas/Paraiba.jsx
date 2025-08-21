import { Link } from "react-router-dom";

export default function Paraiba() {
    return(
        <div>
            <h1>Seja Bem-Vindo a Paraiba</h1>

            <p>
                <img src="/PB.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}