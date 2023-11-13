import './App.css';
import { PersonalInfo } from './components/PersonalInfo';
import { ProgressIndicator } from './components/ProgressIndicator';
import { SelectPlan } from './components/SelectPlan';

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <div className="card">
          <div className='card-style'>
            <div className='sidebar-bg'>
              <ProgressIndicator/>
            </div>
            <div className='card-content'>
              {/* <PersonalInfo/> */}
              <SelectPlan/>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        Challenge by <a 
            href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ" 
            alt="frontend-mentor challenge link" 
            target="_blank" 
            rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a href="https://github.com/snhase" alt="github url" target="_blank" rel="noopener noreferrer">snhase</a></div>
    </div>
  );
}

export default App;
