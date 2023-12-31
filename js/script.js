    /*==================== scroll sections axtive link ====================*/
    let menuIcon = document.querySelector('#menu-icon'); 
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    /*==================== scroll sections axtive link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
 
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when clicked navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

    /*==================== scroll reveal ====================*/
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    }); 

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /*==================== typed js ====================*/

    const typed = new Typed('.multiple-text', {
        strings: ['Fullstack Web Developer!','AutoCAD Drafter!'/*, 'Virtual Assistant!'*/],
        typeSpeed: 100,
        backSpeed: 100,
        backDeay: 1000,
        loop: true
    });


    /*==================== contact mail ====================*/

    // document.addEventListener('DOMContentLoaded', function () {
    //     const contactForm = document.getElementById('contactForm');
      
    //     contactForm.addEventListener('submit', function (event) {
    //       event.preventDefault();
      
    //       const fullName = document.getElementById('fullName').value;
    //       const emailAddress = document.getElementById('emailAddress').value;
    //       const mobileNumber = document.getElementById('mobileNumber').value;
    //       const emailSubject = document.getElementById('emailSubject').value;
    //       const message = document.getElementById('message').value;
      
    //       const subject = encodeURIComponent(emailSubject);
    //       const body = encodeURIComponent(
    //         `Full Name: ${fullName}%0AEmail Address: ${emailAddress}%0AMobile Number: ${mobileNumber}%0AMessage: ${message}`
    //       );
      
    //       window.location.href = `mailto:adlaon.johnpaul@gmail.com?subject=${subject}&body=${body}`;
    //     });
    //   });
      

    /*==================== EmailJs ====================*/
    
    // function SendMail() {
    //     var params = {
    //         from_name : document.getElementById("fullName").value,
    //         email_id : document.getElementById("email_id").value,
    //         mobile_number : document.getElementById("mobile_number").value,
    //         subject : document.getElementById("subject").value,
    //         message : document.getElementById("message").value,
    //     }
    //     emailjs.send("service_6uw9ax9", "template_qal9849", params).then(function(res) {
    //         alert("Success " + res.status);
    //     })
    // }
    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contactForm');
      
        contactForm.addEventListener('submit', function (event) {
          event.preventDefault();
      
          const fullName = document.getElementById('fullName').value;
          const emailId = document.getElementById('email_id').value;
          const mobileNumber = document.getElementById('mobile_number').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;
      
          // Prepare the parameters for EmailJS
          const emailParams = {
            from_name: fullName,
            email_id: emailId,
            mobile_number: mobileNumber,
            subject: subject,
            message: message,
          };
      
          // Send email using EmailJS
          emailjs.send("service_6uw9ax9", "template_qal9849", emailParams)
            .then(function (response) {
              alert("Message Submitted!");
            }, function (error) {
              alert("An error occurred. Please try again later.");
            });
        });
      });
      

