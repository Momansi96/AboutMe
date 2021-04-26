'use strict';

let userName = prompt('What is your name?'); 
alert('Hi ' + userName + ' and welcome to this small quiz.')

let devGender = prompt('Do you think I am male?').toLowerCase();
if (devGender == 'yes' || devGender == 'y') {
    console.log('You are correct');
    
}
 else if (devGender == 'no' || devGender == 'n') {
    console.log('Unfortunately you are wrong');
    } 
  else {
   console.log('Please enter yes or no'); 
  
  }

  
let devEdu = prompt('Do you think I have a masters degree?').toLowerCase();
  if (devEdu == 'yes' || devEdu == 'y') {
      console.log('Unfortunately You are wrong');
      
  }
   else if (devEdu == 'no' || devEdu == 'n') {
      console.log('you are correct');
      } 
    else {
     console.log('Please enter yes or no'); 
    
    }



alert('Thank you ' + userName + ' for partisipating in this small quiz and have a nice day')