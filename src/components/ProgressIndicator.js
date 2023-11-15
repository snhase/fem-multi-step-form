
import {Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill} from 'react-icons/bs'


const showIcon = (labelStepNumber, selected) => {
    if(selected){
        switch(labelStepNumber){
            case "Step 1" :
               return <BsFill1CircleFill className='progress-indicator-icon-style-selected' color='hsl(206, 94%, 87%)' size='2rem'/>
            case "Step 2" :
                return  <BsFill2CircleFill className='progress-indicator-icon-style-selected' color='hsl(206, 94%, 87%)' size='2rem'/>
            case "Step 3" :
                return  <BsFill3CircleFill className='progress-indicator-icon-style-selected' color='hsl(206, 94%, 87%)' size='2rem'/>
            case "Step 4" :
                return  <BsFill4CircleFill className='progress-indicator-icon-style-selected' color='hsl(206, 94%, 87%)' size='2rem'/>
        }

    }
    else {
        switch(labelStepNumber){
            case "Step 1" :
               return <Bs1Circle color='hsl(0, 0%, 100%)' size='2rem'/>
            case "Step 2" :
               return <Bs2Circle color='hsl(0, 0%, 100%)' size='2rem'/>
            case "Step 3" :
               return <Bs3Circle color='hsl(0, 0%, 100%)' size='2rem'/>
            case "Step 4" :
               return <Bs4Circle color='hsl(0, 0%, 100%)' size='2rem'/>

        }

    }
    
}


const ProgressIndicatorStep = ({selected, labelStepNumber, labelStepName}) => {
    return (
        <div className='progress-indicator-step'>
                <div className='progress-indicator-icon'>
                    {
                        selected?
                        showIcon(labelStepNumber, selected)
                        :
                        showIcon(labelStepNumber, selected)
                    }
                </div>
                <div className='progress-indicator-label'>
                    <div className='progress-indicator-label-step'>
                        {labelStepNumber}
                    </div>
                    <div className='progress-indicator-label-step-name'>
                        {labelStepName}
                    </div>
                </div>
            </div>
    )
}


export const ProgressIndicator = ({step}) => {
    return(
        <div className='progress-indicator'>
            <ProgressIndicatorStep
                selected={ step === 1 ? true : false}
                labelStepNumber="Step 1"
                labelStepName="Your Info"
                />
            <ProgressIndicatorStep
                selected= {step === 2 ? true : false}
                labelStepNumber="Step 2"
                labelStepName="Select Plan"
                />
            <ProgressIndicatorStep
                selected={step === 3 ? true : false}
                labelStepNumber="Step 3"
                labelStepName="Add-ons"
                />
            <ProgressIndicatorStep
                selected={step === 4 ? true : false}
                labelStepNumber="Step 4"
                labelStepName="Summary"
                />
        </div>
    )

}