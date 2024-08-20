import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";
import Contador from "./components/contador";

function App() {
  // aqui agregar logica de un componente
  const anio= 2024;

  return (
    <>
      <section className="container my-5">
      <h1 className="text-center">Practica inicial de React</h1>
      {/* aqui voy agregar un componente */}
      <Informacion comision="c102i" anioActual={anio}/>
      {/* <Informacion></Informacion> */}
    </section>
    <Contador></Contador>
  
    </>
    
  );
}

export default App;
