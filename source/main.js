
var container, contestsContainer;
var iphoData, iphoText;

var showFilters=true;
function toggleFilters() {
    showFilters = !showFilters;
    document.getElementById('toggleFilters').innerHTML = showFilters ? 'Ascunde filtrele' : 'Arata filtrele';
    var els = document.getElementsByClassName('showOnFilters');
    for(var i=0; i<els.length; i++)
        els[i].style.display = showFilters ? 'initial' : 'none';
}

function selectAll(selected) {
    var checkboxes = document.getElementById('filters').children;
    for(var i=0; i<checkboxes.length; i++)
        checkboxes[i].children[0].checked = selected;
    rerender();
}

function rerender() {
    iphoData.jaanNotes = document.getElementById('showJaan').checked;
    iphoData.showTopics = document.getElementById('showTopics').checked;
    container.innerHTML = populate(iphoText, iphoData, null); 
    makeVisible();
}

function makeVisible() {
    var checkboxes = document.getElementById('filters').children;
    var filters = {};
    for(var i=0; i<checkboxes.length; i++) {
        filters['type_' + checkboxes[i].children[0].id] = checkboxes[i].children[0].checked;
    }
    
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
    contestsContainer = document.getElementById('contests_container');
    toggleFilters();
    getAll([[getJson, 'data/contests', 'data/ipho'], [getFile, 'templates/inter.tem', 'templates/selectContest.tem']], function(data) {
        
        contestsContainer.innerHTML = populate(data[1][1], data[0][0]);

        iphoText = data[1][0];
        iphoData = data[0][1];
        rerender();
        
    });

};


