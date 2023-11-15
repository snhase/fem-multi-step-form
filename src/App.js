import './App.css';
import { AddOns } from './components/AddOns';
import { PersonalInfo } from './components/PersonalInfo';
import { ProgressIndicator } from './components/ProgressIndicator';
import { SelectPlan } from './components/SelectPlan';
import { Summary } from './components/Summary';

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <div className="card">
          <div className='card-style'>
            <div className='sidebar-bg'>
              <ProgressIndicator/>
            </div>
            <div className='card-container'>
              {/* <PersonalInfo/> */}
              {/* <SelectPlan/> */}
              {/* <AddOns billing='Monthly'/> */}
              <Summary
                confirmed={false}
                plan='Pro'
                billing='Monthly'
                service={true}
                storage={true}
                profile={false}
                />
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
