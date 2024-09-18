export default function decorate(block) {
  // Add the main class to the block
  block.classList.add('cards');

  // Select all card elements within the block
  const cards = block.querySelectorAll('.cards > div');

  // Iterate over each card
  cards.forEach((card) => {
    // Add classes to the card and its children
    card.classList.add('card');
    const imgContainer = card.querySelector('picture');
    const description = card.querySelector('p:first-of-type');
    const title = card.querySelector('h3');
    const linkContainer = card.querySelector('p:last-of-type');

    imgContainer.classList.add('card-image');
    description.classList.add('card-description');
    title.classList.add('card-title');
    linkContainer.classList.add('card-link-container');

    // Style the link
    const link = linkContainer.querySelector('a');
    link.classList.add('card-link');
  });
}
