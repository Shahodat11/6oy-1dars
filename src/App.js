import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import FeaturedProducts from './components/featuredProducts/FeaturedProducts';
import ExploreXiaomi from './components/exploreXiaomi/ExploreXiaomi';
import XiaomiSupport from './components/xiaomiSupport/XiaomiSupport';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <FeaturedProducts/>
      <ExploreXiaomi/>
      <XiaomiSupport/>
      <Footer/>
    </div>
  );
}

export default App;
