import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Estudos de Rotas no React</h1>

            <ul>
                <li><Link to = "/SP" >São Paulo</Link></li>
                <li><Link to = "/RJ" >Rio de Janeiro</Link></li>
                <li><Link to = "/SC" >Santa Catarina</Link></li>
                <li><Link to = "/MG" >Minas Gerais</Link></li>
                <li><Link to = "/PR" >Paraná</Link></li>
                <li><Link to = "/ES" >Espírito Santo</Link></li>
                <li><Link to = "/RS" >Rio Grande do Sul</Link></li>
                <li><Link to = "/AM" >Amazonas</Link></li>
                <li><Link to = "/AC" >Acre</Link></li>
                <li><Link to = "/AL" >Alagoas</Link></li>
                <li><Link to = "/AP" >Amapa</Link></li>
                <li><Link to = "/BH" >Bahia</Link></li>
                <li><Link to = "/CE" >Ceara</Link></li>
                <li><Link to = "/DF" >DistritoFederal</Link></li>
                <li><Link to = "/MA" >Maranhao</Link></li>
                <li><Link to = "/MT" >MatoGrosso</Link></li>
                <li><Link to = "/MS" >MatoGrossoSul</Link></li>
                <li><Link to = "/PA" >Para</Link></li>
                <li><Link to = "/PB" >Paraiba</Link></li>
                <li><Link to = "/PR" >Parana</Link></li>
                <li><Link to = "/PE" >Pernambuco</Link></li>
                <li><Link to = "/PI" >Piaui</Link></li>
                <li><Link to = "/RN" >RioGrandeNorte</Link></li>
                <li><Link to = "/RS" >RioGrandeSul</Link></li>
                <li><Link to = "/RR" >Rondonia</Link></li>
                <li><Link to = "/SC" >SantaCatarina</Link></li>
                <li><Link to = "/SE" >Sergipe</Link></li>
                <li><Link to = "/TO" >Tocantins</Link></li>
            </ul>
        </div>
    )
}