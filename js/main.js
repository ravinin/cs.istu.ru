$(document).ready(function() {
    $('a:not(:has(img))').addClass('link');
/*     $(".fancybox").attr('rel', 'gallery').fancybox({padding: 0}); */
    $(".pseudo-menu").sticky({topSpacing:0});
    $('a.smooth').smoothScroll({offset: - 50});


    //magic
    function getAnchorTop(element){
        var to = element.attr("href");
        var offset = 50;
        return $(to).offset().top - offset;
    }
    var anchors = $('a.pseudo[href^="#"]');
    function checkSectionSelected(scrolledTo){
        var upTo = 100,
            i;
        for (i = 0; i < anchors.length; i++) {
            var anchor = $(anchors[i]);
            var target = getAnchorTop(anchor);
            if (scrolledTo > target - upTo && scrolledTo < target + upTo) {
                anchors.removeClass("active");
                anchor.addClass("active", 1000);
            }
        }
    }
    checkSectionSelected($(window).scrollTop());
    $(window).scroll(function(e){
        checkSectionSelected($(window).scrollTop())
    });
});