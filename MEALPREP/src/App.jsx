
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Acceuil from './Pages/Acceuil';
import Apropos from './Pages/Apropos';
import Menu from './Pages/Menu';
import Connexionmealprep from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import DashbordClient from './Pages/dashbord/DashbordClient';
import DashbordAdmin from './Pages/dashbord/DashbordAdmin';
import Recettes from './Pages/dashbord/Recettes';
import NosRecettes from './Pages/NosRecettes';
import CreatePlan from './Pages/CreatePlan';
import Footer from "../src/Components/Footer";

function App (){
    return(
        <>
        <Navbar/>
        

         <Routes>

            <Route path="/" element={<Acceuil />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/Connexion" element={<Connexionmealprep />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/dashbord/admin" element={<DashbordAdmin />} />
            <Route path="/recettes" element={<Recettes />} />
            <Route path="/dashbord/client" element={<DashbordClient />} />
            <Route path="/nos-recettes" element={<NosRecettes />} />
            <Route path="/create-plan" element={<CreatePlan />} />
            
        
          </Routes>
        <Footer/>

          </>
    )
}

export default App;