function subscribe() {
    var email = document.getElementById("email").value;
    var messageElement = document.getElementById("message");

    if (email === "") {
        messageElement.textContent = "Please fill in the email.";
        
    } else {
        messageElement.textContent = "Your subscription was successful (" + email + ")";
        messageElement.style.color = "green"; 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('seeMoreBtn').addEventListener('click', function() {
        var hiddenFood = document.querySelector('.hiddenfood');
        var seeMoreBtn = document.querySelector('.see');
        var seeLessBtn = document.querySelector('#seeLessBtn'); 

        hiddenFood.style.display = "grid"; 
        seeMoreBtn.style.display = "none";
        seeLessBtn.style.display = "inline-block";
    });

    document.getElementById('seeLessBtn').addEventListener('click', function() {
        var hiddenFood = document.querySelector('.hiddenfood');
        var seeMoreBtn = document.querySelector('.see');
        var seeLessBtn = document.querySelector('#seeLessBtn');

        hiddenFood.style.display = "none";
        seeMoreBtn.style.display = "inline-block";
        seeLessBtn.style.display = "none";
    });
});
