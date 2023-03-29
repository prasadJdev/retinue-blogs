/* post.html -> JavaScript

* Tabs JavaScript 
*/
const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

function tabsSwitching() {
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(tab.dataset.tabTarget);
      tabsContent.forEach(tabContent => {
        tabContent.classList.remove('active');
      });
      target.classList.add('active');
    });
  });
}
tabsSwitching();



//Ck CKEDITOR4

CKEDITOR.replace( 'post_body' );

CKEDITOR.replace( 'post_shortDescription' );





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

// Post Submitting
$(document).ready(function() {
  $('#post_submit').click(function(e) {

    var postTitle = $('#post_title').val();
    var postSubTitle = $('#post_subTitle').val();
    var postCategory = $('#post_categorie').val();
    var postSubCategory = $('#post_subCategory').val();
    //var postBody =     $('#post_body').val();

    var postTags = $('#post_metaTags').val();
    var postKeywords = $('#post_keywords').val();

    var postBody = CKEDITOR.instances.post_body.getData();

    var postShortDescription = CKEDITOR.instances.post_shortDescription.getData();


    var overlay2 = document.getElementById('overlay2');

    overlay2.classList.add('active');

    function postSubmit() {

      $.ajax({
        url: 'addPost.php',
        type: 'POST',
        async: true,
        data: {
          'post_submit': 1,
          'postTitle': postTitle,
          'postSubTitle': postSubTitle,
          'postCategory': postCategory,
          'postSubCategory': postSubCategory,
          'postBody': postBody,
          'postShortDescription': postShortDescription,
          'postTags': postTags,
          'postKeywords': postKeywords
        },
        success: function(d) {
          overlay2.classList.remove('active');
          alert(d);
        }
      });
    }
    setTimeout(postSubmit, 200);
  });
});



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

        // Ajax 
        const up_btn = $(inputTag).siblings('.upload_btn');
        $(up_btn).click(function() {
          const formData = new FormData();
          var overlay2 = document.getElementById('overlay2');
          overlay2.classList.add('active');

          for (const fil of currentInputTag.files) {
            formData.append('myFiles[]', fil);
          }
          $.ajax({
            url: 'upload.php',
            type: 'POST',
            async: false,
            data: formData,
            processData: false,
            contentType: false,
            success: function(d) {
              overlay2.classList.remove('active');
              alert(d);
            }
          });
        });
      });
      reader.readAsDataURL(file);
    }
  });
});