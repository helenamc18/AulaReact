export default function Exercicio1( {cor} )
{
    return (
        <div>
            <h2 style={{ color: cor, backgroundColor:"white",textAlign:"center",padding:"10px",border:"2px solid " + cor}}
            >Exercicio 1 - Estilos CSS no React</h2>
            <p>Este paragráfo esta na cor {cor} !</p>
            </div>  
    );
}