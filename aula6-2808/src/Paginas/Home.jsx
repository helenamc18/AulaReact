import { Link } from "react-router-dom";

export default function Home()
{
    return (
        <div>
          <h1>Estudo de Estados (useState)</h1>

          <ul>
              <li><Link to="/exemplo1">Exemplo1</Link></li>
              <li><Link to="/exemplo2">Exemplo2</Link></li>
          </ul>

          <h3>Exercícios</h3>

          <ul>
          <li><Link to="/exercicio1">Exercicio1</Link></li>
          <li><Link to="/exercicio2">Exercicio2</Link></li>
          <li><Link to="/exercicio3">Exercicio3</Link></li>
          <li><Link to="/exercicio4">Exercicio4</Link></li>
          <li><Link to="/exercicio5">Exercicio5</Link></li>
          </ul>
        </div>
    )
}
