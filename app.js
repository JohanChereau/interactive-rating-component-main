const ratingForm = document.querySelector('.rating-card__form');
const cardDefaultState = document.querySelector('.rating-card--default-state');
const cardSubmittedState = document.querySelector(
  '.rating-card--submitted-state'
);
const ratingSent = document.querySelector('.rating-card__rating-sent');

ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const sentData = new FormData(ratingForm);

  if(!sentData.has('rating')) {
    return;
  }

  displaySubmittedCard(sentData.get('rating'));
});

function displaySubmittedCard(rating) {
  cardDefaultState.style.display = 'none';
  cardSubmittedState.style.display = 'block';

  ratingSent.textContent = `You selected ${rating} out of 5`;
  
  document.body.offsetHeight;
  cardSubmittedState.style.opacity = 1;
}
