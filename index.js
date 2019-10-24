// - The user can add a list of names
function addMembers() {
  var text = document.getElementById("textMemberInput").value;
  var listNames = document.querySelector("#memberList");
  var newLi = document.createElement("li");
  newLi.className = "list-group-item";
  newLi.textContent = text;
  listNames.append(newLi);
}
// - The user can set the number of teams
function numbers() {
  var number = parseInt(document.querySelector("#numberOfTeams").value);
  var listTeams = document.querySelector("#teams");
  var newLi = document.createElement("li");
  newLi.className = "list-group-item";
  newLi.textContent = number;
  listTeams.append(newLi);
}

// - Every time the user clicks on the "assign" button, a random name is placed in a team and removed from the list

// Get a list of names to an array.

function makeArrayOfNames() {
  var myList = document.querySelectorAll("#memberList li");
  var toReturn = [];

  for (var i = 0; i < myList.length; i++) toReturn.push(myList[i].innerText);

  return toReturn;
}

// Radomise array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var arr = makeArrayOfNames();

arr = shuffle(arr);
console.log(arr);
console.log(arr[0]);

// remove name from list

//- [EXTRA] Create a button to reset the state of the app
function refreash() {
  location.reload(true);
}
