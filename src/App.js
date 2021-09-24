import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
       <Header  />
       <Content text = "Convert from dollars to rub"/>
       <Footer />
    </div>
  );
}

export default App;
