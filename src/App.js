import NavbarComp from "./components/NavbarComp";
import HeroCamp from "./components/HeroComp";
import GalerryLukisan from "./components/GalerryLukisan";
import Seniman from "./components/Seniman";
import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";

function App() {
  return ( 
  <div>
    <HeroCamp />

    {/* Content */}
    <NavbarComp />
    <GalerryLukisan/>
    <Seniman />
    <FaqComp />
   <FooterComp />
    {/* Content */}
  </div>
  );  
}

export default App;
