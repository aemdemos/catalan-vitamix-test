export default function decorate(block) {
  // Apply necessary classes
  block.classList.add('cards');

  const cards = block.querySelectorAll('.cards > div');

  cards.forEach((card) => {
    card.classList.add('card');

    const [imageWrapper, textWrapper] = card.children;
    imageWrapper.classList.add('card-image');
    textWrapper.classList.add('card-text');

    const [description, title, linkWrapper] = textWrapper.children;
    description.classList.add('card-description');
    title.classList.add('card-title');
    linkWrapper.classList.add('card-link-wrapper');

    const link = linkWrapper.querySelector('a');
    link.classList.add('card-link');
  });
}
