
var container, contestsContainer;
var iphoData, iphoText;
var contests;
var classFiltersEl, filtersEl;

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

function rerender() {
    var selected;
    for(var i=0; i<contests.length; i++)
        if(Array.from(contests[i].element.parentNode.classList).includes('active')) {
            selected = i;
            break;
        }
   
    if(contests[selected].hasClass)
        document.getElementById('classFilters').style.display = 'initial'; 
    else 
        document.getElementById('classFilters').style.display = 'none'; 
        

    document.getElementById('longName').textContent = '(' + contests[selected].longName + ')';
    contests[selected].data.jaanNotes = document.getElementById('showJaan').checked;
    contests[selected].data.showTopics = document.getElementById('showTopics').checked;
    container.innerHTML = populate(contests[selected].template, contests[selected].data, null); 
    makeVisible();
}

function makeVisible() {
    var checkboxes = document.getElementById('topicFilters').children;
    var filters = {};
    for(var i=3; i<checkboxes.length; i++) {
        filters['type_' + checkboxes[i].children[0].id] = checkboxes[i].children[0].checked;
    }
    
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

window.onload = function() {

    container = document.getElementById('all_problems');
    contestsContainer = document.getElementById('contests_container');
    classFiltersEl = document.getElementById('classFilters');
    filtersEl = document.getElementById('filters');
    toggleFilters();

    getAll([[getJson, 'data/contests'], [getFile, 'templates/selectContest.tem']], function(data) {
        contests = data[0][0].contests;
        contestsContainer.innerHTML = populate(data[1][0], data[0][0]);
        for(var i=0; i<contests.length; i++)
            contests[i].element = document.getElementById('contest'+i);
        console.log(contests);
        var jsonArray = [getJson];
        var temArray = [getFile], temMap=[];
        for(var i=0; i<contests.length; i++) {
            var tempStr = 'templates/'+contests[i].template+'.tem';
            jsonArray.push('data/'+contests[i].data);
            
            if(temArray.includes(tempStr))
                temMap.push(temArray.indexOf(tempStr)-1);
            else {
                temMap.push(temArray.length-1);
                temArray.push(tempStr);
            }
        }
        getAll([jsonArray, temArray], function(data) {
            for(var i=0; i<contests.length; i++) {
                contests[i].data = data[0][i];
                contests[i].template = data[1][temMap[i]];
            }
            rerender();
        });
    })

};


