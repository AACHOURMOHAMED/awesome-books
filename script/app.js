const add = document.querySelector('.add');
const title = document.querySelector('#title');
const author = document.querySelector('#Author');
const list = document.querySelector('#list');

add.addEventListener('click', () => {
  const Title = title.value;
  const Author = author.value;
  const lists = document.createElement('div');
  lists.classList.add('lists');
  list.appendChild(lists);
  const listsContentTitle = document.createElement('div');
  listsContentTitle.classList.add('lists-content' , 'Titlee');
  listsContentTitle.textContent = Title;
  lists.appendChild(listsContentTitle);
  const listsContentAuthor = document.createElement('div');
  listsContentAuthor.classList.add('lists-content', 'Áuthorr');
  listsContentAuthor.textContent = Author;
  lists.appendChild(listsContentAuthor);
  const remove = document.createElement('button');
  remove.classList.add('remove-btn');
  remove.textContent = 'remove';
  remove.type = 'button';
  lists.appendChild(remove);
  remove.addEventListener('click', () => {
    lists.parentNode.removeChild(lists);
  });
  const hr = document.createElement('hr');
  lists.appendChild(hr);
});

const lisTitle = document.querySelector('.Titlee');
const lisA = document.querySelector('.Áuthorr');


function handleChange() {
  const formData = {
    bookTitle: title.value, 
    bookAuthor: author.value
  };
  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  // const getFormValue = localStorage.getItem('form');
  lisTitle.innerHTML = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    lisTitle.textContent = formObject.bookTitle;
    lisA.textContent = formObject.bookAuthor;
  }
});

title.onchange = handleChange;
author.onchange = handleChange;




// const saveBookData = (title, author) => {
//   const bookData = {
//     bookTitle: title, 
//     bookAuthor: author
//   };
//   localStorage.setItem('bookData', JSON.stringify(bookData));
// };
// console.log(title.value);
// const getBookData = () => {
//   const bookData = JSON.parse(localStorage.getItem('bookData'));
//   if (bookData) {
//     title.value = bookData.bookTitle;
//     author.value = bookData.bookAuthor;
//   };
// };
// getBookData;

// saveBookData(title.value, author.value);

// const getFormData = () => {
//   const formData = JSON.parse(localStorage.getItem('formData'));
//   if (formData) {
//     clientName.value = formData.userName;
//     emailInfo.value = formData.userEmail;
//     clientMessage.value = formData.userMessage;
//   }
// };
// getFormData();


