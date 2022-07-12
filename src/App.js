import Nav from "./components/Nav";
import Navs from "./components/Navs";
import Test from "./components/test";



function App() {

  return (
    <div className="App">
    <Nav />
    <Navs />
    <div className="nav-container">nav-container</div>
    <div className="nav-card">nav-card</div>
    <div className="nav-card item">nav-card item</div>
    <div className="nav-card-title">nav-card-title</div>
    <div className="nav-content open">nav-content open</div>
    <Test />
    </div>
  );
}

export default App;
