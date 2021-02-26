$(function() {
  let jeton = 0;
  let yellowJetonId = 0;
  let redJetonId = 22;
  let top = 30;
  let coins;
  let column = document.getElementsByClassName("trou");
  let currPlayer = "";
  let first = "";
  let replay = sessionStorage.getItem('replay');
  sessionStorage.removeItem('name1');
  let name1Data = sessionStorage.getItem('name1');
  let name2Data = "Ordinateur";
  let display = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  askNames();

  function openAlert() {
    $(".more-ot-alert").fadeIn("fast");
    if ($("html").hasClass("lt-ie9")) {
      var speed = 200;
      var times = 30;
      var loop = setInterval(anim, 600);

      function anim() {
        times--;
        if (times === 0) {
          clearInterval(loop);
        }
        $(".more-ot-alert").animate({
          left: 460
        }, speed).animate({
          left: 430
        }, speed);
      };
      anim();
    };
    setTimeout(function() {
      $(".more-ot-alert").fadeOut("fast");
    }, 5000);
  }

  function askNames() {
    if (!name1Data) {
      name1 = prompt("Pseudo 1 : ");
      while (name1 == "" || !name1) {
        name1 = prompt("Pseudo 1 : ");
      }
      sessionStorage.setItem('name1', name1);
      name1Data = sessionStorage.getItem('name1');
      coinGenerator(); //en cas de premiere session de jeu entre 2 joueurs on stock leurs pseudo
    } else {
      coinGenerator(); //en cas de re match les pseudo serront deja stocker
    }
  }

  function coinGenerator() {
    $('.pseudo1').html(name1Data);
    $('.pseudo2').html(name2Data);
    coins = setInterval(function() {
      if (jeton == 44) {
        clearInterval(coins);
        flipCoin();
      } else if (jeton < 22) {
        $('.leftCoins').append("<img class=\"jeton\" draggable=\"false\" ondragstart=\"drag(event)\" id=\"j" + jeton + "\" src=\" jaune.png\" style=\"top:300px; margin-top:-60px\";>");
        jeton++;
        top += 30;
      } else if (jeton < 44) {
        $('.rightCoins').append("<img class=\"jeton\" draggable=\"false\" id=\"j" + jeton + "\" src=\" rouge.png\" style=\"top:300px; margin-top:-60px\";>");
        jeton++;
        top += 30;
      }
    }, 50);
  }

  function flipCoin() {
    let random = Math.floor(Math.random() * Math.floor(101));
    $('.popup').html("<section class='alert'><p> Pile ou face ! <br><img src='gif.gif' alt='gif'></p></section>");
    if (random % 2 == 0) {
      currPlayer = "jaune";
      first = "jaune";
    } else {
      currPlayer = "rouge";
      first = "rouge";
    }

    if (currPlayer == "jaune") {
      function add() {
        $('.popup').html("<section class='alert'><p><br>Les jaunes commence !<br><img src=\"jaune.png\" style=\"width:90px; margin-top:10px\"></p></section>");
        $('.pseudo1').css('-webkit-animation', "neon1 0.4s ease-in-out infinite alternate");
        $('.pseudo2').css('animation', 'none');

      }
      setTimeout(add, 3250);
    } else {
      function add() {
        $('.popup').html("<section class='alert'><p><br>L'ordinateur commence !<br><img src=\"rouge.png\" style=\"width:90px; margin-top:10px\"></p></section>");
        $('.pseudo2').css('-webkit-animation', "neon1 0.4s ease-in-out infinite alternate");
        $('.pseudo1').css('animation', 'none');
      }
      setTimeout(add, 3250);
    }

    function remove() {
      $('.popup').html("");
    }
    setTimeout(remove, 3200);

    function remove() {
      $('.popup').html("");
      currPlayer == "rouge" ? setTimeout(function() {
        iaPlay(), 1000
      }) : yellowNextCoin();
    }
    setTimeout(remove, 4700);
    setTimeout(openAlert, 5000);
  }

  function yellowNextCoin() {
    $("#j" + yellowJetonId).css('top', "200px");
    enableClick();
  }

  function redNextCoin() {
    $("#j" + redJetonId).css('top', "200px");
    disableClick();
    setTimeout(function() {
      iaPlay();
    }, 2200);
  }

  function iaPlay() {
    token = Math.floor(Math.random() * Math.floor(7));
    while (display[token].length == 6) {
      token = Math.floor(Math.random() * Math.floor(7));
    }
    coin = document.getElementById("j" + redJetonId);
    coin.style.top = "-250px";
    column[token].append(coin);
    coin.style.marginLeft = "10px";
    posTop = window.getComputedStyle(coin).getPropertyValue("top");
    posTop = parseInt(posTop);
    display[token].push(currPlayer);
    chute(posTop, coin, token);
  }

  function colOne() {
    let coin;
    if (display[0].length == 6) {
      return false;
    }
    if (currPlayer == "jaune") {
      coin = document.getElementById("j" + yellowJetonId);
    } else {
      coin = document.getElementById("j" + redJetonId);
    }
    coin.style.top = "-250px";
    column[0].append(coin);
    coin.style.marginLeft = "10px";
    posTop = window.getComputedStyle(coin).getPropertyValue("top");
    posTop = parseInt(posTop);
    display[0].push(currPlayer);
    chute(posTop, coin, 0);
  }

  function colTwo() {
    if (display[1].length == 6) {
      return false;
    }
    let coin;
    if (currPlayer == "jaune") {
      coin = document.getElementById("j" + yellowJetonId);
    } else {
      coin = document.getElementById("j" + redJetonId);
    }
    column[1].append(coin);
    coin.style.top = "-250px";
    coin.style.marginLeft = "10px";
    posTop = window.getComputedStyle(coin).getPropertyValue("top");
    posTop = parseInt(posTop);
    display[1].push(currPlayer);
    chute(posTop, coin, 1);
  }

  function colThree() {
    if (display[2].length == 6) {
      return false;
    }
    let coin;
    if (currPlayer == "jaune") {
      coin = document.getElementById("j" + yellowJetonId);
    } else {
      coin = document.getElementById("j" + redJetonId);
    }
    column[2].append(coin);
    coin.style.top = "-250px";
    coin.style.marginLeft = "10px";
    posTop = window.getComputedStyle(coin).getPropertyValue("top");
    posTop = parseInt(posTop);
    display[2].push(currPlayer);
    chute(posTop, coin, 2);
  }

  function colFour() {
    if (display[3].length == 6) {
      return false;
    }
    let coin;
    if (currPlayer == "jaune") {
      coin = document.getElementById("j" + yellowJetonId);
    } else {
      coin = document.getElementById("j" + redJetonId);
    }
    column[3].append(coin);
    coin.style.top = "-250px";
    coin.style.marginLeft = "10px";
    posTop = window.getComputedStyle(coin).getPropertyValue("top");
    posTop = parseInt(posTop);
    display[3].push(currPlayer);
    chute(posTop, coin, 3);
  }

  function colFive() {
    if (display[4].length == 6) {
      return false;
    }
    let coin;
    if (currPlayer == "jaune") {
      coin = document.getElementById("j" + yellowJetonId);
    } else {
      coin = document.getElementById("j" + redJetonId);
    }
    column[4].append(coin);
    coin.style.top = "-250px";
    coin.style.marginLeft = "10px";
    posTop = window.getComputedStyle(coin).getPropertyValue("top");
    posTop = parseInt(posTop);
    display[4].push(currPlayer);
    chute(posTop, coin, 4);
  }

  function colSix() {
    if (display[5].length == 6) {
      return false;
    }
    let coin;
    if (currPlayer == "jaune") {
      coin = document.getElementById("j" + yellowJetonId);
    } else {
      coin = document.getElementById("j" + redJetonId);
    }
    column[5].append(coin);
    coin.style.top = "-250px";
    coin.style.marginLeft = "10px";
    posTop = window.getComputedStyle(coin).getPropertyValue("top");
    posTop = parseInt(posTop);
    display[5].push(currPlayer);
    chute(posTop, coin, 5);
  }

  function colSeven() {
    if (display[6].length == 6) {
      return false;
    }
    let coin;
    if (currPlayer == "jaune") {
      coin = document.getElementById("j" + yellowJetonId);
    } else {
      coin = document.getElementById("j" + redJetonId);
    }
    column[6].append(coin);
    coin.style.top = "-250px";
    coin.style.marginLeft = "10px";
    posTop = window.getComputedStyle(coin).getPropertyValue("top");
    posTop = parseInt(posTop);
    display[6].push(currPlayer);
    chute(posTop, coin, 6);
  }

  function chute(posTop, coin, nb) {
    let chutes = setInterval(function() {
      disableClick();
      if (display[nb].length == 1 && posTop < 730) {
        let o = 10;
        posTop += o;
        coin.style.top = posTop + "px";
      } else if (display[nb].length == 2 && posTop < 580) {
        let o = 10;
        posTop += o;
        coin.style.top = posTop + 4.5 + "px";
      } else if (display[nb].length == 3 && posTop < 440) {
        let o = 10;
        posTop += o;
        coin.style.top = posTop + 1 + "px";
      } else if (display[nb].length == 4 && posTop < 299) {
        let o = 10;
        posTop += o;
        coin.style.top = posTop + "px";
      } else if (display[nb].length == 5 && posTop < 152) {
        let o = 10;
        posTop += o;
        coin.style.top = posTop - 4 + "px";
      } else if (display[nb].length == 6 && posTop < 8) {
        let o = 10;
        posTop += o;
        coin.style.top = posTop + "px";
      } else {
        clearInterval(chutes);
      }

    }, 1);
    checkWin();
  }

  function checkWin() {
    let win = false;
    let j = 1;
    let k = 2;
    let l = 3;
    let p = 5;
    let m = 4;
    let s = 3;
    for (let h = 0; h < 7; h++) { //vertical win
      if (display[h][0] == "jaune" && display[h][1] == "jaune" && display[h][2] == "jaune" && display[h][3] == "jaune" || display[h][0] == "rouge" && display[h][1] == "rouge" && display[h][2] == "rouge" && display[h][3] == "rouge") {
        win = true;
      } else if (display[h][1] == "jaune" && display[h][2] == "jaune" && display[h][3] == "jaune" && display[h][4] == "jaune" || display[h][1] == "rouge" && display[h][2] == "rouge" && display[h][3] == "rouge" && display[h][4] == "rouge") {
        win = true;
      } else if (display[h][2] == "jaune" && display[h][3] == "jaune" && display[h][4] == "jaune" && display[h][5] == "jaune" || display[h][2] == "rouge" && display[h][3] == "rouge" && display[h][4] == "rouge" && display[h][5] == "rouge") {
        win = true;
      }
    }
    for (let h = 0; h < 7; h++) { //horizontal win
      if (display[0][h] == "jaune" && display[1][h] == "jaune" && display[2][h] == "jaune" && display[3][h] == "jaune" || display[0][h] == "rouge" && display[1][h] == "rouge" && display[2][h] == "rouge" && display[3][h] == "rouge") {
        win = true;
      } else if (display[1][h] == "jaune" && display[2][h] == "jaune" && display[3][h] == "jaune" && display[4][h] == "jaune" || display[1][h] == "rouge" && display[2][h] == "rouge" && display[3][h] == "rouge" && display[4][h] == "rouge") {
        win = true;
      } else if (display[2][h] == "jaune" && display[3][h] == "jaune" && display[4][h] == "jaune" && display[5][h] == "jaune" || display[2][h] == "rouge" && display[3][h] == "rouge" && display[4][h] == "rouge" && display[5][h] == "rouge") {
        win = true;
      } else if (display[3][h] == "jaune" && display[4][h] == "jaune" && display[5][h] == "jaune" && display[6][h] == "jaune" || display[3][h] == "rouge" && display[4][h] == "rouge" && display[5][h] == "rouge" && display[6][h] == "rouge") {
        win = true;
      }
    }
    for (let h = 0; h != 4; h++) { //vertical right win
      if (display[h][0] == "jaune" && display[j][1] == "jaune" && display[k][2] == "jaune" && display[l][3] == "jaune" || display[h][0] == "rouge" && display[j][1] == "rouge" && display[k][2] == "rouge" && display[l][3] == "rouge") {
        win = true;
      } else if (display[h][1] == "jaune" && display[j][2] == "jaune" && display[k][3] == "jaune" && display[l][4] == "jaune" || display[h][1] == "rouge" && display[j][2] == "rouge" && display[k][3] == "rouge" && display[l][4] == "rouge") {
        win = true;
      } else if (display[h][2] == "jaune" && display[j][3] == "jaune" && display[k][4] == "jaune" && display[l][5] == "jaune" || display[h][2] == "rouge" && display[j][3] == "rouge" && display[k][4] == "rouge" && display[l][5] == "rouge") {
        win = true;
      } else if (display[h][3] == "jaune" && display[j][4] == "jaune" && display[k][5] == "jaune" && display[l][6] == "jaune" || display[h][3] == "rouge" && display[j][4] == "rouge" && display[k][5] == "rouge" && display[l][6] == "rouge") {
        win = true;
      }
      j++;
      k++;
      l++;
    }
    for (let h = 6; h != 2; h--) { //vertical left win
      if (display[h][0] == "jaune" && display[p][1] == "jaune" && display[m][2] == "jaune" && display[s][3] == "jaune" || display[h][0] == "rouge" && display[p][1] == "rouge" && display[m][2] == "rouge" && display[s][3] == "rouge") {
        win = true;
      } else if (display[h][1] == "jaune" && display[p][2] == "jaune" && display[m][3] == "jaune" && display[s][4] == "jaune" || display[h][1] == "rouge" && display[p][2] == "rouge" && display[m][3] == "rouge" && display[s][4] == "rouge") {
        win = true;
      }
      if (display[h][2] == "jaune" && display[p][3] == "jaune" && display[m][4] == "jaune" && display[s][5] == "jaune" || display[h][2] == "rouge" && display[p][3] == "rouge" && display[m][4] == "rouge" && display[s][5] == "rouge") {
        win = true;
      }
      p--;
      m--;
      s--;
    }

    if ((display[0].length == 6) && (display[1].length == 6) && (display[2].length == 6) && (display[3].length == 6) && (display[4].length == 6) && (display[5].length == 6) && (display[6].length == 6)) {
      console.log("win" + currPlayer);
      appendNullDisplay();
    } else if (win) {
      console.log("win" + currPlayer);
      appendWinDisplay();
    } else {
      nextPlayer();
    }
  }

  function appendWinDisplay() {
    if (currPlayer == "jaune") {
      $('.popup').html("<section class='alert2'><p>Les jaune ont gagné !<br><br><img src=\"tenor.gif\"><br><br><a href=\"ia_stupide.html\"><button class=\"replay\" style\"background:#8c6cff;\">Rejouer</button></a><a href=\"index.html\"><button class=\"quit\" style\"background:#8c6cff; margin-left:-20px;\">Quitter</button></a></p></section>");
      disableClick();
      $('.replay').click(function() {
        sessionStorage.setItem('replay', "1");
        location.reload()
      });
      $('.quit').click(function() {
        sessionStorage.clear();
      });
    } else {
      $('.popup').html("<section class='alert2'><p>Les rouge ont gagné !<br><br><img src=\"tenor.gif\"><br><br><a href=\"ia_stupide.html\"><button class=\"replay\" style\"background:#8c6cff;\">Rejouer</button></a><a href=\"index.html\"><button class=\"quit\" style\"background:#8c6cff; margin-left:-20px;\">Quitter</button></a></p></section>");
      disableClick();
      $('.replay').click(function() {
        sessionStorage.setItem('replay', "1");
        location.reload()
      });
      $('.quit').click(function() {
        sessionStorage.clear();
      });
    }
  }

  function appendNullDisplay() {
    $('.popup').html("<section class='alert2'><p>Match Nul !<br><br><img src=\"tenor.gif\"><br><br><a href=\"ia_stupide.html\"><button class=\"replay\" style\"background:#8c6cff;\">Rejouer</button></a><a href=\"index.html\"><button class=\"quit\" style\"background:#8c6cff; margin-left:-20px;\">Quitter</button></a></p></section>");
    disableClick();
    $('.replay').click(function() {
      location.reload()
    });
    $('.quit').click(function() {
      sessionStorage.clear();
    });
  }

  function disableClick() {
    column[0].onclick = null;
    column[1].onclick = null;
    column[2].onclick = null;
    column[3].onclick = null;
    column[4].onclick = null;
    column[5].onclick = null;
    column[6].onclick = null;
  }

  function enableClick() {
    column[0].onclick = colOne;
    column[1].onclick = colTwo;
    column[2].onclick = colThree;
    column[3].onclick = colFour;
    column[4].onclick = colFive;
    column[5].onclick = colSix;
    column[6].onclick = colSeven;
  }

  function nextPlayer() {
    if (currPlayer == "jaune") {
      function add() {
        $('.popup').html("<section class='alert'><p><br>L'ordinateur réflechi...<br><img src=\"rouge.png\" style=\"width:90px; margin-top:10px\"></p></section>");
        $('.pseudo2').css('-webkit-animation', "neon1 0.4s ease-in-out infinite alternate");
        $('.pseudo1').css('animation', 'none');

        disableClick();
      }
      setTimeout(add, 500);
    } else {
      function add() {
        $('.popup').html("<section class='alert'><p><br>Les jaunes c'est votre tour !<br><img src=\"jaune.png\" style=\"width:90px; margin-top:10px\"></p></section>");
        $('.pseudo1').css('-webkit-animation', "neon1 0.4s ease-in-out infinite alternate");
        $('.pseudo2').css('animation', "none");
        disableClick();

      }
      setTimeout(add, 500);
    }

    function remove() {
      $('.popup').html("");
      column[0].onclick = colOne;
      column[1].onclick = colTwo;
      column[2].onclick = colThree;
      column[3].onclick = colFour;
      column[4].onclick = colFive;
      column[5].onclick = colSix;
      column[6].onclick = colSeven;
    }
    setTimeout(remove, 2000);

    if (first == "jaune") {
      redJetonId = 21;
      first = "";
    } else if (first == "rouge") {
      yellowJetonId = -1;
      first = "";
    }

    if (currPlayer == "jaune") {
      redJetonId++;
      currPlayer = "rouge";
      redNextCoin();
    } else {
      yellowJetonId++;
      currPlayer = "jaune";
      yellowNextCoin();
    }
  }
});
