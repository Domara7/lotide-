// const eqArrays = function(ar1, ar2){
//   for (let i = 0; i < ar1.length; i++){
//     if (ar1[i] === ar2[i]){
//       return true;
//      }
//      if (ar1[i] !== ar2[i]){
//       return false
//      }
//     }
//   }

  const eqArrays = function (ar1, ar2) {
      if (ar1 === ar2) {
         console.log(` TRUE: Array 1 is eqaul to Array 2`);
      }else {
        console.log(` FALSE: Array 1 is not eqaul to Array 2`);
      }
    
    }
    eqArrays(1,3)