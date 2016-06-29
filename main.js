var files = [
  {title: 'Dropbox', amount: 42},
  {title: 'Skydrive', amount: 87},
  {title: 'FTP Server', amount: 366},
  {title: 'Dropbox', amount: 1},
  {title: 'Skydrive', amount: 10},
];

var mail = [
  {title: 'Work', amount: 12},
  {title: 'Mom', amount: 3},
  {title: 'The Band', amount: 7},
  {title: 'Wife', amount: 4},
];

var cloud = [
  {title: 'Connect', amount: 15},
  {title: 'Profiles', amount: 23},
  {title: 'Pictures', amount: 45},
  {title: 'Music', amount: 82},
  {title: 'Videos', amount: 4},
  {title: 'Documents', amount: 95},
];

var $sectionSelect = $('.filehead');
var $ol = ('<ol>wowwee</ol>');
console.log($sectionSelect);

$sectionSelect.click(function(e){
  $sectionSelect.removeClass('active');
  $(e.target).addClass('active');
  $(e.target).append($ol);


});
