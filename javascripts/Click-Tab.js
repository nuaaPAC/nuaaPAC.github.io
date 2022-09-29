/* (function () {
  $(".tab_content").hide();
  $("ul.tabs li:first").addClass("active").show();
  $(".tab_content:first").show();
  $("ul.tabs li").click(function () {
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
})(); */

const as = document.querySelectorAll('h2.tab-title a');
const contents = document.querySelectorAll('.tabs-content');

for (let i = 0; i < as.length; i++) {
  as[i].addEventListener('click', () => {
    clear();
    contents[i].style.display = 'block';
  })
}


const clear = () => {
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
}

clear();
contents[0].style.display = 'block';

