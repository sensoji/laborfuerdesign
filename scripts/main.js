const navbar = document.getElementById('nav');

Rx.Observable.fromEvent(window, 'scroll')
  .subscribe(event => {
    if(window.scrollY > 100){
      navbar.classList.add('small');
    }else {
      navbar.classList.remove('small');
    }
  });

const newsItems = document.querySelectorAll('.news-item');

newsItems.forEach((item) => {
  item.children[1].innerHTML = item.children[1].innerHTML.slice(0,150)+'....';
});
