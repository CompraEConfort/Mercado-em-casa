var btn = document.getElementById('acc-or');
var container = document.querySelector('.col-lg-8');
btn.addEventListener('click', function() {
    
  if(container.style.visibility === 'visible') {
      container.style.visibility = 'hidden';
      
  } else {
      container.style.visibility = 'visible';
  }
});

