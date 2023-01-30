import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const greeting = "Bienvenidos a mi tienda";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  );
}

export default App;
