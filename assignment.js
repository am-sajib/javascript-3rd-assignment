// // kilometer to meter

// function kilometerToMeter(kilometer) {

//     if (typeof kilometer == 'number') {
//         let meter = kilometer * 1000;       // 1km = 1000 meter
//         return meter;
//     } else {
//         return 'you must put a number to convert km to meter';
//     }
// }


// // budget calculator
// function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop) {

//     const watchPrice = 50; //price of a watch
//     const phonePrice = 100; //price of a phone
//     const laptopPrice = 500; //price of a laptop
//     let totalWatchPrice = 0; //initial total watch price
//     let totalPhonePrice = 0; //initital total phone price
//     let totalLaptopPrice = 0; //initial total laptop price

//     if (noOfWatch >= 0) {
//         totalWatchPrice = watchPrice * noOfWatch;
//     }

//     if (noOfPhone >= 0) {
//         totalPhonePrice = phonePrice * noOfPhone;
//     }

//     if (noOfLaptop >= 0) {
//         totalLaptopPrice = laptopPrice * noOfLaptop;
//     }

//     const totalBudget = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
//     return totalBudget;
// }



// function hotelCost(daysSpend) {
//     let totalRent = 0;
    
//     //check whether input is a positve integer number
//     if (typeof daysSpend !=  'number' || daysSpend < 0) {
//         return 'You must put the days in positive number'
//     }

//     if (daysSpend <= 10) {              // rent of first 10days
//         const rentPerDay = 100;
//         totalRent = rentPerDay * daysSpend;
//         return totalRent;
//     } else if (daysSpend <= 20) {       // rent of first 20 days
//         const first10DaysRent = 10 * 100;
//         const rentPerDay = 80;
//         totalRent = rentPerDay * (daysSpend - 10) + first10DaysRent;
//         return totalRent;
//     } else if (daysSpend > 20) {        // rent more than 20
//         const first10DaysRent = 10 * 100;
//         const second10DaysRent = 10 * 50
//         const rentPerDay = 50;
//         totalRent = rentPerDay * (daysSpend - 20) + first10DaysRent + second10DaysRent;
//         return totalRent;
//     }
// }



function megaFriend(array) {
    let initialLength = 0;
    let bigFriend = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > initialLength) {
            initialLength = array[i].length;
            bigFriend = array[i];
            return bigFriend;
        } 
    }
    if (typeof array !== 'object') {
        return 'please input an array of friends'
    }

}
let friends = ['rahim', 'karim', 'robin', 'musaddek', 'poli', 'maish'];
console.log(megaFriend(friends));