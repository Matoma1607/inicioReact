import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";

function App() {
  // aqui agregar logica de un componente

  return (
    <>
      <section className="container my-5">
      <h1 className="text-center">Practica inicial de React</h1>
      {/* aqui voy agregar un componente */}
      <Informacion/>
    </section>
    <Contador></Contador>
  
    </>
    
  );
}

export default App;
