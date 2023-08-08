let latestNewsHTML = '';

latestNews.forEach((news)=>{
    let tagsHTML = '';
    news.tags.forEach((tag) => {
        tagsHTML += `
        <a href="${tag.link}" class="hyperlink">
        <div class="element-tags">
          ${tag.name}
        </div>
        </a>
        `;
    });

    latestNewsHTML += `
    <div class="latest-element">
              
    <div>
      <a class="hyperlink" href="${news.link}">
        <img class="element-img" src="${news.src}">
      </a>
    </div>

    <div class="element-tags-date">
        ${tagsHTML}
      <div class="element-date">
        ${news.date}
      </div>
    </div>
    <a class="hyperlink element-title" href="${news.link}" class="element-title">
      ${news.title}
    </a>
    <div class="element-author">
      ${news.author}
    </div>

  </div>
    `;
});

document.querySelector('.js-latest-content').innerHTML = latestNewsHTML;

let featuresNewsHTML = '';

featuresNews.forEach((news)=>{
    let tagsHTML = '';
    news.tags.forEach((tag) => {
        tagsHTML += `
        <a href="${tag.link}" class="hyperlink">
        <div class="element-tags-2">
          ${tag.name}
        </div>
        </a>
        `;
    });

    featuresNewsHTML += `
    <div class="latest-element">
              
    <div>
      <a class="hyperlink" href="${news.link}">
        <img class="element-img" src="${news.src}">
      </a>
    </div>

    <div class="element-tags-date">
        ${tagsHTML}
      <div class="element-date">
        ${news.date}
      </div>
    </div>
    <a class="hyperlink element-title" href="${news.link}" class="element-title">
      ${news.title}
    </a>
    <div class="element-author">
      ${news.author}
    </div>

  </div>
    `;
});

document.querySelector('.js-features-content').innerHTML = featuresNewsHTML;

let spotlightNewsHTML = '';

spotlightNews.forEach((news) => {

  let tagsHTML = '';
  news.tags.forEach((tag)=>{
    tagsHTML += `
      <a class="hyperlink" href="${tag.link}">
        <button>${tag.name}</button>
      </a>
    `;
  });

  spotlightNewsHTML += `

  <section class="spotlight-section" style="background-image: url(&quot;https://a.storyblok.com/f/178900/564x332/fe9fd54933/spotlight-background.png&quot;); background-size: cover;">
    <a href="${news.link}">
      <img src="${news.src}">
    </a>
    <div class="spotlight-info">
      <div class="spotlight-tags">
        ${tagsHTML}
      </div>
      <div class="spotlight-date">
        ${news.date}
      </div>
      <a class="hyperlink" href="${news.link}">
        <div class="spotlight-name">
          ${news.title}
        </div>
      </a>
      <div class="spotlight-author">
        ${news.author}
      </div>
    </div>
  </section>

  `;
});

document.querySelector('.spotlight-slider').innerHTML = spotlightNewsHTML;



const slider = document.querySelector('.spotlight-slider');
const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');
const radioParents =  document.querySelector('.controls ul');

var sectionIndex = 0;

function setIndex(){
  document.querySelector('.controls .selected').classList.remove('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -20 +'%)';
}

document.querySelectorAll('.controls li').forEach(function(radioButton, index){
  radioButton.addEventListener('click', () => {
      sectionIndex = index;
      setIndex();
      radioButton.classList.add('selected'); 
  });
});

leftArrow.addEventListener('click', () => {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 4;
  setIndex();
  radioParents.children[sectionIndex].classList.add('selected');
});

rightArrow.addEventListener('click', () => {
  sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 0;
  setIndex();
  radioParents.children[sectionIndex].classList.add('selected');
});