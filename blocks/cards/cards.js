export default function decorate(block) {
  // Add a new class to the block
  block.classList.add('cards');

  // Iterate over each card and apply necessary class
  block.querySelectorAll('.cards > div').forEach((card) => {
    card.classList.add('card');
    const imageContainer = card.querySelector('picture');
    const description = card.querySelector('p');
    const title = card.querySelector('h3');
    const link = card.querySelector('p a');

    imageContainer.classList.add('card-image');
    description.classList.add('card-description');
    title.classList.add('card-title');
    link.classList.add('card-link');
  });
}
