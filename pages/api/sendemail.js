/* import emailjs from '@emailjs/browser';

export default function handler(req, res){
  const templateParams = req.body
  emailjs.send("service_xfu58ct", "template_dzw112l", templateParams, "B-pMKcaNQZa-6otnF")
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      res.status(200).send("success")
    }, function(error) {
      console.log('FAILED...', error);
      res.status(404).send("failed to send email")
    });
} */