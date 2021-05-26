'use strict';

/**Starting */

/**Checkpoint #93 */

function calcAge (birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            const firstName = "Esteban";
            var millennial = true;
            const str = `Oh, and you are a millennial, ${firstName}`;
            console.log(str);
        }
        // console.log(str); //block scope 
        console.log(millennial); //function scope
        console.log(firstName);
    }
    printAge();
    return age;
}

const firstName = "Jose";
calcAge(1991);
