/* VIDEOS*/

$(document).ready(function() {
  $('.video').each(function(i, obj) {
    $(this).on("mouseover", function() { hoverVideo(i); });
    $(this).on("mouseout", function() { hideVideo(i); });
  });
});

function hoverVideo(i) {
  $('.thevideo')[i].play();
}

function hideVideo(i) {
  $('.thevideo')[i].pause();
}
