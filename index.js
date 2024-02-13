// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}


const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function (fare) {
        return multiplier * fare 
    }
}

const fareDoubler = function () {
    return createFareMultiplier (2)  
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)
}

// function selectDifferentDrivers(drivers,returnFirstTwoDrivers,returnLastTwoDrivers) {
//     if (returnFirstTwoDrivers) {
//         return drivers.slice(0, 2)
//     } else if (returnLastTwoDrivers) {
//         return drivers.slice(-2)
//     }
    
    
//     //return drivers.slice(0, 2) || drivers.slice(-2)
// }

const selectDifferentDrivers = function (drivers, selectorFunction) {
    return selectorFunction(drivers)
}