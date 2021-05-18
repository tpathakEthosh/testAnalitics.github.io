$(function() {
    
    var body = $('body');
    var navbar = $('.navbar');
    var navbarCollapse = $('.navbar-collapse');



    // Add the needed HTML elements for the plugin to work. 
    // All the elements are styled in navbar-sidemnu.css.
    
    body.append('<div class="side-menu-overlay"></div>');
    var overlay = $('.side-menu-overlay');

    // body.append('<div id="side-menu"><img id="menu-logo" src="assets/img/Group 1911.png" alt=""><div id="back"><div></div>');
    body.append('<div id="side-menu"><img id="menu-logo" src="assets/img/Thermofisher Logo.svg" alt=""><div id="back"><div></div>');
    var sideMenu = $('#side-menu');

    sideMenu.append('<button class="close"><span aria-hidden="true">×</span></button>')
    var sideMenuCloseBtn = sideMenu.find('.close');

    sideMenu.append('<div class="contents"></div>')
    var sideMenuContents = sideMenu.find('.contents');



    // Configure Slide menu direction
    if(navbar.hasClass('better-bootstrap-nav-left')) {
        sideMenu.addClass('side-menu-left');
    }


    // This event is trigerred when the user clicks the navbar toggle button.

    navbarCollapse.on('show.bs.collapse', function (e) {
        // Stop the default navbar behaviour (don't open the collapse navigation).
        e.preventDefault();

        // Instead we copy the navbar contents and add them to our side menu.
        var menuContent = $(this).html();    
        sideMenuContents.html(menuContent);
        
        // Animate the side menu into frame.
        slideIn();
    });


    // Hide the menu when the "x" button is clicked.
    
    sideMenuCloseBtn.on('click', function(e) {
        e.preventDefault();
        slideOut();
    });

    // Hide the menu when the overlay element is clicked.
    
    overlay.on('click', function(e) {
        slideOut();
    });

    // Listen for changes in the viewport size.
    // If the original navbar collapse is visible then the nav is expanded.
    // Hide/Show the menu accordingly.
    
    $(window).resize(function(){
        if(!navbarCollapse.is(":visible") && body.hasClass('side-menu-visible')) {
            sideMenu.show();
            overlay.show();
        }
        else {
            sideMenu.hide();
            overlay.hide();
        }
    });
    
    function slideIn() {
        body.addClass('overflow-hidden');
        sideMenu.show();
        setTimeout(function() {    
            body.addClass('side-menu-visible');
            overlay.fadeIn();
        }, 50);
    }
    
    function slideOut() {
        body.removeClass('side-menu-visible');
        overlay.fadeOut();
        setTimeout(function() {
            sideMenu.hide();
            body.removeClass('overflow-hidden');
        }, 400);
    }
});

document.getElementById('restart_btn').addEventListener('click',function() {
    var r = confirm("Are you sure you want to restart the experience?");
    if (r == true) {
        window.location.href = "https://demo.ethosh.net/NitrosamineDemoAll/Main/Thermo_Nitrosomaine_26th_Feb_2020.html";
    }
    else{}
});

document.getElementById("button_overview").addEventListener('mouseover',function(){
    this.style.height="43px";
    this.style.borderBottom="2px solid rgb(255, 143, 143)";
});

document.getElementById("button_overview").addEventListener('mouseout',function(){
    this.style.height="50px";
    this.style.borderBottom="none";
});

document.getElementById("button_SamplePrepAndDetec").addEventListener('mouseover',function(){
    this.style.height="43px";
    this.style.borderBottom="2px solid rgb(255, 143, 143)";
});

document.getElementById("button_SamplePrepAndDetec").addEventListener('mouseout',function(){
    this.style.height="50px";
    this.style.borderBottom="none";
});

document.getElementById("button_DataAnalysis").addEventListener('mouseover',function(){
    this.style.height="43px";
    this.style.borderBottom="2px solid rgb(255, 143, 143)";
});

document.getElementById("button_DataAnalysis").addEventListener('mouseout',function(){
    this.style.height="50px";
    this.style.borderBottom="none";
});

document.getElementById("home").addEventListener('mouseover',function(){
    this.style.cursor="pointer";
    this.style.opacity="0.6";
});

document.getElementById("home").addEventListener('mouseout',function(){
    this.style.opacity="1";
});

document.getElementById("begin_btn").addEventListener('mouseover',function(){
    this.style.color= "#e71316";
    this.style.backgroundColor= "#ffffff";
    this.style.border= "1px solid #e71316";
});

document.getElementById("begin_btn").addEventListener('mouseout',function(){
    this.style.color= "#FFFFFF";
    this.style.backgroundColor= "#e71316";
    this.style.border= "1px solid #ec5252";
});
 
