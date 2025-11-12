
// init Isotope
$('#nav-content').isotope({
  // options
});
// filter items on button click
$('#nav-filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $('#nav-content').isotope({ filter: filterValue });
});

baguetteBox.run('#nav-content', {
  captions: true
});
