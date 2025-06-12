import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import Exemplo3 from "./Paginas/Exemplo3";
import Exercicio1 from "./Paginas/Exercicio1";
import Exercicio2 from "./Paginas/Exercicio2";

export default function App() {
  return (
      <div>
        <h1> Aula 02 - Estilos CSS no React</h1>
        <Exemplo1/>
        <Exemplo2/>
        <Exemplo3/>
        <Exercicio2/>
        <hr/>
        <Exercicio1 cor="red"/>
        <Exercicio1 cor="blue"/>
        <Exercicio1 cor="green"/>
        <Exercicio1 cor="magenta"/>

        </div>
  );
}

