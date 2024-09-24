document.getElementById('loading').style.display = 'none';
document.getElementById('sent-mess2').style.color = 'red';
document.getElementById('error-message').style.display = 'block';
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_196494s';
   const templateID = 'template_po03yhg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});