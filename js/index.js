/* Marincas Alexandru | 2019 */

$(document).ready(function(){

    // ANCHOR LINKS SCROLL ANIMATION
    $("a.scrollLink").click(function(event){
            event.preventDefault();
            $("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        
    });


    // SHOW/HIDE MORE ABOUT US SECTION
    var read_about_us = false;
    $("#read_about_us").on("click", function(){
        if(read_about_us){
            $(this).html("Read more");
            $("#content_about_us").animate({"height": "350px"}, 1000);
            read_about_us = false;
        }else{
            $(this).html("Read less");
            $("#content_about_us").animate({"height": "880px"}, 1000);
            read_about_us = true;
        }
       
    });

    // VIEW LARGE DIPLOMA
    $(".diploma").on("click", function(){
        var index = $(this).index('.diploma');
        var src = $(this).attr('src');

        $("#diploma").attr("src", src);
        $("#diploma").addClass("large_img");
    });

    $("#diploma").on("click", function(){
        $(this).removeClass("large_img");
    });

    // GALLERY
    var lastGalleryIndex = 0;
    var galerieAutomata;

    $('.poza_galerie').eq(lastGalleryIndex).css({'opacity':1});

    function animateGallery(i){
        $('.poza_galerie').css({'opacity':0});
        $('.poza_galerie').eq(i).css({'opacity':1});

        $('.dot').attr('class', 'dot');
        $('.dot').eq(i).attr('class', 'dot highlighted');
    }

    $('#nav_left').on("click", function(){
        lastGalleryIndex--;

        if(lastGalleryIndex < 0){
            lastGalleryIndex = $(".poza_galerie").length - 1;
        }

        animateGallery(lastGalleryIndex);
        clearInterval(galerieAutomata);
        autoGallery();
    });

    $('#nav_right').on("click", function(){
        lastGalleryIndex++;

        if(lastGalleryIndex == $(".poza_galerie").length){
            lastGalleryIndex = 0;
        }

        animateGallery(lastGalleryIndex);
        clearInterval(galerieAutomata);
        autoGallery();
    });

    $('.dot').on("click", function(){
        lastGalleryIndex = $(this).index('.dot');
        animateGallery(lastGalleryIndex);
        clearInterval(galerieAutomata);
        autoGallery();
    });

    function autoGallery(){
        galerieAutomata = setInterval( function(){ 
            animateGallery(lastGalleryIndex); 
            lastGalleryIndex++; 
    
            if(lastGalleryIndex < 0){
                lastGalleryIndex = $(".poza_galerie").length - 1;
            }
            if(lastGalleryIndex == $(".poza_galerie").length){
                lastGalleryIndex = 0;
            }
        }, 5000 );
    }

    autoGallery();


    // LINKS
    var linksJob = [
        "https://www.bestjobs.eu/en/job/mecanic-intretinere-32",
        "https://www.bestjobs.eu/en/job/electrician-intretinere-29",
        "https://www.bestjobs.eu/en/job/reglor-cnc-6",
        "https://www.bestjobs.eu/en/job/responsabil-mentenanta-masini-de-turnare",
        "",
        "https://www.bestjobs.eu/en/job/topitor-stivuitorist"
    ];

    $('.job').on("click", function(){
        var i = $(this).index('.job');
        window.open(linksJob[i]);
        return false;
     });

    var socialMedia = [
        "https://www.facebook.com/CIEMatriconSA/",
        "https://twitter.com/CIEMatricon",
        "https://www.linkedin.com/company/cie-matricon/about/"
    ];

    $('.social_icon').on("click", function(){
        var i = $(this).index('.social_icon');
        window.open(socialMedia[i]);
        return false;
     });

     // ADDRESS
     $('.location').on("click", function(){
        window.open("https://www.google.com/maps/place/CIE+MATRICON+S.A./@46.5260823,24.5431675,15z/data=!4m5!3m4!1s0x0:0xb77001f4342e40cd!8m2!3d46.5260823!4d24.5431675");
        return false;
     });
     $('.address').on("click", function(){
        window.open("https://www.google.com/maps/place/CIE+MATRICON+S.A./@46.5260823,24.5431675,15z/data=!4m5!3m4!1s0x0:0xb77001f4342e40cd!8m2!3d46.5260823!4d24.5431675");
        return false;
     });

     
     $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 800) {
          $('#lite_menu').fadeIn();
        } else {
          $('#lite_menu').fadeOut();
        }
      });

});