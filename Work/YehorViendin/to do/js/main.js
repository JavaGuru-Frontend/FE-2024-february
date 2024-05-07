let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');


  // добавление вклбчение кнопки 
input.addEventListener('keyup', () => {
  if (input.value.trim() != 0){
    addBtn.classList.add('active')
  } else {
    addBtn.classList.remove('active')
  }

})

     // добавление новой задачи

// addBtn.addEventListener('click', () => {
//   if (input.value.trim() !==0) {
//     let newItem = document.createElement('div');
//     newItem.classList.add('item');
//     newItem.innerHTML = ` <p> ${input.value} </p>
//                 <div class="item-btn">
//                 <i class="fa-solid fa-pen"></i>
//                 <i class="fa-solid fa-xmark"></i>
//                 </div>
//             `

//             tasks.appendChild(newItem);
//             input.value = '';

//   } else {
//     alert('Пожалуйста,введите задачу')
//   }
// })

