$(document).ready(function() {
        $(window).scroll(function() {

                var st=$(this).scrollTop();

                if(st > 300) {
                    $(".ae-nav-container").addClass("sticky");
                }

                else {
                    $(".ae-nav-container").removeClass("sticky");
                }
            }

        );
    }

);