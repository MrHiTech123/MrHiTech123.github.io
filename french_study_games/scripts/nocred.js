window.onload = function() {
  for (var i = 0; i < document.getElementsByTagName('div').length; i ++) {
    if (document.getElementsByTagName('div')[i].innerHTML == '<a title="Hosted on free web hosting 000webhost.com. Host your own website for FREE." target="_blank" href="https://www.000webhost.com/?utm_source=000webhostapp&amp;utm_campaign=000_logo&amp;utm_medium=website&amp;utm_content=footer_img"><img src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png" alt="www.000webhost.com"></a>') {
      document.getElementsByTagName('div')[i].innerHTML = '';
    }
  }
}
