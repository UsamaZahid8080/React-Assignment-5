import './App.css';
import Cardmini from './component/Cardmini';
import Center from './component/Center';
import Footer from './component/Footer';
import Header from './component/Header';
import Middle from './component/Middle';
import Middlenext from './component/Middlenext';
import Secondlast from './component/Secondlast';
import Tags from './component/Tags';

function App() {
  return (
    <div className="App">
     <Header />
     <Middle />
     <Middlenext />
     <Center />
     <Cardmini />
     <Tags />
     <Secondlast />
     <Footer />
    </div>
  );
}

export default App;
