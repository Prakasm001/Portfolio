window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const resume = document.getElementById("scroll-up-btn");

  setTimeout(function () {
    loader.classList.add("hidden");
    resume.classList.remove("hidden");
  }, 2000); // Delay in milliseconds (e.g., 2000 for 2 seconds)
});

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_0m2m6kd";
//   const templateID = "template_ptgln8b";

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("subject").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("Your message sent successfully!!");
//     })
//     .catch((err) => console.log(err));
// }

//<!-- <script src="https://smtpjs.com/v3/smtp.js">
//</script>
//<script>
//var btn = document.getElementById('btn');
//btn.addEventListener('click',function(e) {
//   e.preventDefefault()
//    var name = document.getElementById('name').value;
//    var email = document.getElementById('email').value;
//var subject = document.getElementById('subject').value;
//   var message = document.getElementById('message').value;
//   var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject' +
//subject + '<br/> message' + message;

//

//Email.send({
//  Host : "smtp.gmail.com",
//  Username : "navin60660@gmail.com",
//   Password : "mhkbbrtlflwrshpm",
//  To : 'navin60660@gmail.com',
//  From : email,
//   Subject : subject,
//   Body : body
//}).then(
// message => alert(message)
//);
//})
//</script> -->

//<!-- footer section start -->
