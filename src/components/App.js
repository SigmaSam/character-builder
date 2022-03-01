
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
            {...element}
          />
         )})}
       </div>
      </header>
    </div>
  );
}

export default App;
