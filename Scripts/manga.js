let mangaSectionHTML = ``;

mangaList.forEach((manga)=> {
  mangaSectionHTML += `
  <a class="element" href="${manga.url}">
  <img class="element-img" src="${manga.src}">
  <div class="element-title">
      ${manga.name}
  </div>
</a>
  `;
});

document.querySelector('.js-elements-section').innerHTML = '';
document.querySelector('.js-elements-section').innerHTML = mangaSectionHTML;
