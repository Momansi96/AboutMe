'use strict';

let userName = prompt('What is your name?'); 
alert('Hi ' + userName + ' and welcome to this small quiz.')
 let score = 0; 

function q1(){

let devEdu = prompt('Do you think I have a masters degree?').toLowerCase();
  if (devEdu == 'yes' || devEdu == 'y') {
    alert('Unfortunately you are wrong');
  }
 
   else if (devEdu == 'no' || devEdu == 'n') {
      alert('You are correct'); 
      score++; 
      } 
    else {
    alert('Please enter only yes or no'); 
    
    }
  }
  q1();

  function q2 (){
    let devExp = prompt('Do you think I have previous experince in programming?').toLowerCase();
if (devExp == 'yes' || devExp == 'y') {
    alert('Unfortunately you are wrong');
    
}
 else if (devExp == 'no' || devExp == 'n') {
    alert('You are correct'); 
    score++;
    } 
  else { 
    alert('Please enter only yes or no'); 
  
  }
  }
  q2();

  function q3(){
  let devHob = prompt('Do you think I practice sports?').toLowerCase();
  if (devHob == 'yes' || devHob == 'y') {
      alert('Unfortunately you are wrong');
      
  }
   else if (devHob == 'no' || devHob == 'n') {
      alert('You are correct'); 
      score++;
      } 
    else {
      alert('Please enter only yes or no'); 
    
    }
  }
  q3();

  function q4(){
    let devWatch = prompt('Do you think I watch sports?').toLowerCase();
    if (devWatch == 'yes' || devWatch == 'y') {
        alert('You are correct'); 
        score++;
    }
     else if (devWatch == 'no' || devWatch == 'n') {
        alert('Unfortunately you are wrong'); 
        } 
      else {
        alert('Please enter only yes or no'); 
      
      }
    }
    q4();

    function q5(){
      let devEnjoy = prompt('Do you think I am enjoying this course?').toLowerCase();
      if (devEnjoy == 'yes' || devEnjoy == 'y') {
          alert('You are correct'); 
          score++;
      }
       else if (devEnjoy == 'no' || devEnjoy == 'n') {
          alert('Unfortunately you are wrong'); 
          } 
        else { 
          alert('Please enter only yes or no'); 
        
        }
 
      }
      q5();
      function q6(){
for(let i=0;i<4;i++){
  let userGess = prompt('What do you think is my order in my family?'); 
  
if(userGess == 3){
  alert('You are correct'); 
  score++
  break; 
} else if(userGess > 3){
  alert('too high');
  
}else if(userGess < 3){
  alert('too low'); 
  
}
}
      }
      q6();

      function q7(){
let hobb = ['manga', 'anime', 'movies', 'football'];
let userAnsw = prompt('what is one of my hobbies?');
let cond = false;
for (let j=0;j < hobb.length;j++) {
    if (userAnsw === hobb[j]) {
        alert('yes that\'s one of them')
        cond = true;
        score++; 
        break;
    } 
}
  
    

if (cond === false) {
    alert('sorry it is not one of them'); 
}
<<<<<<< HEAD

alert('my hobbies are many some of them are: manga, anime, movies and football')
=======
}
q7();
>>>>>>> ac37a4a17c791e92f764f1af6d73e286fdeda670
alert('you scored ' + score + ' out of 7')
alert('Thank you ' + userName + ' for partisipating in this small quiz and have a nice day')
      
