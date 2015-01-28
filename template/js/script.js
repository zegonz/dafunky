$(document).ready(function(){
    //Mon panier
    $('#contenuPanier > li').hover(function() {
        if (obj) {
            obj.find('ul').slideUp('fast');
            obj = null;
        } //if

        $(this).find('ul').slideDown('fast');
    }, function() {
        obj = $(this);
        setTimeout(
            "checkHover()",
            0); // si vous souhaitez retarder la disparition, c'est ici
    });

    //Menu principal
    $('#menuAccueil li ul').hide();
    $('#menuAccueil ul li').hover(function(){
        // open current menu if it's closed
        $(this).find('a:first').addClass('parentHover');
        $('ul', this).slideDown(200);

    },
    function(){
         $('ul', this).slideUp(300);
         $(this).find('a:first').removeClass('parentHover');
    });

    //Menu mobile
    if (screen.width <= 800) {
        //on duplique le menu existant + ajout de class + déplacement dans la structure html
        var menuCopy = $('#menu').clone();
        $('#global').wrap('<div id="globalWrapper"></div>');
        menuCopy.removeAttr('id').removeClass('clearfix').addClass('menu-lateral');
        menuCopy.insertBefore('#global');

        //affichage du menu
        $('.btn-menu').click(function(event) {
            /* Act on the event */
            event.preventDefault();
            $('#globalWrapper').toggleClass('menu-open');
        });

        //masquage du menu sur click out menu déplié
        $(document).click(function(event) {
            if (!$(event.target).closest('.menu-lateral').length && !$(event.target).closest('.btn-menu').length) {
                console.log("ok");
                // if ($('#globalWrapper').hasClass('menu-open')) {
                    $('#globalWrapper').removeClass('menu-open');
              //}
            }
        });

    }

 });

//Init fonction panier
var obj = null;
function checkHover() {
    if (obj) {
        obj.find('ul').fadeOut('fast');
    } //if
} //checkHover
