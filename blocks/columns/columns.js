export default function decorate(block) {
  // Apply the main columns class to the block
  block.classList.add('columns');

  // Apply the necessary classes to child elements
  const divs = block.querySelectorAll('div > div');
  divs.forEach((div, index) => {
    div.classList.add(`column-item-${index + 1}`);
  });

  // Apply classes to text and picture elements
  const textDiv = divs[0].querySelector('div');
  textDiv.classList.add('text-content');

  const pictureDivs = block.querySelectorAll('picture');
  pictureDivs.forEach((picture, index) => {
    picture.classList.add(`picture-item-${index + 1}`);
  });

  // Apply classes to paragraphs under picture elements
  const pictureParagraphs = block.querySelectorAll('div > div > p:last-child');
  pictureParagraphs.forEach((p, index) => {
    p.classList.add(`picture-caption-${index + 1}`);
  });
}
