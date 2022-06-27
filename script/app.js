const add = document.querySelector('.add');
const title = document.querySelector('#title');
const author = document.querySelector('#Author');
const Lists = document.querySelector('#list');

add.addEventListener('click', () => {
  const Title = title.value;
  const Author = author.value;
  const list = document.createElement('div');
  list.classList.add('list');
  Lists.appendChild(list);

  const listContentTitle = document.createElement('div');
  listContentTitle.classList.add('listContentTitle');
  listContentTitle.textContent = Title;
  list.appendChild(listContentTitle);

  const listContentAuthor = document.createElement('div');
  listContentAuthor.classList.add('listContentAuthor');
  listContentAuthor.textContent = Author;
  list.appendChild(listContentAuthor);
});

// const add = document.querySelector('.add');
// const title = document.querySelector('#title');
// const author = document.querySelector('#Author');
// const list = document.querySelector('#list');

// add.addEventListener('click', () => {
//   const Title = title.value;
//   const Author = author.value;
//   const lists = document.createElement('div');
//   lists.classList.add('lists');
//   list.appendChild(lists);
//   const listsContentTitle = document.createElement('div');
//   listsContentTitle.classList.add('lists-content');
//   listsContentTitle.textContent = Title;
//   lists.append(listsContentTitle);
//   const listsContentAuthor = document.createElement('div');
//   listsContentAuthor.classList.add('lists-content');
//   listsContentAuthor.textContent = Author;
//   lists.append(listsContentAuthor);
//   const remove = document.createElement('button');
//   remove.classList.add('remove-btn');
//   remove.textContent = 'remove';
//   lists.append(remove);
//   remove.addEventListener('click', () => {
//     lists.parentNode.removeChild(lists);
//   });
//   const hr = document.createElement('hr');
//   lists.appendChild(hr);
// });