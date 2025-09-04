import {Link} from 'react-router-dom';
import { useState } from "react";


export default function Exemplo2()
{
    const [numero1, setNumero1] = useState(number);
    const [numero2,setNumero2] = useState(number);

    function calcular()
    {
        let number = Number(numero1) ;

        setResultado("Olá " + nome + " você já viveu " + dias + " dias ");
    }
    function limpar()
    {
        setNome("");
        setIdade("");
        setResultado("");
    }

export default function Exemplo2()
{
    return (
        <div>
            <h1>Exemplo 2</h1>
            <form>
                <p>
                   Digite o numero 1: <br />
                   <input type="text" value={num} onChange={ (e) => setNumero1(e.target.value )} />
                   </p>
                   <p>
                   Digite o numero 2: <br />
                   <input type="text"  value={num} onChange={ (e) => setNumero2(e.target.value )} />
                   </p>
                   <p>
                   <input type="button" value="Exemplo 2" onClick={calcular}/>
                   <input type="button" value="Voltar"  onClick={voltar} />
                   </p>
                   <b>Resultados: </b> <br/>
                       Nome: {nome} <br/>
                       Idade: {idade}
                   <p>
        
    
            </form>
        </div>
    )
    