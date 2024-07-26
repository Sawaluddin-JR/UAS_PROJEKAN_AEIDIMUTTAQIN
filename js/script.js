// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});


// RESET API
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://coffee-shop-hilwa.vercel.app/')
    .then(response => response.json())
    .then(data => {
        console.log("API Data:", data); 
        const menuCards = document.getElementById('menu-cards');
        menuCards.innerHTML = '';

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('menu-card');
            
            card.innerHTML = `
                <img src="${item.product_image}" alt="${item.product_name}" class="menu-card-img">
                <h3 class="menu-card-title">${item.product_name}</h3>
                <p class="menu-card-price">Rp ${item.price.toLocaleString()}</p>
                <button class="buy-button">Beli Sekarang</button>
            `;
            
            menuCards.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

});



