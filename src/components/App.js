
import '../styles/App.css';
import Class from './Class';
import classes from '../assets/classes';


function App() {
  return (
    <div className="App">
      <header>
       <h1>Character Builder</h1> 
       <div className='class--container'>
         {classes.map(element => {
         return (
          <Class
            key={element.id}
            logo={element.logo}
            name={element.name}
            description={element.description}
            role={element.role}
          />
         )})}
       </div>
      </header>
    </div>
  );
}

export default App;
