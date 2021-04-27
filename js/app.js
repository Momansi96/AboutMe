'use strict';

let userName = prompt('What is your name?'); 
alert('Hi ' + userName + ' and welcome to this small quiz.')
 let score = 0; 

let devEdu = prompt('Do you think I have a masters degree?').toLowerCase();
  if (devEdu == 'yes' || devEdu == 'y') {
    //   console.log('Unfortunately You are wrong');
    alert('Unfortunately you are wrong');
      
  }
   else if (devEdu == 'no' || devEdu == 'n') {
    //   console.log('you are correct');
      alert('You are correct'); 
      score++; 
      } 
    else {
    //  console.log('Please enter only yes or no');
    alert('Please enter only yes or no'); 
    
    }

    let devExp = prompt('Do you think I have previous experince in programming?').toLowerCase();
if (devExp == 'yes' || devExp == 'y') {
    // console.log('You are correct');
    alert('Unfortunately you are wrong');
    
}
 else if (devExp == 'no' || devExp == 'n') {
    // console.log('Unfortunately you are wrong');
    alert('You are correct'); 
    score++;
    } 
  else {
//    console.log('Please enter yes or no'); 
    alert('Please enter only yes or no'); 
  
  }

  let devHob = prompt('Do you think I practice sports?').toLowerCase();
  if (devHob == 'yes' || devHob == 'y') {
      // console.log('You are correct');
      alert('Unfortunately you are wrong');
      
  }
   else if (devHob == 'no' || devHob == 'n') {
      // console.log('Unfortunately you are wrong');
      alert('You are correct'); 
      score++;
      } 
    else {
  //    console.log('Please enter yes or no'); 
      alert('Please enter only yes or no'); 
    
    }
  
    let devWatch = prompt('Do you think I watch sports?').toLowerCase();
    if (devWatch == 'yes' || devWatch == 'y') {
        // console.log('You are correct');
        alert('You are correct'); 
        score++;
    }
     else if (devWatch == 'no' || devWatch == 'n') {
        // console.log('Unfortunately you are wrong');
        alert('Unfortunately you are wrong'); 
        } 
      else {
    //    console.log('Please enter yes or no'); 
        alert('Please enter only yes or no'); 
      
      }

      let devEnjoy = prompt('Do you think I am enjoying this course?').toLowerCase();
      if (devEnjoy == 'yes' || devEnjoy == 'y') {
          // console.log('You are correct');
          alert('You are correct'); 
          score++;
      }
       else if (devEnjoy == 'no' || devEnjoy == 'n') {
          // console.log('Unfortunately you are wrong');
          alert('Unfortunately you are wrong'); 
          } 
        else {
      //    console.log('Please enter yes or no'); 
          alert('Please enter only yes or no'); 
        
        }


alert('you scored ' + score + ' out of 5')
alert('Thank you ' + userName + ' for partisipating in this small quiz and have a nice day')