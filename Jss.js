function findgovernmentincentiveamount(){

    const name = document.getElementById("nameField").value ;
    const age = document.getElementById("ageField").value ;
    const monthlyinternetbill = document.getElementById("monthlyinternetbillField").value ;
    const yearlydevicemaintenance = document.getElementById("yearlydevicemaintenanceField").value ;
    
    let text;
    if (age >=50 && (monthlyinternetbill + yearlydevicemaintenance)>=20000){
        text = `Hello ${name}, you are eligible to get 20% as government incentive.`;
        }
        else if (age >=30 && (monthlyinternetbill + yearlydevicemaintenance)>=250){
            text = `Hello ${name}, you are eligible to get 15% as government incentive.`;
        }
        else {
            text = `Hello ${name}, you are not eligible for any incentive.`;
        }

        document.getElementById("show-details").innerHTML = text;

    document.getElementById("nameField").value = '' ;
    document.getElementById("ageField").value = ''  ;
    document.getElementById("monthlyinternetbillField").value = '' ;
    document.getElementById("yearlydevicemaintenanceField").value = '' ;


}