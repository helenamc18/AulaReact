import { Link } from "react-router-dom";

export default function MatoGrosso() {
    return(
        <div>
            <h1>Seja Bem-Vindo ao MatoGrosso</h1>

            <p>
                <img src="/MT.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}