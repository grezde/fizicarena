
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
    checkboxes = document.getElementById('classFilters').children;
    for(var i=3; i<checkboxes.length; i++)
        filters[checkboxes[i].children[0].id] = checkboxes[i].children[0].checked;
    console.log(filters);

    var problems = document.getElementsByClassName('problem_container');
    for(var i=0; i<problems.length; i++) {
        var hasType = Array.from(problems[i].classList).filter(function(className) {
            return className.startsWith('type_');
        }).reduce(function(folded, current) {
            return folded || filters[current];
        }, false); 
        var hasClass = Array.from(problems[i].classList).filter(function(className) {
            return className.startsWith('class_');
        }).reduce(function(folded, current) {
            return folded || filters[current];
        }, false);
        if(!contests[selected].hasClass)
            hasClass = true;
        if(hasType && hasClass)
            problems[i].style.display = 'initial';
        else
            problems[i].style.display = 'none';    
        
    }

    var curcor = 'problem_container';
    while(true) {
        console.log(curcor.insert(7, '_set'));
        var sets = document.getElementsByClassName(curcor.insert(7, '_set'));
        if(sets.length == 0)
            break;
        for(var i=0; i<sets.length; i++) {
            var problems = sets[i].querySelectorAll('.' + curcor);
            var toHide = true;
            for(var j=0; j<problems.length; j++)
                if(problems[j].style.display != 'none') {
                    toHide = false;
                    break;
                }

            if(toHide)
                sets[i].style.display = 'none';
            else
                sets[i].style = '';
        }
        curcor = curcor.insert(7, '_set');
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