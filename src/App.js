
import './App.css';
import AllPages from './Components/AllPages';
import Footer from './Components/Footer/Footer';
import NavigationMain from './Components/Navbar/NavigationMain';
function App() {
  
  return (
    <div className="App" >
      <NavigationMain/>
     <AllPages/>
     <Footer/>
    </div>
  );
}

export default App;
