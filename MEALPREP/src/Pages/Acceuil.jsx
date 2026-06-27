
import HowItWorks from "../Components/HowItWorks"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Dishes from "../Components/Dishes"
import Offresection from "../Components/Offresection"
import RecipeSection from "../Components/RecipeSection"
import Footer from "../Components/Footer"



function Acceuil() {
 
  return (
    <>
    <Navbar/>
    <Hero/>
    <Dishes/>
    <Offresection/>
    <RecipeSection/>
    <HowItWorks/> 
    <Footer/>
    
    </>
  )
}

export default Acceuil
