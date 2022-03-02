var returnbutton = document.getElementById("returnbutton");

window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
  if (document.body.scrollTop > 425 || document.documentElement.scrollTop > 425) {
    returnbutton.style.display = "block";
  } else {
    returnbutton.style.display = "none";
  }
}

  function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
