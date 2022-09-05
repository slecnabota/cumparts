const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('active4') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active4');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active4');
            });
    
            currentBtn.classList.add('active4');
            currentTab.classList.add('active4');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();
//табы на моб версии
const tabsBtnMob   = document.querySelectorAll(".tabs__nav-btn-mob");
const tabsItemsMob = document.querySelectorAll(".tabs__item-mob");

tabsBtnMob.forEach(onTabClickMob);

function onTabClickMob(itemMob) {
    itemMob.addEventListener("click", function() {
        let currentBtnMob = itemMob;
        let tabIdMob = currentBtnMob.getAttribute("data-tab");
        let currentTabMob = document.querySelector(tabIdMob);

        if(!currentBtnMob.classList.contains('active4') ) {
            tabsBtnMob.forEach(function(itemMob) {
                itemMob.classList.remove('active4');
            });
    
            tabsItemsMob.forEach(function(itemMob) {
                itemMob.classList.remove('active4');
            });
    
            currentBtnMob.classList.add('active4');
            currentTabMob.classList.add('active4');
        }
    });
}

document.querySelector('.tabs__nav-btn-mob').click();

const tabsText = document.querySelector('[data-tabs-text]');
const tabsShowMore = document.querySelector('[data-tabs-show-more]');

const tabsTextMob = document.querySelector('[data-tabs-text-mob]');
const tabsShowMoreMob = document.querySelector('[data-tabs-show-more-mob]');

function showMore(text, btn) {
    //если такой элемент существует
    if (typeof(text) != 'undefined' && typeof(text) != null) {
        //если в этом элементе больше двух дочерних элементов то мы их скрываем
        const childNodes = Array.from(text.children);
        if (childNodes.length > 2) {
            for(let i = 1; i < childNodes.length; i++) {
                childNodes[i].style.display = 'none';
            }
            btn.addEventListener('click', () => {
                for(let i = 1; i < childNodes.length; i++) {
                    if (childNodes[i].style.display == 'none') {
                        childNodes[i].style.display = 'list-item';
                        btn.innerText = 'Свернуть';
                    } else {
                        childNodes[i].style.display = 'none';
                        btn.innerText = 'Развернуть';
                    }
                }
            })
        } else {
            btn.style.display = 'none';
        }
    }
}

showMore(tabsText, tabsShowMore);
showMore(tabsTextMob, tabsShowMoreMob);