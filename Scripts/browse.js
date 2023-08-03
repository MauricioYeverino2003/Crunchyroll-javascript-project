let namesArray = listAllElements.map(Element => Element.name);
namesArray.sort();

console.log(namesArray);

let alphabetizedElements = namesArray.map((animeName) => {
  return listAllElements.find(element => animeName === element.name);
});

console.log(alphabetizedElements);

let browseSectionHTML = ``;
alphabetizedElements.forEach((anime) => {
  browseSectionHTML += `
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

document.querySelector('.js-browse-section').innerHTML = browseSectionHTML;

//Saved in list objects
savedPicks = JSON.parse(localStorage.getItem('savedPicks'));

document.querySelectorAll('.js-selection-buttons-saved').forEach((button) => {
  savedPicks.forEach((pick) => {
    if(pick.name === button.dataset.nameId){
      button.querySelector('img').src = 'Images/Home-buttons/saved-logo.jpg';
    }
  });
});

savedPicks = JSON.parse(localStorage.getItem('savedPicks'));

//Saved button
document.querySelectorAll('.js-selection-buttons-saved').forEach((button)=>{ button.addEventListener('click', () => {

  //extract id {name}
  const nameId = button.dataset.nameId;
  //Check if its already saved
  let isRepeated = false;

  savedPicks.forEach( (pick) => {
    if(nameId === pick.name){
      isRepeated = true;
    }
  });


  //if new element, set saved image and push element object to array
  if(!isRepeated){
    button.querySelector('img').src = 'Images/Home-buttons/saved-logo.jpg';
    //We locate element thorugh name id and add with find()
    let elementToAdd =  listAllElements.find((element) => element.name === nameId);
    savedPicks.push(elementToAdd);
  } 
  else { //else, set not saved image and drop from array
    button.querySelector('img').src = 'Images/Home-buttons/saved-logo2.jpg';
    //this is extra
    let newPicks = savedPicks.filter((pick) => {
      if(nameId !== pick.name){
        return pick
      }
    });
    savedPicks = newPicks;
  }
  localStorage.setItem('savedPicks', JSON.stringify(savedPicks));
  console.log(savedPicks);


});
});