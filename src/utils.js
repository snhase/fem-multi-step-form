export const  getPlanCharges = (billing, plan) => {
    if(billing === 'Monthly') {
        switch (plan){
            case 'Arcade':
                return 9;
            case 'Advanced':
                return 12;
            case 'Pro':
                return 15;
        }
    }
    else{
        switch (plan){
            case 'Arcade':
                return 90;
            case 'Advanced':
                return 120;
            case 'Pro':
                return 150;
        }

    }
}

export const  getAddOnCharges = (billing, addOn) => {
    let addOnCharges = 0;
    if(billing === 'Monthly') {
        switch (addOn){
            case 'service':
                return 1;
            case 'storage':
                return 2;
            case 'profile':
                return 2;
        }
    }
    else{
        switch (addOn){
            case 'service':
                return 10;
            case 'storage':
                return 20;
            case 'profile':
                return 20;
        }
    }

    return addOnCharges;
}

export const  getTotalAddOnCharges = (billing, addOns) => {
    let addOnCharges = 0;
    if(addOns && addOns.service) {
        addOnCharges = getAddOnCharges(billing, 'service');
    }
    if(addOns && addOns.storage) {
        addOnCharges = addOnCharges + getAddOnCharges(billing, 'storage');
    }
    if(addOns && addOns.profile) {
        addOnCharges =  addOnCharges + getAddOnCharges(billing,'profile');
    }
    return addOnCharges;
}



