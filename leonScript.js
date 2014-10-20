var people = ['Bob', 'Sally', 'Joe', 'Susan', 'Leon', 'Spencer', 'Alex', 'Adam', 'Steve', 'Kris', 'Blaze', 'Cindy', 'Jessica', 'Fred', 'Jonathan', 'Ted', 'Bubba', 'Peter', 'Stanley', 'Fiona', 'Larry', 'Michael'];

document.addEventListener('DOMContentLoaded', function(){
var $rsSelected = document.getElementById('randStud');
var $pickButton = document.getElementById('pick');
var $orderedList = document.getElementById('order_list');


  // 1.  Random Student
  /* $pickButton.addEventListener('click', function(){
      var number = Math.round(Math.random() * people.length);
      var $randomStudent = people[number];
      
      var li = document.createElement('li');
      li.innerHTML = randomStudent;
      orderedList.appendChild(li); */
  

  // 2. Neighbor Pairing
   /* pickButton.addEventListener('click', function(){
    if (people.length > 0) {
      var li = document.createElement('li');
      li.innerHTML = people.splice(0, 1) + " & " + people.splice(0, 1);
      orderedList.appendChild(li);
    } */


  // 3. Teams of Three
    /*pickButton.addEventListener('click', function(){
      if(people.length > 2) {
        var li = document.createElement('li');
        li.innerHTML = people.splice(0, 1) + " & " + people.splice(0, 1) + " & " + people.splice(0, 1);
        orderedList.appendChild(li);
    } else if (people.length === 1) {
        var li = document.createElement('li');
        li.innerHTML = people.splice(0, 1) + " is the last person, and does not have anyone to pair with."        
        orderedList.appendChild(li);
    }*/
  
  // 4. Random Pairing
    $pickButton.addEventListener('click', function(){
      // if (random pairing selected)
      var peopleClone = people.slice(0);
   
      for (var i = 0; i < peopleClone.length; i += 2) {  
      var number = Math.floor(Math.random() * peopleClone.length);
      var randomStudent = peopleClone.splice(number, 1);
      var number2 = Math.floor(Math.random() * peopleClone.length);
      var randomStudent2 = peopleClone.splice(number2, 1);

      var li = document.createElement('li');
      li.innerHTML = randomStudent + " & " + randomStudent2;
      $orderedList.appendChild(li);
    }
  });

  });
  //});
  //});
// });

// 1. Random Student TO-DO
// XXXX -- Add event listener to when 'pick' is clicked
// IF 'random student' is selected when 'pick is clicked
  // XXXX -- Perform function using Math.random()
  // XXXX -- Combine Math.random with Math.round to round numbers
  // XXXX -- Make names appear on the webpage (via DOM appending)
  // XXXX -- Append to Ordered List

// 2. Neighbor Pairing TO-DO
// XXXX -- Add event listener to when 'pick' is clicked
// IF 'Neighbor Pairing' is selected when 'pick' is clicked
// XXXX -- Figure out how to select a pair: slice? splice? Some other method? ??
  // XXXX -- Display array pair by appending to the DOM
  // XXXX -- Gets wonky towards the end, need to stop it when last pair is displayed.


// 3. Teams of Three
  // Got it first time

// 4. Random Pairing
  // Pick a random student
  // Add student to v
