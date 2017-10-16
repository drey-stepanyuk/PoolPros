// container - "dealer-cards-container"
// card - "dealer-card"

var app = (function () {
    const url = "https://gist.githubusercontent.com/drey-stepanyuk/5920ed33192183822bc1be4c1344ef43/raw/6d0047008445b85e80577b6d70353a3d714f43dc/dealers.json";

    function initialize(){
        // fetch the json
        HttpRequest.PerformGetRequest(url)
        .then(renderData)
        // if valid, create cards
        // render

    }

    function renderData(json){
        let dealerContainer = document.getElementById('dealer-cards-container');

        let containerHtml = '';
        json.dealers.forEach(function(element) {
            containerHtml += `<div class="dealer-card">
              <h3>${element.data.name}</h3>
              <hr>
              <div class="dealer-phone">
                <img class="dealer-phone-icon" alt="phone">
                <p class="tap-to-call">Tap to call</p>
                <p class="phone-number">${element.data.phone1}</p>
              </div>
              <p class="click-instructions-card">Can't talk now? Click below to send an email.</p>
              <button type="button" class="contact-button" onClick="toggleModal()">
                <img src="images/email-icon.png" alt="email"> Contact this Pro
              </button>
              <p class="business-hours-header">Business Hours</p>
              <p class="business-hours-card">Weekdays ${element.data.weekHours.mon}</p>
              <p class="business-hours-card">Saturdays ${element.data.weekHours.sat}</p>
              <p class="business-hours-card">Sundays ${element.data.weekHours.sun}</p>
              <div class="installation-certs">
                ${toggleCertsFirstRow(element.data.certifications)}
                ${toggleCertsSecondRow(element.data.certifications)}
              </div>
            </div>
            </div>
            `;
        }, this);

        dealerContainer.innerHTML = containerHtml;
    }

    // Don't worry if you don't understand this, it's not part of Promises.
    // We are using the JavaScript Module Pattern to enable unit testing of
    // our functions.
    return {
        initialize: (initialize),
    };

})();

app.initialize();
