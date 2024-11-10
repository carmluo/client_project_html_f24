// function for form submission taken from https://stackoverflow.com/questions/6799533/how-to-submit-a-form-with-javascript-by-clicking-a-link and then modified
// Additionally added a preventDefault to stop page from reloading upon submission
var form = document.getElementById("study-filter")

document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault()
    spaceType = document.getElementById('space-type').value
    lib = document.getElementById('library').value
    console.log(`space: ${spaceType} lib: ${lib}`)

    // new element for error finding results
    let notFound = document.createElement('p');
    notFound.classList.add('not-found');
    notFound.innerHTML = 'Unfortunately, there are no spaces that match your criteria 😔 Try a different search';

    // filter by each library and set display = none for all that do not match the user selected value
    if (lib == 'hatcher'){
        document.querySelectorAll('.shapiro, .art, .health, .music').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelectorAll('.hatcher').forEach(function(element){
            element.style.display = 'flex';
        });
        if (document.querySelector('.not-found') != null){
            document.querySelector('.not-found').remove();
        }
    }
    if (lib == 'shapiro'){
        document.querySelectorAll('.hatcher, .art, .health, .music').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelectorAll('.shapiro').forEach(function(element){
            element.style.display = 'flex';
        });
        if (document.querySelector('.not-found') != null){
            document.querySelector('.not-found').remove();
        }
    }
    if (lib == 'art'){
        document.querySelectorAll('.hatcher, .shapiro, .health, .music').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelectorAll('.art').forEach(function(element){
            element.style.display = 'flex';
        });
        if (document.querySelector('.not-found') != null){
            document.querySelector('.not-found').remove();
        }
    }
    if (lib == 'health'){
        document.querySelectorAll('.hatcher, .art, .shapiro, .music').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelectorAll('.health').forEach(function(element){
            element.style.display = 'flex';
        })
        if (spaceType == 'collaborative'){
            // add paragraph block for error prevention
            // first check that the notFound element does not already exist
            if (document.querySelector('.not-found') == null){
                document.querySelector('.collab-spaces').appendChild(notFound);
            }
        }
    }
    if (lib == 'music'){
        document.querySelectorAll('.hatcher, .art, .shapiro, .health').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelectorAll('.music').forEach(function(element){
            element.style.display = 'flex';
        })
        if (spaceType == 'collaborative'){
            // add paragraph block for error prevention
            // first check that the notFound element does not already exist
            if (document.querySelector('.not-found') == null){
                document.querySelector('.collab-spaces').appendChild(notFound);
            }
        }
    }

// filter by space type
    if(spaceType == 'quiet'){
        document.querySelectorAll('.collab-spaces, .reserved-spaces').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelector('.quiet-spaces').style.display = 'flex';
    }
    if (spaceType == 'collaborative') {
        document.querySelectorAll('.quiet-spaces, .reserved-spaces').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelector('.collab-spaces').style.display = 'flex';

    }
    if (spaceType == 'reserve') {
        document.querySelectorAll('.quiet-spaces, .collab-spaces').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelector('.reserved-spaces').style.display = 'flex'
    }
  });