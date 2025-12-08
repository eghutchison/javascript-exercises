const removeFromArray = function(arr,...rem) {
    let result = arr.filter (element => !rem.includes(element));
    return result;
};
// Do not edit below this line
module.exports = removeFromArray;
//     for(arrs in arr) {
//         for (let rems of rem) {
//             if (rem === arr) {
//                 removeFromArray.pop[]
//             }
//         }  
//     }  
// };