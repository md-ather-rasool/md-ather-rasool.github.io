const resume = document.querySelector('.nav-bar__list--resume');
const backdrop = document.querySelector('.body__backdrop');
const modal = document.querySelector('.only-modal');
const modal_yes = document.querySelector('.only-modal__option--yes');
const modal_no = document.querySelector('.only-modal__option--no');

// vv Mobile Navigation Handlers vv

const toggle_button = document.querySelector('.toggle-button');
const close_button = document.querySelector('.close-svg');
const mobile_nav = document.querySelector('.mobile-nav');
const mob_backdrop = document.querySelector('.nav__backdrop');
const mob_resume = document.querySelector('.mobile-nav__item--resume');
const mob_nav_toggle_modal = document.querySelector('.mob-main-content');

// vv Resume Modal vv

function closeModelBackDrop(){
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

resume.addEventListener('click',function(){
    backdrop.style.display = 'block';
    modal.style.display = 'block';

    modal_yes.addEventListener('click',closeModelBackDrop);

    modal_no.addEventListener('click',closeModelBackDrop);

    backdrop.addEventListener('click',closeModelBackDrop);
});

// vv Resume Mobile Modal vv  

mob_resume.addEventListener('click',function(){
    backdrop.style.display = 'block';
    modal.style.display = 'block';

    modal_yes.addEventListener('click',closeModelBackDrop);

    modal_no.addEventListener('click',closeModelBackDrop);

    backdrop.addEventListener('click',closeModelBackDrop);
});

// vv Mobile Modal vv  

function closeMobileNav(){
    close_button.style.visibility = '';
    mobile_nav.style.display = '';
    mob_backdrop.style.display = '';
    mob_nav_toggle_modal.style.filter = '';
}

toggle_button.addEventListener('click',function(){
    if(close_button.style.visibility == ''){
        close_button.style.visibility = 'visible';
        mobile_nav.style.display = 'block';
        mob_backdrop.style.display = 'block';
        mob_nav_toggle_modal.style.filter = 'grayscale(100%) blur(2px)';
    }
    else{
        closeMobileNav();
    }

    mob_nav_toggle_modal.addEventListener('click',function(){
        closeMobileNav();
    });
    
});

close_button.addEventListener('click',function(){
    closeMobileNav();
});

mob_backdrop.addEventListener('click',function(){
    closeMobileNav();
});


console.dir(mob_nav_toggle_modal);