import ContactUs from './components/ContactUs/page';
// import PortfolioGrid from './components/PortfolioGrid/page';
import PortfolioHero from './components/PortfolioHero/Page';
import WorkPortfoilio from './components/WorkPortfoilio/page';
import Biography from './components/Biography/page';
import PracticeAreas from './components/PracticeAreas/page';
import './index.css'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <Biography />
      {/* <PortfolioGrid /> */}
      <WorkPortfoilio />
      <PracticeAreas />
      <ContactUs />
    </div>
  )
}

export default App