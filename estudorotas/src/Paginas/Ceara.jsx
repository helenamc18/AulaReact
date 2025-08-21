import { Link } from "react-router-dom";

export default function Ceara() {
    return(
        <div>
            <h1>Seja Bem-Vindo ao Ceará</h1>

            <p>
                <img src="/CA.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}