(function () {
  var survey = document.getElementById("survey");
  var share = document.getElementById("share");
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
      survey.innerHTML = `<div><h3  class="flash" ><span class="red">NEVER</span> SHARE </h3> <p>without checking the <span class="flash">source</span></p><p class="red">Please stop sharing fake giveaways</p> </div >`;
    }, 2000);
    share.innerHTML = `<a href="whatsapp://send?text=*The Government* has finally approved and have started giving out free _Rs.2,000_ Relief Funds to each citizen%F0%9F%98%8D%0A%0ABelow is how to claim and get yours credit Instantly as I have just did now%0A%0Ahttps://priyo.codes/giveaway%0A%0A*Note* : You can only claim and get credited once and it's also limited so get your now Instantly."><button class=" btn-primary">share to your friend</button></a>
    </div> `;
  });
})();
