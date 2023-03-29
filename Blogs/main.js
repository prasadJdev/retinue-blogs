/* Product.html -> JavaScript

* Tabs JavaScript 
*/
const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabsContent.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    target.classList.add('active');
  });
});



//Ck CKEDITOR4

CKEDITOR.replace( 'post_body' );





// NavBar Modal 
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.moda');
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modal = document.querySelectorAll('.moda.active');
  modal.forEach(modal => {
    closeModal(modal);
  });
});


function openModal(modal) {
  if (modal === null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// Adding File Preview 
const input_tag = document.querySelectorAll('.file_input');

input_tag.forEach(inputTag => {

  inputTag.addEventListener('change', function() {
    const file = this.files[0];
    const currentInputTag = this;
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', function() {
        const imgTag = $(inputTag).siblings('.upload_image');
        $(imgTag).attr("src", this.result);
      });
      reader.readAsDataURL(file);
    }
  });
});

//const img = input_tag.siblings().closest('img');
//console.log(img);