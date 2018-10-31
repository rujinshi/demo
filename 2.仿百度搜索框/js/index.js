var suggestContainer = document.getElementsByClassName("suggest")[0];
var searchText = document.getElementsByClassName("search-input-text")[0];
var suggestLi = document.querySelectorAll('li');

function hide() {
  suggestContainer.style.display = "none";
}
// hide();

searchText.onkeyup = function () {
  if (this.value.length === 0) {
    if (suggestContainer) {
      hide()
    }
    return;
  }
  var script = document.createElement("script");
  script.src =
    "https://www.baidu.com/su?&wd=" +
    encodeURI(this.value.trim()) +
    "&p=3&cb=handleSuggestion";
  document.body.appendChild(s);
};

function handleSuggestion(data) {
  // data.s.forEach((item, index) => {
  //   suggestLi[index].innerHTML = item
  // });
  console.log(data)
}