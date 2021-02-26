$(function() {
  let jeton = 0;
  let top = 30;
  let coins;

  $.fn.createBord = function(){
    $('body').append(`
      <header>
    		<img class="logo" src="logo.png" alt="" draggable="false">
    		<div class="popup"><div><div></div></div></div>
    	</header>
    	<div class="container">
    		<div class="leftCoins"></div>
    		<div id="grille">
    			<div class="trou" style="left: 15px; top: 15px;"></div>
    			<img class="grille" src="grille.png" style="left: 15px; top: 675px;">
    			<img class="grille" src="grille.png" style="left: 15px; top: 565px;">
    			<img class="grille" src="grille.png" style="left: 15px; top: 455px;">
    			<img class="grille" src="grille.png" style="left: 15px; top: 345px;">
    			<img class="grille" src="grille.png" style="left: 15px; top: 235px;">
    			<img class="grille" src="grille.png" style="left: 15px; top: 125px;">
    			<div class="trou" style="left: 125px; top: 15px;"></div>
    			<img class="grille" src="grille.png" style="left: 125px; top: 675px;">
    			<img class="grille" src="grille.png" style="left: 125px; top: 565px;">
    			<img class="grille" src="grille.png" style="left: 125px; top: 455px;">
    			<img class="grille" src="grille.png" style="left: 125px; top: 345px;">
    			<img class="grille" src="grille.png" style="left: 125px; top: 235px;">
    			<img class="grille" src="grille.png" style="left: 125px; top: 125px;">
    			<div class="trou" style="left: 235px; top: 15px;"></div>
    			<img class="grille" src="grille.png" style="left: 235px; top: 675px;">
    			<img class="grille" src="grille.png" style="left: 235px; top: 565px;">
    			<img class="grille" src="grille.png" style="left: 235px; top: 455px;">
    			<img class="grille" src="grille.png" style="left: 235px; top: 345px;">
    			<img class="grille" src="grille.png" style="left: 235px; top: 235px;">
    			<img class="grille" src="grille.png" style="left: 235px; top: 125px;">
    			<div class="trou" style="left: 345px; top: 15px;"></div>
    			<img class="grille" src="grille.png" style="left: 345px; top: 675px;">
    			<img class="grille" src="grille.png" style="left: 345px; top: 565px;">
    			<img class="grille" src="grille.png" style="left: 345px; top: 455px;">
    			<img class="grille" src="grille.png" style="left: 345px; top: 345px;">
    			<img class="grille" src="grille.png" style="left: 345px; top: 235px;">
    			<img class="grille" src="grille.png" style="left: 345px; top: 125px;">
    			<div class="trou" style="left: 455px; top: 15px;"></div>
    			<img class="grille" src="grille.png" style="left: 455px; top: 675px;">
    			<img class="grille" src="grille.png" style="left: 455px; top: 565px;">
    			<img class="grille" src="grille.png" style="left: 455px; top: 455px;">
    			<img class="grille" src="grille.png" style="left: 455px; top: 345px;">
    			<img class="grille" src="grille.png" style="left: 455px; top: 235px;">
    			<img class="grille" src="grille.png" style="left: 455px; top: 125px;">
    			<div class="trou" style="left: 565px; top: 15px;"></div>
    			<img class="grille" src="grille.png" style="left: 565px; top: 675px;">
    			<img class="grille" src="grille.png" style="left: 565px; top: 565px;">
    			<img class="grille" src="grille.png" style="left: 565px; top: 455px;">
    			<img class="grille" src="grille.png" style="left: 565px; top: 345px;">
    			<img class="grille" src="grille.png" style="left: 565px; top: 235px;">
    			<img class="grille" src="grille.png" style="left: 565px; top: 125px;">
    			<div class="trou" style="left: 675px; top: 15px;"></div>
    			<img class="grille" src="grille.png" style="left: 675px; top: 675px;">
    			<img class="grille" src="grille.png" style="left: 675px; top: 565px;">
    			<img class="grille" src="grille.png" style="left: 675px; top: 455px;">
    			<img class="grille" src="grille.png" style="left: 675px; top: 345px;">
    			<img class="grille" src="grille.png" style="left: 675px; top: 235px;">
    			<img class="grille" src="grille.png" style="left: 675px; top: 125px;">
    		</div>
    		<div class="rightCoins"></div>
    	</div>
    `);
  }
  coins = setInterval(function() {
    if (jeton == 44) {
      clearInterval(coins);
      gameMode();
    } else if (jeton < 22) {
      $(".leftCoins")
        .append( "<img class=\"jeton\" draggable=\"false\" ondragstart=\"drag(event)\" id=\"j" + jeton + "\" src=\" jaune.png\" style=\"top:300px; margin-top:-60px\";>" ) ;
      jeton++;
      top += 30;
    } else if (jeton < 44) {
      $('.rightCoins')
        .append( "<img class=\"jeton\" draggable=\"false\" id=\"j" + jeton + "\" src=\" rouge.png\" style=\"top:300px; margin-top:-60px\";>");
      jeton++;
      top += 30;
    }
  }, 50);

  function gameMode(){
    $('.popup').html("<section class='alert' style=\"height:300px; width:450px;\"><p > Mode de jeu ! <br><br></p><div style=\"display:flex;\"><div class=\"ia\"><img src=\"brain.png\" style=\"width:130px\"><br><br><button>Vs IA !</button></div><div class=\"onevsone\"><a href=\"one.html\"><img src=\"fist.png\" style=\"width:150px; margin-top:-47px\"><br><button>One vs One</button></a></div></div></section>");
    $('.ia').click(function(){
      $('.popup').html("");
      $('.popup').html("<section class='alert' style=\"height:300px; width:450px;\"><p > Niveau de l'IA ! <br><br></p><div style=\"display:flex;\"><div class=\"ia\"><a href=\"ia_stupide.html\"><img src=\"brain.png\" style=\"width:130px\"><br><br><button>Stupide</button></a></div><div class=\"onevsone\"><a href=\"ia_normale.html\"><img src=\"fist.png\" style=\"width:150px; margin-top:-47px\"><br><button>Normale</button></a></div><div class=\"onevsone\"><a href=\"ia_avancee.html\"><img src=\"fist.png\" style=\"width:150px; margin-top:-47px\"><br><button>Avancée</button></a></div></div></section>");
    })
  }
});
