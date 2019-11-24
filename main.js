(function() {

// Initialization

document
    .querySelectorAll('#products-widget .b-info_interactive')
    .forEach(
function(el) {
    el.addEventListener('click', onClickProductInfoBlock);
});

document.querySelector('.b-modal-area')
    .addEventListener('click', onClickModalBackground);
document.querySelector('.b-modal-area .b-modal-area__close')
    .addEventListener('click', closeModal);
document.querySelector('#confirmation-form')
    .addEventListener('submit', preventDefault);

// Declaration

function cleanNode(node)
{
    for (let i = 0; i < node.childNodes.length; ++i) {
        node.childNodes[i].remove();
    }
}

function preventDefault(event)
{
  event.preventDefault();
}

function closeModal()
{
    let modalArea = document.querySelector('.b-modal-area'),
        container = modalArea.querySelector('.b-modal-area__container');
    cleanNode(container);
    document.querySelector('.b-modal-area').classList.remove('b-modal-area_active');
    document.body.style.overflow = '';
}

function onClickProductInfoBlock(event)
{
    let infoBlockClone = event.currentTarget.cloneNode(true),
        modal = document.querySelector('.b-modal-area');
    infoBlockClone.classList.remove('b-info_interactive');
    modal.querySelector('.b-modal-area__container').append(infoBlockClone);
    modal.classList.add('b-modal-area_active');
    document.body.style.overflow = 'hidden';
}

function onClickModalBackground(event)
{
    let modalArea = document.querySelector('.b-modal-area'),
        container = modalArea.querySelector('.b-modal-area__container');
    if (event.target === document.querySelector('.b-modal-area')) {
        closeModal();
    }
}

})();