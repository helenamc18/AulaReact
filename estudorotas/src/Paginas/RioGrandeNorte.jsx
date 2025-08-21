import { Link } from "react-router-dom";

export default function RioGrandeNorte() {
    return(
        <div>
            <h1>Seja Bem-Vindo ao Rio Grande Do Norte</h1>

            <p>
                <img src="/RN.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}