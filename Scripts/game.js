let gamesSectionHTML = ``;
gameList.forEach((game) => {
  gamesSectionHTML += `
  <div class="element">
    <a href="${game.link}">
      <div class="element-img-container">
        <img class="element-img" src="${game.src}">
      </div>
    </a>
    <div class="element-title">
      ${game.name}
    </div>
    <a href="${game.link}">
      <button class="game-button">
        LEARN MORE
      </button>
    </a>
  </div>
  `;
});

document.querySelector('.game-elements').innerHTML = '';
document.querySelector('.game-elements').innerHTML = gamesSectionHTML;