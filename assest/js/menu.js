(() => {
   // Selecionar o elemento do menu
   let menu = document.querySelector('.menu_bar');
 
   // Função para abrir/fechar o menu
   let openMenu = () => {
     let listMenu = document.querySelector('.list_itens');
     listMenu.classList.toggle('open_menu');
   };
 
   // Adicionar um evento de clique ao elemento do menu
   menu.addEventListener('click', openMenu);
 })();