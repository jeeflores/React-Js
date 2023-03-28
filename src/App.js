import './App.css';
import NavBar from './component/navBar/navBar';
import ItemListContaines from './component/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContaines greeting={"Bienvidos a nuestra tienda virtual"}/>
    </div>
  );
}

export default App;


