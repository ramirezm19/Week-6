//class Temperature {
   // constructor (fahrenheit) {
        //if (fahrenheit <= 212 && fahrenheit >= -459.67){
            //this.fahrenheit = fahrenheit
        //} else {
            //console.error(`$fahrenheit} is not a valid fahrenheit temperature`);
    //}
//}

const { expect } = require("chai");

    //convertToCelsius () {
       // const fahrenheitInC = ((this.fahrenheit - 32) * 5)/9;
        //return fahrenheitInC;
        
   // }

    //convertToKelvin () {
       // const celsius = this.convertToCelsius();
       // return celsius + 273.15
   // }
//}

//const temp = new Temperature (80);

//console.log(temp)
//console.log(temp.convertToCelsius().toFixed(2))
//console.log(temp.convertToKelvin().toFixed(2))


//writing a test for this function
function isTheSame(input1, input2) {
    return input1 === input2
}

describe('isTheSame', () => {
        it ("should return true if both inputs are the same", () => {
            const result = isTheSame(1,1);
            expect(result).to.be.true;
        })
})
        it('should return false if both inputs are not the same', () => {
            const result = isTheSame(2,3);
            expect(result).to.be.false;
        })

//writing a test for this function
function getSum(a,b) {
    return a+b;
}

describe('getSum', () => {
    it ('should return the sum of two inputs', () => {
        const sum = getSum(2,3);
        expect(sum).to.equal(5);
    })
})

