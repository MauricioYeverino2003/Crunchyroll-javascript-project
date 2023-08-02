//html for background selection
let backgroundSelectionHTML = `
<div class="background-selection">
<div class="selection">
  <img class="selection-img" src="Images/hime-backgrounds/hime-background.jpg">
</div>
<button class="selection-button" data-src-link = "Images/hime-backgrounds/hime-background.jpg" >
  Select
</button>
</div>

<div class="background-selection">
<div class="selection">
  <img class="selection-img" src="Images/hime-backgrounds/hime-background-2.jpg">
</div>
<button class="selection-button" data-src-link = "Images/hime-backgrounds/hime-background-2.jpg" >
  Select
</button>
</div>

<div class="background-selection">
<div class="selection">
  <img class="selection-img" src="Images/hime-backgrounds/hime-background-3.jpg">
</div>
<button class="selection-button" data-src-link = "Images/hime-backgrounds/hime-background-3.jpg" >
  Select
</button>
</div>

<div class="background-selection">
<div class="selection">
  <img class="selection-img" src="Images/hime-backgrounds/hime-background-4.jpg">
</div>
<button class="selection-button" data-src-link = "Images/hime-backgrounds/hime-background-4.jpg" >
  Select
</button>
</div>
`
//opens menu of backgrounds to chose
document.querySelector('.hime-button').addEventListener( 'click', () => {
  document.querySelector('.backgrounds-selection-container').innerHTML = backgroundSelectionHTML;
  //change class of a div
  document.getElementById('profile-div').classList.remove('profile-body');
  document.getElementById('profile-div').classList.add('profile-body-2');


  //buttons of menu set image into background and menu hides agains
  document.querySelectorAll('.selection-button').forEach((button) => {
    button.addEventListener('click', () => {
      let newSrc = button.dataset.srcLink;
      document.querySelector('.hime-background').src = newSrc;
      document.querySelector('.backgrounds-selection-container').innerHTML = '';
      //change class of a div
      document.getElementById('profile-div').classList.remove('profile-body-2');
      document.getElementById('profile-div').classList.add('profile-body');
    });
  });
});