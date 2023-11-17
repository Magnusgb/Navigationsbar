
  document.addEventListener('DOMContentLoaded', function () {
    var openButton = document.getElementById('open');
    var closeButton = document.getElementById('close');
    var menu = document.querySelector('.menu-open');

    openButton.addEventListener('click', function () {
      menu.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
      menu.style.display = 'none';
    });
  });

