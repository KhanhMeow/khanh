function init(){
    menuMobile();
    const buyTicks = document.querySelectorAll('.js-buy');
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click',removeModal);
    const modal = document.querySelector('.modal');
    modal.addEventListener('click',removeModal);
    const containerModal = document.querySelector('.modal-container');
    containerModal.addEventListener('click', function(event){
        event.stopPropagation();
    })
    for( const buyTick of buyTicks){
        buyTick.addEventListener('click',showModal)
    }

    
} function menuMobile(){
        
        var clickMobileMenu =document.getElementById('menu-mobile');
        var header = document.getElementById('header');
        var currentHeader = header.clientHeight;
        clickMobileMenu.onclick = function(){
            
            var isClose = header.clientHeight === currentHeader;
            if(isClose){
                header.style.height = 'auto';
            }
            else{
                header.style.height = null;
            }
        }
        var clickLis = document.querySelectorAll('#nav li a[href*="#"]');
        for( var i = 0 ; i< clickLis.length;i++){
            var clickLi = clickLis[i];
            clickLi.onclick = function(event){
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                
                if(isParentMenu)
                {
                    event.preventDefault();
                }
                else{
                    
                    header.style.height = null;
                }
            }
            
        }
    }
    function removeModal(){
        const modal = document.querySelector('.modal');
        modal.classList.remove("open");

    }
    function showModal(){
        const modal = document.querySelector('.modal');
        modal.classList.add("open");
    }
    
window.onload= init;