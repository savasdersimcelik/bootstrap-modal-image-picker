// Optional code

// Tile Picker Active Border
$(document).on("click", ".sdc-picker input", function(e) {
  $('.wall').find('.sdc-picker').removeClass("active");
  $(this).closest(".sdc-picker").addClass("active");
});

$(document).on("click", ".sdc-modal-image-select", function(e) {
  $('.wall').find('.active').each(function( index, element ) {
    $('.select-image-src').attr('src', $(element).data('src'));
    $('.select-image-id').val($(element).data('id'));
  });
  $('.wall').find('.sdc-picker').removeClass("active");
});

$(document).on("click", ".sdc-modal-cancel-select", function(e) {
  $('.wall').find('.sdc-picker').removeClass("active");
});