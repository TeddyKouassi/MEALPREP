import {Routes, Route} from 'react-router-dom'
import Acceuil from './Pages/Acceuil';



function App (){
    return(
           
         <Routes>

            <Route path="/" element={<Acceuil />} />
        
          </Routes>
    )
}

export default App;