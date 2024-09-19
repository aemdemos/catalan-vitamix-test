export default function decorate(block) {
  block.classList.add('columns');

  const columns = Array.from(block.querySelectorAll('.columns > div > div'));
  columns.forEach((columnDiv, index) => {
    columnDiv.classList.add(`column-${index + 1}`);
  });

  // Ensure block has three columns
  const column1 = document.createElement('div');
  const column2 = document.createElement('div');
  const column3 = document.createElement('div');

  column1.classList.add('column');
  column2.classList.add('column');
  column3.classList.add('column');

  column1.append(...columns[0].children);
  column2.append(...columns[1].children);
  column3.append(...columns[2].children);

  block.innerHTML = '';
  block.append(column1, column2, column3);
}
