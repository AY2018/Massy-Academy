

// top Page button and header move

window.addEventListener('scroll', function() {
    var button = document.getElementById('topPage');
    if (window.scrollY >= 1000) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });


  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');

    if (window.scrollY >= 1000) {
      header.classList.add("headerStatic");
    } else {
      header.classList.remove("headerStatic");
    }
  });

    window.addEventListener('scroll', function() {
    var hamburger = this.document.getElementById('btnNavChange');

    if (window.scrollY <= 1000) {
      hamburger.classList.add('hamburgerBlack');
    } else {
      hamburger.classList.remove('hamburgerBlack');
    }
  });


  // Make nav appear


  let btnNav = document.getElementById('btnNav');
  let nav = document.getElementById('NavMobile');


function makeNavAppear(){
  let nav = document.getElementById('NavMobile');
  nav.classList.toggle('navAppear');
}

function show2021(){
  resetButtons();
  document.getElementById('galerieBtn2021').classList.add('BtnTriggered');
  
  let G2021 = document.getElementById('galerie2021');
  let G2122 = document.getElementById('galerie2122');
  let G2223 = document.getElementById('galerie2223');

  G2021.style.display = 'grid';
  G2122.style.display = 'none';
  G2223.style.display = 'none';

  
}

function show2122(){
  resetButtons();
    document.getElementById('galerieBtn2122').classList.add('BtnTriggered');

  let G2021 = document.getElementById('galerie2021');
  let G2122 = document.getElementById('galerie2122');
  let G2223 = document.getElementById('galerie2223');

  G2021.style.display = 'none';
  G2122.style.display = 'grid';
  G2223.style.display = 'none';
}

function show2223(){
  resetButtons();
    document.getElementById('galerieBtn2223').classList.add('BtnTriggered');

  let G2021 = document.getElementById('galerie2021');
  let G2122 = document.getElementById('galerie2122');
  let G2223 = document.getElementById('galerie2223');

  G2021.style.display = 'none';
  G2122.style.display = 'none';
  G2223.style.display = 'grid';
}


  function resetButtons() {
    var buttons = document.getElementsByClassName('galerieBtn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('BtnTriggered');
    }
  }

  function StagesOpen(){
    let stageArticle = document.getElementById('StageArticle');
    stageArticle.style.display = 'flex';
  }

  function closeStageArticle(){
    let stageArticle = document.getElementById('StageArticle');
    stageArticle.style.display = 'none';
  }
