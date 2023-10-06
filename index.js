var hml = document.getElementById('element');

hml.addEventListener('mouseover', function() {
 hml.classList.add('hover');
});

hml.addEventListener('mouseout', function() {
 hml.classList.remove('hover');
});