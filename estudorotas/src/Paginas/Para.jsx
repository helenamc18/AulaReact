import { Link } from "react-router-dom";

export default function Para() {
    return(
        <div>
            <h1>Seja Bem-Vindo ao Para</h1>

            <p>
                <img src="/PA.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}