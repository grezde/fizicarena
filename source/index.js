
var container;
var iphoData, iphoText;

function rerender() {
    iphoData.jaanNotes = document.getElementById('showJaan').checked;
    container.innerHTML = populate(iphoText, iphoData, null); 
    console.log(container.innerHTML);
    makeVisible();
}

function makeVisible() {
    var checkboxes = document.getElementById('filters').children;
    var filters = {};
    for(var i=0; i<checkboxes.length; i++) {
        filters['type_' + checkboxes[i].children[0].id] = checkboxes[i].children[0].checked;
    }
    
    console.log(filters);

    var problems = document.getElementsByClassName('problem_container');
    for(var i=0; i<problems.length; i++)
        if(!Array.from(problems[i].classList).filter(function(className) {
            return className.startsWith('type_');
        }).reduce(function(folded, current) {
            return folded || filters[current];
        }, false))
            problems[i].style.visibility = 'hidden';
        else
            problems[i].style.visibility = 'visible';
}

window.onload = function() {

    container = document.getElementById('all_problems');
    getAll([[getJson, 'data/files', 'data/ipho'], [getFile, 'templates/ipho_year.tem']], function(data) {
        
        iphoText = data[1][0];
        iphoData = data[0][1];
        rerender();
    });

};


