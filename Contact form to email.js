function emailSend(){


	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;


	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dzagoev4991@yandex.com",
        Password : "E7EAE4B930BAAEA35D2072F9BC0316191254",

        To : "dzagoev4991@gmail.com",
        From : "dzagoev4991@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
