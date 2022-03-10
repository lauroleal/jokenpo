function valor__1(){
    let opcao = 1;
    play(opcao);
}
function valor__2(){
    let opcao = 2;
    play(opcao);
}
function valor__3(){
    let  opcao = 3;
    play(opcao);
}

function trocaMao_Pc(maoPc){
  if(maoPc == 1){
    document.getElementById("escolha__Robo").src = "../img/Pedra__robo.png";
    } else if(maoPc == 2){
    document.getElementById("escolha__Robo").src ="../img/Papel__robo.png";
  } else if(maoPc == 3){
    document.getElementById("escolha__Robo").src = "../img/Tesoura__robo.png";
  }
}

function trocaMao_User(maoUs){
  if(maoUs == 1){
    document.getElementById("escolha__User").src = "../img/Pedra__user.png";
    } else if(maoUs == 2){
    document.getElementById("escolha__User").src ="../img/Papel__user.png";
  } else if(maoUs == 3){
    document.getElementById("escolha__User").src = "../img/Tesoura__user.png";
  }
}

let placarUser=  0;
let placarRobo = 0;
function play(opcao){
  let computador = parseInt(Math.random() * 3 + 1, 10);
    let resultado;
    if(opcao === computador) {
        resultado = "Empate 😑";
      }else if(opcao === 1 && computador===3 || opcao === 3 && computador===2 || opcao === 2 && computador===1){
        resultado = "Você Venceu 😘";
        if(placarUser == 0){
          placarUser+=1;
          document.getElementById("placarUser").innerHTML = placarUser;
        } else if(placarUser == 1){
            placarUser+=1;
            document.getElementById("placarUser").innerHTML = placarUser;
        } else if(placarUser > 1){
          placarUser+=1;
          document.getElementById("placarUser").innerHTML = placarUser;
        }

      }else if(opcao === 3 && computador===1 || opcao === 2 && computador===3 || opcao === 1 && computador===2){
        resultado = "Computador \n Venceu 😘";
        if(placarRobo == 0){
          placarRobo+=1;
          document.getElementById("placarRobo").innerHTML = placarRobo;
        } else if(placarRobo == 1){
          placarRobo+=1;
            document.getElementById("placarRobo").innerHTML = placarRobo;
        } else if(placarRobo > 1){
          placarRobo+=1;
          document.getElementById("placarRobo").innerHTML = placarRobo;
      }
      }
      document.getElementById("resultado").innerHTML = resultado;
      trocaMao_User(opcao);
      trocaMao_Pc(computador);  
    
}


