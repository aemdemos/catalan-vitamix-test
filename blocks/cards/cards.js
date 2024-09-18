export default function decorate(block) {
  // Add a class to the block
  block.classList.add('cards');

  // Get all card elements
  const cards = block.querySelectorAll(':scope > div');

  cards.forEach((card) => {
    card.classList.add('card');

    const imageWrapper = card.querySelector(':scope > div:nth-child(1)');
    const contentWrapper = card.querySelector(':scope > div:nth-child(2)');

    imageWrapper.classList.add('card-image');
    contentWrapper.classList.add('card-content');

    const description = contentWrapper.querySelector('p');
    const title = contentWrapper.querySelector('h3');
    const link = contentWrapper.querySelector('p > a');

    if (description) {
      description.classList.add('card-description');
    }

    if (title) {
      title.classList.add('card-title');
    }

    if (link) {
      link.classList.add('card-link');
    }
  });
}
