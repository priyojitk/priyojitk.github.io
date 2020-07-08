(function () {
  var survey = document.getElementById("survey");
  var counter = document.getElementById("counter");
  var d = new Date();
  var n = d.getTime();
  n = n % 100;
  var x = 200 + n;
  counter.innerHTML =
    "<p>" + x + ' <span class="active">Online</span> users</p>';

  survey.addEventListener("click", function () {
    // set loading
    survey.innerHTML =
      '<div><img src="loader.gif"><h3>Please Wait<br></h3></div > ';

    setTimeout(function () {
      survey.innerHTML =
        '<div><h3  class="flash" ><span class="red">NEVER</span> SHARE </h3> <p>without checking the <span class="flash">source</span></p><p class="red">Please stop sharing fake giveaways</p> </div > ';
    }, 2000);
  });
})();
