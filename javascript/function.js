$('#carouselExample').on('slide.bs.carousel', function (event) {
    var $video = $(event.relatedTarget).find('video');
    if ($video.length) {
        $('video').each(function () {
            this.pause();
        });
    }
});
function toggleOverlay() {
    var overlay = document.getElementById('overlayContainer');
    var overlayClose = document.querySelector('.overlay-close');

    if (overlay.style.width === '90%') {
        overlay.style.width = '0';
        overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Transparent background
    } else {
        overlay.style.width = '90%';
        overlay.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Opaque white background
        overlayClose.style.display = 'block'; // Show the X icon
    }
}