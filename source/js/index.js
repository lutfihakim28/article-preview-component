const btn = document.querySelector('.share-button')
const author = document.querySelector('.author');
const share = document.querySelector('.share-menu');
const icon = document.querySelector('.icon');

btn.onclick = () => {
  author.classList.toggle('visible');
  share.classList.toggle('visible');
  btn.classList.toggle('down-invert');
  icon.classList.toggle('invert');
}