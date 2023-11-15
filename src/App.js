import React, {useState} from 'react';
import './App.css';
import { AddOns } from './components/AddOns';
import { PersonalInfo } from './components/PersonalInfo';
import { ProgressIndicator } from './components/ProgressIndicator';
import { SelectPlan } from './components/SelectPlan';
import { Summary } from './components/Summary';

function App() {

  const [step, setStep] = useState(1);
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState('Arcade');
  const [billing, setBilling] = useState('Monthly');
  const [addOns, setAddOns] = useState(null);

  return (
    <div className="app">
      <div className="main-content">
        <div className="card">
          <div className='card-style'>
            <div className='sidebar-bg'>
              <ProgressIndicator 
                step = {step}/>
            </div>
            <div className='card-container'>
              {
                step === 1?
                <PersonalInfo
                  step = {step}
                  setStep ={ setStep}
                  user = {user}
                  setUser = {setUser}
                /> 
                :
                step === 2 ?
                <SelectPlan
                  step = {step}
                  setStep ={ setStep}
                  plan = {plan}
                  setPlan = {setPlan}
                  billing={billing}
                  setBilling={setBilling}
                />
                :
                step === 3 ?
                <AddOns 
                  step = {step}
                  setStep = {setStep}
                  billing = {billing}
                  addOns = {addOns}
                  setAddOns = {setAddOns}
                  />
                :
                step === 4 ?
                <Summary
                step = {step}
                setStep = {setStep}
                plan = {plan}
                billing = {billing}
                addOns = { addOns}
                />
                :
                <></>
              }
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
