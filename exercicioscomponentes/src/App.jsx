import Exercicio3 from"./Componentes/Exercicio3"

export default function App()
{
  return(
    <div>
      <h3>Chamada para o Exercicio3</h3>  
      <Exercicio3 valor={100} taxa={10} tempo={2} />
      <Exercicio3 valor={100} taxa={10} tempo={10} />

    </div>
  )
}