var fullInfo =

{files: [
  {title: 'Dropbox', amt: 42},
  {title: 'Skydrive', amt: 87},
  {title: 'FTP Server', amt: 366},
  {title: 'Dropbox', amt: 1},
  {title: 'Skydrive', amt: 10},
] ,

mail: [
  {title: 'Work', amt: 12},
  {title: 'Mom', amt: 3},
  {title: 'The Band', amt: 7},
  {title: 'Wife', amt: 4},
] ,

cloud: [
  {title: 'Connect', amt: 15},
  {title: 'Profiles', amt: 23},
  {title: 'Pictures', amt: 45},
  {title: 'Music', amt: 82},
  {title: 'Videos', amt: 4},
  {title: 'Documents', amt: 95},
] };
console.log(fullInfo);
var alreadyOpen = {files: 0, mail: 0, cloud: 0};
var $sectionSelect = $('.filehead');
var $ol = ('<ol class="openMenu"></ol>');
// console.log($sectionSelect);

$sectionSelect.click(function(e){
  $sectionSelect.removeClass('active');
  $(this).addClass('active');
  var titler = String(e.target.id);
  var menuSpot = '#' + titler + 'Menu';
  console.log(menuSpot);
  if (alreadyOpen[titler] === 0) {
    // $(this).append($ol);
    console.log(titler);
    console.log(fullInfo[titler]);
      for (var i = 0; i < fullInfo[titler].length; i++) {
        var liName = fullInfo[titler][i].title;
        var liAmt = fullInfo[titler][i].amt;
        var $li = $('<li>' + liName + '</li><div class="counter">' + liAmt + '</div>');
        $(menuSpot).append($li);
      }
  alreadyOpen[titler] = 1;
  } else {
    document.querySelector(menuSpot).innerHTML = '';
    alreadyOpen[titler] = 0;
  }
});
