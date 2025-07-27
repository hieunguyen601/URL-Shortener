import './App.css'
import Header from './components/header';
import Title from './components/title';
import ShortenImage from './components/shortenImage';
import AdvancedTittle from './components/advancedTitle';
import Statistics from './components/statistics';
import Footer from './components/footer';

function App() {

  return (
    <div className="container">
      <Header />
      <Title />
      <ShortenImage />
      <AdvancedTittle />
      <Statistics />
      <Footer />
    </div>
  )
}

export default App;

