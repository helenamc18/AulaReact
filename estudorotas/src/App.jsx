import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home"
import SaoPaulo from "./Paginas/SaoPaulo"
import EspiritoSanto from "./Paginas/EspiritoSanto"
import MinasGerais from "./Paginas/MinasGerais"
import Parana from "./Paginas/Parana"
import RioGrandeSul from "./Paginas/RioGrandeSul"
import RioJaneiro from "./Paginas/RioJaneiro"
import SantaCatarina from "./Paginas/SantaCatarina"
import Amazonas from "./Paginas/Amazonas"
import DistritoFederal from "./Paginas/DistritoFederal"
import Acre from "./Paginas/Acre"
import Alagoas from "./Paginas/Alagoas"
import Amapa from "./Paginas/Amapa"
import Bahia from "./Paginas/Bahia"
import Ceara from "./Paginas/Ceara"
import Goias from "./Paginas/Goias"
import Maranhao from "./Paginas/Maranhao"
import MatoGrosso from "./Paginas/MatoGrosso"
import MatoGrossoSul from "./Paginas/MatoGrossoSul"
import Para from "./Paginas/Para"
import Paraiba from "./Paginas/Paraiba"
import Pernambuco from "./Paginas/Pernambuco"
import Piaui from "./Paginas/Piaui"
import RioGrandeNorte from "./Paginas/RioGrandeNorte"
import Rondonia from "./Paginas/Rondonia"
import Roraima from "./Paginas/Roraima"
import Sergipe from "./Paginas/Sergipe"
import Tocantins from "./Paginas/Tocantins"

export default function App()
{
    return (
        <div>
            <BrowserRouter>
             <Routes>

                 
                <Route path="/" element = {<Home />} />
                <Route path="/SP" element = {<SaoPaulo />} />
                <Route path="/MG" element = {<MinasGerais />} />
                <Route path="/PR" element = {<Parana />} />
                <Route path="/ES" element = {<EspiritoSanto />} />
                <Route path="/RS" element = {<RioGrandeSul />} />
                <Route path="/RJ" element = {<RioJaneiro />} />
                <Route path="/SC" element = {<SantaCatarina />} />
                <Route path="/AM" element = {<Amazonas />} />
                <Route path="/DF" element = {<DistritoFederal />} />
                <Route path="/AC" element = {<Acre />} />
                <Route path="/AL" element = {<Alagoas />} />
                <Route path="/AP" element = {<Amapa />} />
                <Route path="/BH" element = {<Bahia />} />
                <Route path="/CE" element = {<Ceara />} />
                <Route path="/GO" element = {<Goias />} />
                <Route path="/MA" element = {<Maranhao />} />
                <Route path="/MT" element = {<MatoGrosso />} />
                <Route path="/MS" element = {<MatoGrossoSul />} />
                <Route path="/PA" element = {<Para />} />
                <Route path="/PB" element = {<Paraiba />} />
                <Route path="/PR" element = {<Parana />} />
                <Route path="/PE" element = {<Pernambuco />} />
                <Route path="/PI" element = {<Piaui />} />
                <Route path="/RN" element = {<RioGrandeNorte />} />
                <Route path="/SC" element = {<SantaCatarina />} />
                <Route path="/RR" element = {<Roraima />} />
                <Route path="/RO" element = {<Rondonia/>} />  
                <Route path="/SE" element = {<Sergipe />} />
                <Route path="/TO" element = {<Tocantins />} />
             </Routes>
            </BrowserRouter>
            
        </div>
    );
}