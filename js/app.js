'use strict';

let userName = prompt('What is your name?'); 
alert('Hi ' + userName + ' and welcome to this small quiz.')
 let score = 0; 

// let devEdu = prompt('Do you think I have a masters degree?').toLowerCase();
//   if (devEdu == 'yes' || devEdu == 'y') {
//     //   console.log('Unfortunately You are wrong');
//     alert('Unfortunately you are wrong');
      
//   }
//    else if (devEdu == 'no' || devEdu == 'n') {
//     //   console.log('you are correct');
//       alert('You are correct'); 
//       score++; 
//       } 
//     else {
//     //  console.log('Please enter only yes or no');
//     alert('Please enter only yes or no'); 
    
//     }

//     let devExp = prompt('Do you think I have previous experince in programming?').toLowerCase();
// if (devExp == 'yes' || devExp == 'y') {
//     // console.log('You are correct');
//     alert('Unfortunately you are wrong');
    
// }
//  else if (devExp == 'no' || devExp == 'n') {
//     // console.log('Unfortunately you are wrong');
//     alert('You are correct'); 
//     score++;
//     } 
//   else {
// //    console.log('Please enter yes or no'); 
//     alert('Please enter only yes or no'); 
  
//   }

//   let devHob = prompt('Do you think I practice sports?').toLowerCase();
//   if (devHob == 'yes' || devHob == 'y') {
//       // console.log('You are correct');
//       alert('Unfortunately you are wrong');
      
//   }
//    else if (devHob == 'no' || devHob == 'n') {
//       // console.log('Unfortunately you are wrong');
//       alert('You are correct'); 
//       score++;
//       } 
//     else {
//   //    console.log('Please enter yes or no'); 
//       alert('Please enter only yes or no'); 
    
//     }
  
//     let devWatch = prompt('Do you think I watch sports?').toLowerCase();
//     if (devWatch == 'yes' || devWatch == 'y') {
//         // console.log('You are correct');
//         alert('You are correct'); 
//         score++;
//     }
//      else if (devWatch == 'no' || devWatch == 'n') {
//         // console.log('Unfortunately you are wrong');
//         alert('Unfortunately you are wrong'); 
//         } 
//       else {
//     //    console.log('Please enter yes or no'); 
//         alert('Please enter only yes or no'); 
      
//       }

//       let devEnjoy = prompt('Do you think I am enjoying this course?').toLowerCase();
//       if (devEnjoy == 'yes' || devEnjoy == 'y') {
//           // console.log('You are correct');
//           alert('You are correct'); 
//           score++;
      // }
      //  else if (devEnjoy == 'no' || devEnjoy == 'n') {
      //     // console.log('Unfortunately you are wrong');
      //     alert('Unfortunately you are wrong'); 
      //     } 
      //   else {
      // //    console.log('Please enter yes or no'); 
      //     alert('Please enter only yes or no'); 
        
      //   }
 

for(let i=0;i<4;i++){
  let userGess = prompt('What do you think is my order in my family?'); 
  
if(userGess == 3){
  // console.log('You are correct');
  alert('You are correct'); 
  score++
  break; 
} else if(userGess > 3){
  // console.log('too high');
  alert('too high');
  
}else if(userGess < 3){
  // console.log('too low');
  alert('too low'); 
  

}
}

// let food = ['shawarmah', 'mansaf', 'upside down', 'burger'];
// let userAnswer = prompt('what is my fav food?');
// let flag = false;
// for (let i = 0; i < food.length; i++) {
//     if (userAnswer === food[i]) {
//         console.log('yes that\'s one of them');
//         flag = true;
//         break;
//     }
// }
// if (flag === false) {
//     console.log('sorry it is not one of them');
// }

alert('you scored ' + score + ' out of 5')
alert('Thank you ' + userName + ' for partisipating in this small quiz and have a nice day')