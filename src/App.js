import MySkills from './components/MySkills';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Resume Skill Matcher
        </p>
      </header>
      <body className="App-body">
        <div className="my-skills"><MySkills /></div>
        <div className="required-skills"><MySkills /></div>
      </body>
    </div>
  );
}

export default App;
