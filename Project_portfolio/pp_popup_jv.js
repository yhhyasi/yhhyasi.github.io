$(document).ready(function() {
    // Image container click event
    $(".image-container").click(function() {
        // Get the alt image source and video source
        var altImgSrc = $(this).data("alt-src");
        var videoSrc = $(this).data("video-src");
        var content = '';

        if (altImgSrc) {
            // Set the popup content with the alt image
            content = '<img src="' + altImgSrc + '" alt="Image">';
        } else if (videoSrc) {
            // Set the popup content with the video
            content = '<video controls><source src="' + videoSrc + '" type="video/mp4">Your browser does not support the video tag.</video>';
        }

        // Set the content and display the popup
        $("#popupContent").html(content);
        $("#popup").fadeIn();
    });

    // Close button click event
    $(".close-btn").click(function() {
        $("#popup").fadeOut();
    });

    // Close the popup when clicking outside the content area
    $(window).click(function(event) {
        if ($(event.target).is("#popup")) {
            $("#popup").fadeOut();
        }
    });
});
