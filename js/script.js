// implement buttons on index to highlight corresponding card
function wellnessHighlight(){
    document.getElementById('wellness').style.backgroundColor = 'rgba(155, 154, 109, 0.25)';
    document.getElementById('study').style.backgroundColor = '#ffffff';
    document.getElementById('food').style.backgroundColor = '#ffffff';
    if (document.getElementById('wellness-button').clicked != true){
        console.log('unclicked')
        document.getElementById('wellness-button').style.backgroundColor = '#FFCB05';
    }
}

function studyHighlight(){
    document.getElementById('study').style.backgroundColor = 'rgba(155, 154, 109, 0.25)';
    document.getElementById('wellness').style.backgroundColor = '#ffffff';
    document.getElementById('food').style.backgroundColor = '#ffffff';
    if (document.getElementById('study-button').clicked != true){
        console.log('unclicked')
        document.getElementById('study-button').style.backgroundColor = '#FFCB05';
    }
}

function foodHighlight(){
    document.getElementById('food').style.backgroundColor = 'rgba(155, 154, 109, 0.25)';
    document.getElementById('wellness').style.backgroundColor = '#ffffff';
    document.getElementById('study').style.backgroundColor = '#ffffff';
    if (document.getElementById('food-button').clicked != true){
        console.log('unclicked')
        document.getElementById('food-button').style.backgroundColor = '#FFCB05';
    }
}

// make cards navigate to corresponding pages
function goWellness() {
    document.location.href = 'caps.html'
}

function goStudy() {
    document.location.href = 'study_spaces.html'
}

function goFood() {
    document.location.href = 'food_pantry.html'
}

document.getElementById("year").innerHTML = new Date().getFullYear();

//add larger navigate to index click area
function navIndex() {
    document.location.href = 'index.html'
}