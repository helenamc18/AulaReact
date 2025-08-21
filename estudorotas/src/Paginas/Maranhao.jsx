import { Link } from "react-router-dom";

export default function Maranhao() {
    return(
        <div>
            <h1>Seja Bem-Vindo ao Maranhão</h1>

            <p>
                <img src="/MA.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}