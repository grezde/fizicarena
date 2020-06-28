
var showFilters=true;
function toggleFilters() {
    showFilters = !showFilters;
    document.getElementById('toggleFilters').innerHTML = showFilters ? 'Ascunde filtrele' : 'Arata filtrele';
    var els = document.getElementsByClassName('showOnFilters');
    for(var i=0; i<els.length; i++)
        els[i].style.display = showFilters ? 'initial' : 'none';
}

function selectAll(name, selected) {
    var checkboxes = document.getElementById(name+'Filters').children;
    for(var i=3; i<checkboxes.length; i++)
        checkboxes[i].children[0].checked = selected;
    rerender();
}

function makeVisible() {
    var filters = {};
    var checkboxes = document.getElementById('topicFilters').children;
    for(var i=3; i<checkboxes.length; i++) {
        filters['type_' + checkboxes[i].children[0].id] = checkboxes[i].children[0].checked;
    }
    checkboxes = document.getElementById('classFilters');

    var problems = document.getElementsByClassName('problem_container');
    for(var i=0; i<problems.length; i++)
        if(!Array.from(problems[i].classList).filter(function(className) {
                return className.startsWith('type_');
            }).reduce(function(folded, current) {
                return folded || filters[current];
            }, false))
            problems[i].style.display = 'none';
        else
            problems[i].style.display = 'initial';
            

    var sets = document.getElementsByClassName('problem_set_container');
    for(var i=0; i<sets.length; i++) {
        var toHide = true;
        var problems = sets[i].querySelectorAll('.problem_container');
        for(var j=0; j<problems.length; j++)
            if(problems[j].style.display == 'initial') {
                toHide = false;
                break;
            }

        if(toHide)
            sets[i].style.display = 'none';
        else
            sets[i].style = '';
    }
}

function setDarkTheme() {
    if(!document.getElementById('setDarkTheme').checked) {
        var lnk = document.getElementById('darkTheme');
        lnk.parentElement.removeChild(lnk);
    } else {
        var lnk = document.createElement('link');
        lnk.rel = 'stylesheet';
        lnk.type = 'text/css';
        lnk.href = 'style/dark.css';
        lnk.id = 'darkTheme';
        document.head.appendChild(lnk);
    }
}