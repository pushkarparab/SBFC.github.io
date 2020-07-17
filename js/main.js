function myFunction() {
    var x = document.getElementById("nav-list");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }