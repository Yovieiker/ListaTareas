import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import Logo from './components/Logo';
function App() {
  return (
    <div className="container">
      <Logo/>
      <div className='lista-tareas-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
