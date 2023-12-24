$(document).ready(function() {
    function parallax_height() {
        var scroll_top = $(this).scrollTop();
        var sample_section_top = $(".sample-section").offset().top;
        var header_height = $(".sample-header-section").outerHeight();
        $(".sample-section").css({ "margin-top": header_height });
        $(".sample-header").css({ height: header_height - scroll_top });
    }
    parallax_height();
    $(window).scroll(function() {
        parallax_height();
    });
    $(window).resize(function() {
        parallax_height();
    });
});
    // $(document).ready(function() {
    //     function parallax_height() {
    //         var scroll_top = $(this).scrollTop();
    //         var sample_section_top = $(".sample-section").offset().top;
    //         var header_height = $("header").outerHeight(); // Use the actual header height
    //         $(".sample-section").css({ "margin-top": header_height });

    //         // Only adjust the header height if the page is not being scrolled
    //         if (scroll_top === 0) {
    //             $(".sample-header").css({ height: header_height });
    //         }
    //     }
    //     parallax_height();
    //     $(window).scroll(function() {
    //         parallax_height();
    //     });
    //     $(window).resize(function() {
    //         parallax_height();
    //     });
    // });