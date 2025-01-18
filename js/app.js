const hamBtn = document.querySelector('.mobile__hamburger');
const mobileNav = document.querySelector('.mobile-nav__menu-list');
const navOverlay = document.querySelector('.overlay');
const navWrapper = document.querySelector('.nav__wrapper');
const nav = document.querySelector('.nav');
const mobileNavSubmenuIcons = document.querySelectorAll('.mobile-nav__submenu-icon');

const toggleClass = (element, className) => element.classList.toggle(className);
const removeClass = (element, className) => element.classList.remove(className);

hamBtn.addEventListener('click', () => {
  toggleClass(hamBtn, 'mobile__hamburger-active');
  toggleClass(mobileNav, 'mobile-nav__menu-list-active');
  toggleClass(navOverlay, 'active');
});

navOverlay.addEventListener('click', () => {
  removeClass(hamBtn, 'mobile__hamburger-active');
  removeClass(mobileNav, 'mobile-nav__menu-list-active');
  removeClass(navOverlay, 'active');
});

window.addEventListener('scroll', () => {
  const opacity = Math.min(window.scrollY / 150, 1);
  navWrapper.style.backgroundColor = window.scrollY > 0 ? `rgba(255, 255, 255, ${opacity})` : 'transparent';
  navWrapper.style.boxShadow = window.scrollY > 0 ? `0px 10px 16px -10px rgba(66, 68, 90, ${opacity})` : 'none';
});

mobileNavSubmenuIcons.forEach(dropDownBtn => {
  dropDownBtn.addEventListener('click', () => {
    mobileNavSubmenuIcons.forEach(btn => {
      if (btn !== dropDownBtn) {
        removeClass(btn, 'active');
        const submenu = btn.parentElement.nextElementSibling?.children[0];
        submenu && removeClass(submenu, 'active');
      }
    });
    toggleClass(dropDownBtn, 'active');
    const nextSubmenu = dropDownBtn.parentElement.nextElementSibling?.children[0];
    nextSubmenu && toggleClass(nextSubmenu, 'active');
  });
});
