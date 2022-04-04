function styleChange() {
  var styleCheck = document.getElementsByTagName("link");
  if (styleCheck[1].disabled == true) {
    styleCheck[1].disabled = false;
  } else {
    styleCheck[1].disabled = true;
  }

  // var kjstyle = document.createElement("link");
  // kjstyle.setAttribute("rel", "stylesheet");
  // kjstyle.setAttribute("type", "text/css");
  // kjstyle.setAttribute("href", "kjstyle.css");
  // document.getElementsByTagName("head")[0].appendChild(kjstyle);
}
