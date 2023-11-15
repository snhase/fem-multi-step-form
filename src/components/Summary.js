import { getPlanCharges, getTotalAddOnCharges } from "../utils";
import {ReactComponent as ThankYou} from '../assets/images/icon-thank-you.svg'


const calculateTotal = (plan , billing , service, storage, profile) => {
  let planCharges = 0;
  planCharges = getPlanCharges(billing, plan);

  let addOnCharges = 0;
  addOnCharges= getTotalAddOnCharges(billing, service, storage, profile);

  let total = 0;
  total = planCharges + addOnCharges;

  return total
}

export const Summary = ({confirmed, plan , billing , service, storage, profile}) => {
    
    return (
      <div className="card-content">
        {
          confirmed?
          <div className="summary-thank-you-container">
                  <div><ThankYou/></div>
                <h1 className='card-title'>Thank you!</h1>
                <h4 className='card-subtitle' style={{padding:"0 4rem"}}> Thanks for confirming your subscription! We hope you have fun using our plaform. If you ever need support, please feel free to email us at support@loremgaming.com.</h4>
            </div>
          :
          <div className="card-content">
            <h1 className='card-title'>Finishing up</h1>
            <h4 className='card-subtitle'> Double-check everything looks OK before confirming.</h4>
            <div className='form'>
              <div className='summary-content'>
                <div className='summary-details'>
                    <div className="summary-line-details">
                      <div>
                        <div className="summary-line-plan">{plan}{' ('+ billing + ')'}</div>
                        <a id='summary-link-plan' className="summary-line-plan-link">Change</a>
                      </div>
                      <div className="summary-line-plan">{'$'+ getPlanCharges(billing, plan)+'/'}{billing === 'Yearly'? 'yr' : 'mo'}</div>                
                    </div>
                  <hr/>
                  <div>
                    {
                      service?
                      <div className='summary-line-details'>
                        <div className="summary-line-info">Online service</div>
                        <div className="summary-line-amount">{billing === 'Yearly'?'+$10/yr':'+$1/mo'}</div>
                      </div>
                      :
                      <></>
                    }
                    {
                      storage?
                      <div className='summary-line-details'>
                        <div className="summary-line-info">Larger storage</div>
                        <div className="summary-line-amount">{billing === 'Yearly'?'+$20/yr':'+$2/mo'}</div>
                      </div>
                      :
                      <></>
                    }
                    {
                      profile?
                      <div className='summary-line-details'>
                        <div className="summary-line-info">Customizable profile</div>
                        <div className="summary-line-amount">{billing === 'Yearly'?'+$20/yr':'+$2/mo'}</div>
                      </div>
                      :
                      <></>
                    }
                  </div>
                </div>
                <div className='summary-total'> 
                  <div>Total {billing === 'Yearly'? '( per year )' : '(per month)'} </div>
                  <div className="summary-total-amount">{'$'+ calculateTotal(plan , billing , service, storage, profile) + '/'}{billing === 'Yearly'? 'yr' : 'mo'}</div>
                </div>
              </div>
              <div className='button-wrapper'>
                  <button type="button" className='button-secondary'> Go Back </button>
                  <button
                    type="button"
                    id='summary-btn'
                    className='button-primary summary-button'
                    >Confirm</button>
                </div> 
            </div>
          </div>

        }
      </div>
    )
}