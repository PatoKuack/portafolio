const maxWithPhone = 1024;
const showMenu = (toggleId, navigatorId, bannerId, mainId, footerId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navigatorId),
        banner =  document.getElementById(bannerId),
        main =  document.getElementById(mainId),
        footer =  document.getElementById(footerId);
  
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
      let className = nav.classList[1];
      let classNumber = nav.classList.length;
      if(classNumber==2 && className=="show"){
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

showMenu('menu-toggle', 'menu-navigator', 'banner', 'card', 'footer');