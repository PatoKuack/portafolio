const maxWithPhone = 1024;
const bodyId = document.getElementById('body'),
      toggle = document.getElementById('menu-toggle'),
      nav = document.getElementById('menu-navigator'),
      banner =  document.getElementById('banner'),
      main =  document.getElementById('card'),
      footer =  document.getElementById('footer'),
      profileImage = document.getElementById('banner-container-img'),
      bannerBalloon = document.getElementById('banner-balloon'),
      bannerBalloonText = document.getElementById('banner-balloon-text'),
      switchIdiom = document.getElementById('switch-idioms'),
      containerSwitchLD = document.getElementById('switch-lightdark-container'),
      switchLD = document.getElementById('switch-lightdark'),
      switchLDAnimate = document.getElementById('switch-lightdark-moonsun');

const showMenu = () => {
  
  if (toggle && nav && banner && main && footer) {
    //Si se hace clic en el boton hamburguesa, se colocarán las clases "shoe" y "active".
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      toggle.classList.toggle('active');
    });
    //Si se redimeciona la pantalla, se eliminarán las clases "shoe" y "active".
    window.addEventListener('resize', () => {
      if (visualViewport.width >= maxWithPhone) {
        nav.classList.remove('show');
        toggle.classList.remove('active');
      }
    });

    //Si se da clic fuera del navegador o del menú, se eliminará la clase "show" y "active".
    const removeShowActive = () => {
      let className1 = nav.classList[1];
      let classNumber1 = nav.classList.length;
      if(classNumber1==2 && className1=="show"){
          nav.classList.remove('show');
          toggle.classList.remove('active');
      }
    }
    banner.addEventListener('click', () => {
      removeShowActive();
    });
    main.addEventListener('click', () => {
      removeShowActive();
    });
    footer.addEventListener('click', () => {
      removeShowActive();
    });
  }
}

const showProfileImage = () => {
  profileImage.addEventListener('click', () => {
    profileImage.classList.toggle('imageShow');
    banner.classList.toggle('imageShow');
    let className2 = banner.classList[1];
    let classNumber2 = banner.classList.length;
    if(classNumber2==2 && className2=="imageShow"){
      window.addEventListener('scroll', () => {
        profileImage.classList.remove('imageShow');
        banner.classList.remove('imageShow');
      });
    }
  });
}

const showGreatBalloon = () => {
  // window.addEventListener('load', () => {
  //   bannerBalloon.classList.add("showgreat");
  //   bannerBalloonText.classList.add("showgreat");
    bannerBalloonText.addEventListener('animationend', () => {
      bannerBalloon.classList.remove("showgreat");
      bannerBalloonText.classList.remove("showgreat");
    });
  // });
}

const changeIdiom = () => {
  let textSpanish = Array.from(document.querySelectorAll('.text-spanish'));
  let textEnglish = Array.from(document.querySelectorAll('.text-english'));
  
  /* Guardando el tema en el navegador del usuario */
  let savingPreferenceIdiom = localStorage.getItem('languagesaved');
  let languagePref;

  if(savingPreferenceIdiom === 'spanish'){
    textSpanish.map(changeDisplayEn => changeDisplayEn.style.display = "inherit");
    textEnglish.map(changeDisplayEs => changeDisplayEs.style.display = "none");
  }else if(savingPreferenceIdiom === 'english'){
    textSpanish.map(changeDisplayEn => changeDisplayEn.style.display = "none");
    textEnglish.map(changeDisplayEs => changeDisplayEs.style.display = "inherit");
  }
  /* --------------------------------------------- */

  switchIdiom.addEventListener('change', () => {
    if(switchIdiom.checked == false){
      textSpanish.map(changeDisplayEn => changeDisplayEn.style.display = "inherit");
      textEnglish.map(changeDisplayEs => changeDisplayEs.style.display = "none");
      /* Guardando el tema en el navegador del usuario */
      languagePref = 'spanish';
      /* --------------------------------------------- */
    }else{
      textSpanish.map(changeDisplayEn => changeDisplayEn.style.display = "none");
      textEnglish.map(changeDisplayEs => changeDisplayEs.style.display = "inherit");
      /* Guardando el tema en el navegador del usuario */
      languagePref = 'english';
      /* --------------------------------------------- */
    }
    
      /* Guardando el tema en el navegador del usuario */
      localStorage.setItem('languagesaved', languagePref);
      /* --------------------------------------------- */
  });
}

const lightDarkScheme = () => {
  window.addEventListener('load', () => {
    
    if((getComputedStyle(bodyId).color == "rgb(240, 248, 255)") || (getComputedStyle(bodyId).color == "#f0f8ff")){
      switchLD.checked = true;
    }else{
      switchLD.checked = false;
    }

  });
  
  containerSwitchLD.addEventListener('click', () => {
    let className3 = switchLDAnimate.classList[1];
    let classNumber3 = switchLDAnimate.classList.length;
    const schemeState = window.matchMedia("(prefers-color-scheme)").matches;
    if(classNumber3==2 && className3=="scaling"){
        switchLDAnimate.classList.remove('scaling');
    }
    switchLDAnimate.classList.add('scaling');
    switchLDAnimate.addEventListener('animationend', () => {
      switchLDAnimate.classList.remove('scaling');
    });
  });

  /* Guardando el tema en el navegador del usuario */
  let savingPreferenceTheme = localStorage.getItem('themesaved');
  let themePref;

  if(savingPreferenceTheme === 'dark'){
    bodyId.classList.toggle('dark-theme');
  }else if(savingPreferenceTheme === 'light'){
    bodyId.classList.toggle('light-theme');
  }
  /* --------------------------------------------- */

  switchLD.addEventListener('change', () => {
    if(switchLD.checked == false){
      // if(schemeState){
        bodyId.classList.add('light-theme');
      // }else{
        bodyId.classList.remove('dark-theme');
      // }
      /* Guardando el tema en el navegador del usuario */
      themePref = 'light';
      /* --------------------------------------------- */
    }else{
      // if(schemeState){
        bodyId.classList.add('dark-theme');
      // }else{
        bodyId.classList.remove('light-theme');
      // }
      /* Guardando el tema en el navegador del usuario */
      themePref = 'dark';
      /* --------------------------------------------- */
    }
    /* Guardando el tema en el navegador del usuario */
    localStorage.setItem('themesaved', themePref);
    /* --------------------------------------------- */
  });
}

showMenu();
showProfileImage();
showGreatBalloon();
changeIdiom();
lightDarkScheme();