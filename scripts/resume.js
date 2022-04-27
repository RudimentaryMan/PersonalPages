/** document ready event */
document.addEventListener('readystatechange', (event) => {
    event.preventDefault();
    if (document.readyState == 'complete'){
        DisplayEditDate();
    }
});

function DisplayEditDate(){
    var editDateTag = document.querySelector('#edit-date');
    var date = new Date().getFullYear();
    editDateTag.textContent = `Current as of ${date}`;
}