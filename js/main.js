$(document).ready(function() {
    $('a:not(:has(img))').addClass('link');
/*     $(".fancybox").attr('rel', 'gallery').fancybox({padding: 0}); */
    $(".pseudo-menu").sticky({topSpacing:0});
    $('a.smooth').smoothScroll({offset: - 50});
});