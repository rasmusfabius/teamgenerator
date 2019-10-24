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
  console.log(number);
}
