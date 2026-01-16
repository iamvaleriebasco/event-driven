const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const mainContent = document.querySelector('.main-content');

openBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  mainContent.classList.add('shifted');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  mainContent.classList.remove('shifted');
});