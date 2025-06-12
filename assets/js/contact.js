
let send = document.getElementById('sent-mess');
let error =document.getElementById('err-mess');

// Oculta inicialmente los mensajes de éxito y error
send.style.display = 'none';
error.style.display = 'none';

const btn = document.getElementById('button');
const form = document.getElementById('form');

 form.addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Sending...'; // Cambia el texto del botón mientras envía
   const serviceID = 'service_6rzmgza';
   const templateID = 'template_po03yhg';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
     // btn.value = 'Send Email';
      send.style.display = 'block';
      // Oculta el mensaje de éxito después de 5 segundos (5000 milisegundos)
      setTimeout(() => {
        send.style.display = 'none';
      }, 5000);

      form.reset();
    }, (err) => {
      error.style.display = 'block';
      setTimeout(() => {
        error.style.display = 'none';
      }, 5000);
     // alert(JSON.stringify(err));
     //  errorMessage.textContent = `Error: ${JSON.stringify(err)}`;  // Muestra el error en el mensaje
    });
});