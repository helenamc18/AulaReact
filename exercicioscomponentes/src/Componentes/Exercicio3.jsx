export default function Exercicio3({valor, taxa, tempo})
{ 
    let valor = Number(taxa) / Number(tempo)
     return(
    <div>
       Valor da parcela {valor} e a taxa {taxa} é de {taxa.toFixed(2)} 
       Valor Parcela = {valor} + ({valor * (taxa*taxa/100) *tempo})
    </div>
);
}