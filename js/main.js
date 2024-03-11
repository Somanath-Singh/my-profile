/*======================== toogle icon navbar ====================== */

let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onclick =() =>{
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*======================== scroll section active ====================== */

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top< offset + height){
            navlinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*======================== sticky navbar ====================== */

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*======================== remove toggle icon and navbar ====================== */

    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*======================== scrolled js ====================== */

 ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
  });

    ScrollReveal().reveal('.home-container , .heading' ,{origin: 'top'});
    ScrollReveal().reveal('#home-img,.service-container,.portfolio-box,.contact form' ,{
        origin:'buttom'
    });
    ScrollReveal().reveal('.about-content, .about-img',{origin:'left'});
    ScrollReveal().reveal('.services-box,.home-contact h1',{origin:'right'});

    /*======================== typed js ====================== */

    const typed=new Typed('.multiple-text',{
        strings:['Java Developer','Web Developer','Frontend Developer'],
        typeSpeed:70,
        backSpeed:70,
        backDelay:1000,
        loop:true,
    })


    var tablinks=document.getElementsByClassName("title-links");
    var tabcontents=document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");

        document.getElementById(tabname).classList.add("active-tab");
    }
