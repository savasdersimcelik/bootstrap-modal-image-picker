// Optional code

// Tile Picker Active Border
$(document).on("click", ".tile-picker input", function(e) {
  $('.wall').find('.tile-picker').removeClass("active");
  $(this).closest(".tile-picker").addClass("active");
});

$(document).on("click", ".modal-image-select", function(e) {
  $('.wall').find('.active').each(function( index, element ) {
    $('.select-image-src').attr('src', $(element).data('src'));
    $('.select-image-id').val($(element).data('id'));
  });
  $('.wall').find('.tile-picker').removeClass("active");
});

$(document).on("click", ".modal-cancel-select", function(e) {
  $('.wall').find('.tile-picker').removeClass("active");
});