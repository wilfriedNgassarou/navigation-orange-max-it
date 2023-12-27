// Recupération de la liste d'options (30jours, 7jours, 24heures) et 
// de la liste d'offres 
const bundleList = document.querySelector('.bundle-container ul') ;
const panorama = document.querySelector('.panorama') ;

// Recupération de la largeur d'une balise article
const bundleArticleComputedStyle = getComputedStyle(panorama.firstElementChild) ;
const bundleArticleWidth = parseFloat(
  bundleArticleComputedStyle.width 
)

bundleList.addEventListener('click', (e) => {
  if (e.target.tagName != 'SPAN') return ;
  
  const index = e.target.parentElement.dataset.index ;

  setActive(index, bundleList.children, panorama) ;
})

/**
 *Gestion de la classe active sur l'option sélectionnée
 * @param {Number} index 
 * @param {NodeList} children 
 * @param {HTMLElement} panorama 
 */
function setActive(index, children, panorama) {
  const currentActive = document.querySelector('.active');
  currentActive.classList.remove('active') ;

  children[index].classList.add('active') ;

  panorama.style.transform = `translateX(-${index * bundleArticleWidth}px)` ;
}
