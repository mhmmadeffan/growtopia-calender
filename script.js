
var modal = document.getElementById("imageModal");


var img = document.getElementById("calendarImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var overlay = document.getElementById("overlay"); 
var body = document.body; 


function openCalendarModal() {
  modal.style.display = "flex"; 
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  overlay.classList.add("active"); 
  body.classList.add("modal-active"); 
}


img.onclick = openCalendarModal;


var span = document.getElementsByClassName("close")[0];


function close_modal() {
  modal.style.display = "none";
  overlay.classList.remove("active"); 
  body.classList.remove("modal-active"); 
}


span.onclick = function() {
  close_modal();
}


modal.onclick = function(event) {
    if (event.target === modal) {
        close_modal();
    }
}


var discordPopup = document.getElementById("discordPopup");
var closePopupButton = document.getElementById("closePopupButton");
var countdownElement = document.getElementById("countdown");
var popupTimeout; 

function showDiscordPopup() {
    discordPopup.style.display = "block";
    body.classList.add("discord-popup-active"); 

    
    img.onclick = null; 
    img.style.cursor = "default"; 
    

    startCountdown(9); 
}

function closeDiscordPopup() {
    discordPopup.style.display = "none";
    body.classList.remove("discord-popup-active"); 
    if (popupTimeout) {
        clearTimeout(popupTimeout); 
    }

    
    img.onclick = openCalendarModal; 
    img.style.cursor = "pointer"; 
    
}

function startCountdown(seconds) {
    let count = seconds;
    countdownElement.textContent = `Closes in ${count}s`;

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownElement.textContent = `Closes in ${count}s`;
        } else {
            clearInterval(countdownInterval);
            closeDiscordPopup();
        }
    }, 1000);

    
    popupTimeout = setTimeout(() => {
        clearInterval(countdownInterval); 
        closeDiscordPopup();
    }, seconds * 1000);
}


window.addEventListener('load', showDiscordPopup);


closePopupButton.onclick = function() {
    closeDiscordPopup();
}