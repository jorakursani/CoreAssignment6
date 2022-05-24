var nrOfLikes = 3;
var p = document.querySelector("#likeNr");

function addLike() {
  nrOfLikes++;
  p.textContent = nrOfLikes + " like(s)";
}
