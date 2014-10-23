function getJSON(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function(){
    cb(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

//var students = ["Seif", "Jackie", "Jessica", "Kimberly", "Brandon", "Blaise", "Evan", "Greg", "Charisse", "Luke", "Stephania", "David", "Steve", "Adam", "Spencer", "Leon", "Alex", "Gerald", "Sonda", "Beck", "Colby", "Kris"];

// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function addItemToList($list, itemText){
    var $li = document.createElement("li");
    $li.innerHTML = itemText;
    $list.appendChild($li);
}


function neighborGrouping(list, groupSize, target){
  var listClone = list.slice(0);
  while (listClone.length > 0){
    var listItems = listClone.splice(0, groupSize);
    addItemToList(target, listItems.join(" &amp; "));
  }
}

function arrayShuffle(array){
  var arrayClone = array.slice(0);
  var temp;
  for(var i = 0; i < arrayClone.length; i++){
    var rand = getRandomInt(0, arrayClone.length);
    temp = arrayClone[i];
    arrayClone[i] = arrayClone[rand];
    arrayClone[rand] = temp;
  }
  return arrayClone;
}

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}



document.addEventListener('DOMContentLoaded', function(){
  var $form = document.getElementById("generate-group");

  var $select = $form.querySelector("select");
  var $numBox = $form.querySelector("input[type='number']");

  $select.addEventListener("change", function(event){
  if (event.currentTarget.value === "randN") {
      show($numBox);
    } else {
      hide($numBox);
    }
  });

  $form.addEventListener("submit", function(event){
    event.preventDefault();

    getJSON('https://volunteerism-sscotth.firebaseio.com/students.json', function(data){
      var students = data;      

      var $ol = document.getElementById('order-list');
      $ol.innerHTML = "";

      var groupCriteria = $form.querySelector("select").value;
      var shuffledStudents = arrayShuffle(students);

      switch(groupCriteria){
        case "random-student":
          var studentNumber = getRandomInt(0, students.length);
          var studentName = students[studentNumber];
          addItemToList($ol, studentName);
          break;
        case "neighbor-pairing":
          neighborGrouping(students, 2, $ol);
          break;
        case "teams-of-three":
          neighborGrouping(students, 3, $ol);
          break;
        case "random-pairing":
          shuffledStudents = arrayShuffle(students);
          neighborGrouping(shuffledStudents, 2, $ol);
          break;
        case "randN":
          shuffledStudents = arrayShuffle(students);
          neighborGrouping(shuffledStudents, $numBox.value, $ol);
          break;
      }
  });
  });
});


 
