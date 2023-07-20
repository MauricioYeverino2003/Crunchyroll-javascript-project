/* 

      <div class="selection">
        <a href="https://www.crunchyroll.com/es/series/GRMG8ZQZR/one-piece">
          <div class="selection-image-container">
            <img class="selection-image-selected" src="Images/Posters/one-piece-poster.jpg">
          </div>
        </a>
        <div class="selection-info">
          <div class="selection-title">
            One Piece
          </div>
          <div class="selection-lang-buttons">
            <div class="selection-lang">
              Subtitled
            </div>
            <div class="selection-buttons">
              <button class="selection-buttons-saved">
                <img class="selection-buttons-saved-img" src="Images/Home-buttons/saved-logo2.jpg">
              </button>
            </div>
          </div>
        </div>
      </div>

*/

let topSectionHTML = ``;

topPicks.forEach((anime) => {
  topSectionHTML += `
  <div class="selection">
  <a href="${anime.link}">
    <div class="selection-image-container">
      <img class="selection-image-selected" src="${anime.src}">
    </div>
  </a>
  <div class="selection-info">
    <div class="selection-title">
      ${anime.name}
    </div>
    <div class="selection-lang-buttons">
      <div class="selection-lang">
        ${anime.info}
      </div>
      <div class="selection-buttons">
        <button class="selection-buttons-saved">
          <img class="selection-buttons-saved-img" src="Images/Home-buttons/saved-logo2.jpg">
        </button>
      </div>
    </div>
  </div>
</div>
  `;
});

document.querySelector('.js-top-picks-section').innerHTML = '';
document.querySelector('.js-top-picks-section').innerHTML = topSectionHTML;
