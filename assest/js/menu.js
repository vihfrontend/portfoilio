(()=>{
 let menu = document.querySelector('.menu_bar');
 let openMenu = ()=>{
    let listMenu = document.querySelector('.list_itens')
    listMenu.classList.toggle('open_menu');
 }
 menu.addEventListener('click',openMenu)
})()