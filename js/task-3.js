'use strict';
function checkForSpam(message) {
    const cancelWord1 = "spam";
    const cancelWord2 = "sale";
    let messageCheck = message.toLowerCase();
    if (messageCheck.includes(cancelWord1) || messageCheck.includes(cancelWord2)) {
        return true;
    } else {
        return false;
    }
    
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true