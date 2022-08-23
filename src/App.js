import './App.css';
import Avatar from './components/Avatar';
import Card from './components/Card';
import Skills from './components/Skills';
import ProgramingIcon from './img/programing-icon.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <h3>DPS104 G01T</h3>
          <h4>Taller de clase #3</h4>
        </div>
      </header>
      <h1 className='App-title'>DATOS SOBRE MI</h1>
      <Card>
        <Avatar/>
          <div className='personal-info'>
            <h2>Gerardo Enrique Palacios Díaz</h2>
            <h3>Ingeniería en Ciencias de la Computación</h3>
          </div>
          <img className='prog-icon' src={ProgramingIcon} alt="icon"/>
      </Card>
      <br/>
      <Skills/>
    </div>
  );
}

export default App;
