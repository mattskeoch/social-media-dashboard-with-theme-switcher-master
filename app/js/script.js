const toggle = document.getElementById('mytoggle--theme');
const body = document.body;
const headerTitle = document.querySelector('.header--main h1');
const divider = document.querySelector('hr.divider');
const totalFollowers = document.querySelector('section.header .header--main p');
const headerToggle = document.querySelector('.header--toggle h3');
const toggleSwitch = document.querySelector('.toggle--theme-switch');
const card = document.querySelectorAll('.card');
const cardTitle = document.querySelectorAll('h2.card--username');
const cardNumber = document.querySelectorAll('span.count--number');
const overviewTitle = document.querySelector('h2.overview--count');
const overviewCard = document.querySelectorAll('.overview--card');
const overviewCardTitle = document.querySelectorAll('h3.card--title');
const overviewCardCount = document.querySelectorAll('h2.overview--count');

toggle.addEventListener('input', (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
        body.classList.add('light-theme');
        headerTitle.classList.add('light-theme');
        divider.classList.add('light-theme');
        toggleSwitch.classList.add('light-theme');
        totalFollowers.classList.add('light-theme');
        headerToggle.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        headerTitle.classList.remove('light-theme');
        divider.classList.remove('light-theme');
        toggleSwitch.classList.remove('light-theme');
        totalFollowers.classList.remove('light-theme');
        headerToggle.classList.remove('light-theme');
    }
    //Main Card BG
    for (var i = 0; i < card.length; i++) {
        if (isChecked) {
            card[i].classList.add('light-theme');
        } else {
            card[i].classList.remove('light-theme');
        }
    }
    //Main Card Title/Username
    for (var i = 0; i < cardTitle.length; i++) {
        if (isChecked) {
            cardTitle[i].classList.add('light-theme');
        } else {
            cardTitle[i].classList.remove('light-theme');
        }
    }
    //Main Card Number/Count
    for (var i = 0; i < cardNumber.length; i++) {
        if (isChecked) {
            cardNumber[i].classList.add('light-theme');
        } else {
            cardNumber[i].classList.remove('light-theme');
        }
    }
    //Overview Card BG
    for (var i = 0; i < overviewCard.length; i++) {
        if (isChecked) {
            overviewCard[i].classList.add('light-theme');
        } else {
            overviewCard[i].classList.remove('light-theme');
        }
    }
    //Overview Card Title/Username
    for (var i = 0; i < overviewCardTitle.length; i++) {
        if (isChecked) {
            overviewCardTitle[i].classList.add('light-theme');
        } else {
            overviewCardTitle[i].classList.remove('light-theme');
        }
    }
    //Overview Card Number/Count
    for (var i = 0; i < overviewCardCount.length; i++) {
        if (isChecked) {
            overviewCardCount[i].classList.add('light-theme');
        } else {
            overviewCardCount[i].classList.remove('light-theme');
        }
    }
});


//Should have done something like this instead

// const toggle = document.getElementById('mytoggle--theme');
// console.log(toggle);

// function switchTheme(e) {
//     if (e.target.checked) {
//         console.log("chcked");
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'default');
//     }    
// }
// toggle.addEventListener('change', switchTheme, false);