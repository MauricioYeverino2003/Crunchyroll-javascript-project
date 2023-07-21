//injecting elements at top picks section

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
        <button class="selection-buttons-saved js-selection-buttons-saved" data-name-id = "${anime.name}">
          <img class="selection-buttons-saved-img" src="Images/Home-buttons/saved-logo2.jpg">
        </button>
      </div>
    </div>
  </div>
</div>
  `;
});
document.querySelector('.js-top-picks-section').innerHTML = topSectionHTML;

//Saved button
document.querySelectorAll('.js-selection-buttons-saved').forEach((button)=>{ button.addEventListener('click', () => {

    //extract id {name}
    const nameId = button.dataset.nameId;
    //Check if its already saved
    let isRepeated = false;
    savedPicks.forEach( (pick) => {
      if(nameId === pick){
        isRepeated = true;
      }
    });

    //if new element, set saved image and push to array
    if(!isRepeated){
      button.querySelector('img').src = 'Images/Home-buttons/saved-logo.jpg';
      savedPicks.push(nameId);
    } else { //else, set not saved image and drop from array
      button.querySelector('img').src = 'Images/Home-buttons/saved-logo2.jpg';
      let newPicks = savedPicks.filter((pick) => {
        if(nameId !== pick){
          return pick
        }
      });
      savedPicks = newPicks;
    }

    //knowing wtf is going on atm
    console.log(savedPicks)
  });
});