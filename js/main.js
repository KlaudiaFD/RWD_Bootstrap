document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('.navbar');

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow)



    // przegladarka najpierw zacznie wykonywac cały dokument HTM i dopiero po załadowaniu całej strony bedzie wykonywac DOMContentLoaded.
    //Po tym dajemy funkcję anonimowa.
    //Pobieramy nawigację querySelector.
    //dodajemy funkcję ktora bedzie sprawdzała ze jezeli zjedziemy do 300px ma dodac albo usunac klase shadow-bg
    // wywołujac window.addEventListener za kazdym razem mówimy przegladarce zeby sprawdzala funkcje scrolowania i wywoływała funkcje kiedy warunek jest true



    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });




    // to funkcja z jQuery i ta funkcja sprawia ze jak sie rozwinie menu to po kliknieciu w cos menu sie zwija. Bootstrap korzytsa z jquery dlatego działa wpisany kod.



    $('.team-carousel').slick({
        //setting-name: setting-value
        autoplay: true,
        autoplaySpeed: 3500,
        mobileFirst: true,    //-
        slidesToShow: 1,      //- te 3 wlasciwosci maja na celu robienie zgodne z zasada pierwszy mobile. i tu nam sie bedzie wyswietla po 1 slajdzie na malych ekranach
        slidesToScroll: 1,    //-
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }


        ]
    });

    //funkcja ze sklik'a do karuzeli , usunieta pierwsza linija z funkcja bo mamy ja na samej gorze, to samo z wyzej - tez usunieto funkcje bo jest na samej gorze 

});
