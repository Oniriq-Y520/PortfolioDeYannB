
 /*   //sent mail with ajax
    $('#send_email').click(function(e){
		e.preventDefault();
		var data = {
			email: $('#email').val(),
			name: $('#name').val(),
			objet: $('#firstname').val(),
			message: $('#message').val()
        };
        //AJAX
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});
					$('#email').val("");
					$('#name').val("");
					$('#object').val("");
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#email').val("");
					$('#name').val("");
					$('#object').val("");
					$('#message').val("")
				}, 3000);
			}
		});
	});
});*/

/*const parallax = document.querySelector('.banner .banner-image');

window.addEventListener('sroll',() => {
    banner.banner.image.style.backgroundPositionY = -window.scrollY / 2 + "px";
}); */


/*document.getElementsByClassName("footer-contact-form").addEventListener("submit", funtion(){

	var name = document.getElementById("name");
	var firstname = document.getElementById("firstname");
	var email = document.getElementById("email");
	var message = document.getElementById("message");

	if (!name.value) {
		erreur = "veuillez renseigner un nom"
	}
	if (!firstname.value) {
		erreur = "veuillez renseigner un prénom"
	}
	if (!email.value) {
		erreur = "veuillez renseigner un email"
	}
	if (!message.value) {
		erreur = "veuillez renseigner un message"
	}

	if(erreur) {
		document.getElementById("erreur").innerHTML= erreur;
	}else {
		alert("Formulaire envoyé !")
	}

	alert("Formulaire envoyé !");
}) */