// Displays the mobile menu dropdown options without ES6
var menuArray = document.getElementsByClassName('menu-option');
for(var i = 0; i < menuArray.length; i++) {
  var option = menuArray[i];
  option.onclick = function() {
    if(this.classList.contains('pools-spas')) {
      toggleMenuByIdName('pool-menu');
      toggleActive('pool-menu-li');
    } else if(this.classList.contains('supplies')) {
      toggleMenuByIdName('supplies-menu');
      toggleActive('supplies-menu-li');
    } else if(this.classList.contains('resources')) {
      toggleMenuByIdName('resources-menu');
      toggleActive('resources-menu-li');
    } else if(this.classList.contains('services')) {
      toggleMenuByIdName('services-menu');
      toggleActive('services-menu-li');
    }
  }
}

// Displays certs
function renderCertsFirstRow(certs) {
  let finalCerts = 
  `
  <div id="first-row-certs">
  `;

  Array.from(certs).forEach((cert) => {
    if(cert == 'Installation Pro') {
      finalCerts +=
      `
      <div class="cert-block">
        <img src="images/star-installation-pro.png" alt="star" class="star">
        <span class="cert-description">Installation Pro</span>
      </div>
      `;
    } else if(cert == 'Commercial Pro') {
      finalCerts +=
      `
      <div class="cert-block">
        <img src="images/users-commercial-pro.png" alt="commercial" class="commercial">
        <span class="cert-description">Commercial Pro</span>
      </div>
      `;
    }
  });

  return finalCerts += `</div>`;
}

function renderCertsSecondRow(certs) {
  let finalCerts = 
  `
  <div id="second-row-certs">
  `;

  Array.from(certs).forEach((cert) => {
    if(cert == 'Residential Pro') {
      finalCerts +=
      `
      <div class="cert-block">
        <img src="images/home-residential-pro.png" alt="home">
        <span class="cert-description">Residential Pro</span>
      </div>
      `;
    } else if(cert == 'Service Pro') {
      finalCerts +=
      `
      <div class="cert-block">
        <img src="images/gear-service-pro.png" alt="gear">
        <span class="cert-description">Service Pro</span>
      </div>
      `;
    }
  });

  return finalCerts += `</div>`;
}

// Scans data for empty values and return Closed if so
function scanEmptyVals(val) {
  if (val == '') {
    return 'CLOSED';
  }

  return val;
}

// Filter result drop down menu
function toggleDealerOptions() {
  var dealerDrop = document.getElementById('dealer-dropdown');
  if(dealerDrop.style.display != 'flex') {
    dealerDrop.setAttribute('style', 'display: flex; flex-direction: column; width: 91%');
  } else {
    dealerDrop.style.display = 'none';
  }
}

// Drops the div with the filter result menu
function toggleDivHeight() {
  var divHeight = document.getElementById('dealer-inner');
  if(divHeight.style.height != '19.8rem') {
    divHeight.style.height = '19.8rem';
  } else {
    divHeight.style.height = '4.4rem';
  }
}

// Mobile menu dropdown
function toggleMobileMenu() {
  var mobileMenu = document.getElementById('m-dropdown-menu');
  if(mobileMenu.style.visibility != 'visible') {
    mobileMenu.style.visibility = 'visible';
  } else {
    mobileMenu.style.visibility = 'hidden';
  }
}

// Mobile sub-menu dropdown
function toggleMenuByIdName(menuId){
  var targetMenu = document.getElementById(menuId);
  if(targetMenu.style.display != 'flex') {
    targetMenu.style.display = 'flex';
  } else {
    targetMenu.style.display = 'none';
  }
}

function toggleActive(menuId) {
  var targetMenu = document.getElementById(menuId);
  if(window.screen.width > 800) {
    if(targetMenu.classList.contains('menu-active')) {
      targetMenu.classList.remove('menu-active');
    } else {
      targetMenu.classList.add('menu-active');
    }
  }
}

// Toggles contact form modal
function toggleModal() {
  var modal = document.getElementById('modal-container');
  if(modal.style.display != 'flex') {
    modal.style.display = 'flex';
  } else {
    modal.style.display = 'none';
  }
}

// Checks window size before modifying text
function toggleBannerText() {
  if(window.screen.width > 425) {
    document.getElementById('banner-text-large').innerHTML = 'Is your pool ready for Summer?';
    document.getElementById('banner-text-lower').innerHTML = 'Choose a pro thats close to your home from the list below.';
  } else {
    document.getElementById('banner-text-large').innerHTML = 'Is your pool ready<br> for Summer?';
    document.getElementById('banner-text-lower').innerHTML = 'Choose a pro thats close to your<br> home from the list below.';
  }
}

function toggleFindButton() {
  if(window.screen.width > 425) {
    document.getElementById('find-pro-button').innerHTML = '<img src="images/location-icon.png" alt="location"> Find a Pool Pro';
  } else {
    document.getElementById('find-pro-button').innerHTML = '<img src="images/location-icon.png" alt="location"> FIND A PRO';
  }
}

function togglePhoneIcon() {
  var phoneIcons = document.querySelectorAll('.dealer-phone-icon');
  if(window.screen.width > 800) {
    phoneIcons.forEach(function(phoneIcon) {
      phoneIcon.src='images/phone-icon-desktop.png';
    });
  } else {
    phoneIcons.forEach(function(phoneIcon) {
      phoneIcon.src='images/phone-icon-header.png';
    });
  }
}

// Toggles dealer-filter button to be disabled
function toggleButtonDisabled() {
  var button = document.getElementById('down-arrow-btn');
  if(window.screen.width > 800) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

document.getElementById('down-arrow-btn').onclick = function() {
  toggleDealerOptions();
  toggleDivHeight();
};

document.getElementById('m-menu-icon').onclick = function() {
  toggleMobileMenu();
}

document.getElementById('m-exit').onclick = function() {
  toggleMobileMenu();
}

document.getElementById('modal-exit').onclick = function() {
  toggleModal();
}

window.onload = function() {
  toggleBannerText();
  toggleFindButton();
  togglePhoneIcon();
  toggleButtonDisabled();
}

window.onresize = function() {
  toggleBannerText();
  toggleFindButton();
  togglePhoneIcon();
  toggleButtonDisabled();
}
