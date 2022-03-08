const maxWithPhone = 1024;
const toggle = document.getElementById('menu-toggle'),
      nav = document.getElementById('menu-navigator'),
      banner =  document.getElementById('banner'),
      main =  document.getElementById('card'),
      footer =  document.getElementById('footer'),
      profileImage = document.getElementById('banner-container-img');

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

const showImage = () => {
  profileImage.addEventListener('click', () => {
    profileImage.classList.toggle('imageShow');
    banner.classList.toggle('imageShow');
  });
}

showMenu();
showImage();