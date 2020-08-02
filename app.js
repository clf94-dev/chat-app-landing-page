const message = document.querySelectorAll('.fade-in');

message.forEach((el, index) => {
    el.style.animation = `fadeIn 1s ease forwards ${index/2+1}s`;
});