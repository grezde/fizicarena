
var accountData = {};
var filledAccountData = false;

function getLocalData(name, fallback) {
    var value = localStorage.getItem(name);
    if(value != null)
        return value;
    localStorage.setItem(name, fallback);
    return fallback;
}

function getProblemObject(path) {
    path = path.split('_');
    var problemdata = contests[path[0]].data.values;
    var hasClass = contests[path[0]].hasClass;
    for(var j=0; j<problemdata.length; j++)
        if(problemdata[j].year == path[1]) {
            problemdata = problemdata[j];
            break;
        }
    
    if(!hasClass)
        return problemdata.problems[Number(path[2])-1];
    
    for(var j=0; j<problemdata.classes.length; j++)
        if(problemdata.classes[j].class == path[2]) {
            problemdata = problemdata.classes[j];
            break;
        }

    return problemdata.problems[Number(path[3])-1];
}

function getProblemData(path, date) {
    if(!contests) 
        return {
            path: path,
            contest: '???',
            year: '????',
            qnumber: '??',
            name: '????'
        };
    var obj = { path: path };
    path = path.split('_');
    obj.contest = contests[path[0]].displayName;
    obj.contestObj = contests[path[0]];
    var problemdata = contests[path[0]].data.values;
    var hasclass = contests[path[0]].hasClass;
    for(var j=0; j<problemdata.length; j++)
        if(problemdata[j].year == path[1]) {
            problemdata = problemdata[j];
            break;
        }
    obj.year = path[1];
    var letter = obj.contestObj.experimental === true ? 'E' : 'Q';
    if(hasclass) {
        for(var j=0; j<problemdata.classes.length; j++)
            if(problemdata.classes[j].class == path[2]) {
                problemdata = problemdata.classes[j];
                break;
            }
        obj.class = path[2] == 'baraj' ? 'Baraj' : 'Cls. ' + path[2];
        obj.qnumber = letter+path[3];
        problemdata = problemdata.problems[Number(path[3])-1];
    } else {
        obj.qnumber = letter+path[2];
        problemdata = problemdata.problems[Number(path[2])-1];
    }
    obj.name = problemdata.title;
    if(date) {
        obj.dateStr = date;
        date = date.split(/([0-9]+)/).filter(function(x) {
            if(x.length == 0)
                return false;
            return '0' <= x[0] && x[0] <= '9';
        });
        obj.date = new Date(date[0], date[1], date[2], date[3], date[4]);
        obj.yearContainer = path[0]+'_'+path[1];
    } 
    console.log(obj);
    return obj;
}

function getData() {
    if(filledAccountData)
        return accountData;

    filledAccountData = true;
    accountData.name = getLocalData('name', 'Anonim');
    accountData.solved = [];
    accountData.saved = [];
    accountData.notfin = [];
    var solvedLen = getLocalData('solved.length', 0);

    for(var i=0; i<solvedLen; i++) {
        accountData.solved[i] = getProblemData(localStorage.getItem('solved.'+i+'.path'), localStorage.getItem('solved.'+i+'.date'));
        getProblemObject(localStorage.getItem('solved.'+i+'.path')).state = 'solved';
    }
    var savedLen = getLocalData('saved.length', 0);
    for(var i=0; i<savedLen; i++) {
        accountData.saved[i] = getProblemData(localStorage.getItem('saved.'+i+'.path'), localStorage.getItem('saved.'+i+'.date'));
        getProblemObject(localStorage.getItem('saved.'+i+'.path')).state = 'saved';
    }
    var notfinLen = getLocalData('notfin.length', 0);
    for(var i=0; i<notfinLen; i++) {
        accountData.notfin[i] = getProblemData(localStorage.getItem('notfin.'+i+'.path'), localStorage.getItem('notfin.'+i+'.date'));
        getProblemObject(localStorage.getItem('notfin.'+i+'.path')).state = 'notfin';
    }

    return accountData;
}

function updateData(flag, path) {
    if(!filledAccountData)
        return;

    if(flag[0] != 'u') {
        var len = Number(localStorage.getItem(flag + '.length'));
        localStorage.setItem(flag+'.length', len+1);
        localStorage.setItem(flag+'.'+len+'.path', path);
        var now = new Date();
        var str = now.getFullYear() + '.' + now.getMonth() + '.' + now.getDay() 
            + ' ' + now.getHours() + ':' + now.getMinutes();
        localStorage.setItem(flag+'.'+len+'.date', str);

        accountData[flag].push(getProblemData(path, str));
        getProblemObject(path).state = flag;
    }
    else {
        flag = flag.slice(2);
        localStorage.setItem(flag+'.length', accountData[flag].length-1);
        var f = -1;
        for(var i=0; i<accountData[flag].length; i++)
            if(accountData[flag][i].path == path) {
                f = i;
                break;
            }
        if(f == -1)
            return;

        for(var i=f; i<len-1; i++) {
            localStorage.setItem(flag+'.'+i+'.path', localStorage.getItem(flag+'.'+(i+1)+'.path'));
            localStorage.setItem(flag+'.'+i+'.date', localStorage.getItem(flag+'.'+(i+1)+'.date'));
        }
        localStorage.removeItem(flag+'.'+Number(accountData[flag].length-1)+'.path');
        localStorage.removeItem(flag+'.'+Number(accountData[flag].length-1)+'.date');

        accountData[flag].splice(f, 1);
        delete getProblemObject(path).state;
    }
}

function changeState(path, original, final) {
    if(original != 'undefined')
        updateData('un'+original, path);
    if(final != 'un')
        updateData(final, path);

    rerender();
}

function nameChange() {
    var box = document.getElementById('nameBox');
    box.disabled = !box.disabled;
    document.getElementById('nameBtn').textContent = box.disabled ? 'Edit' : 'Gata';
    if(!box.disabled)
        box.focus();
    else {
        localStorage.setItem('name', box.value);
    }
}

var fade = {
    opacity: {},
    els: {},
    intervals: {},
    time: 4,
    fps: 60
};

function gotoProblem(year, path) {
    var problemData = getProblemData(path);
    var contest = year.split('_')[0], index;
    for(var i=0; i<contests.length; i++)
        if(contests[i].shortName == contest) {
            index = i;
            break;
        }
    rerender(index, problemData.contestObj.experimental === true ? 1 : 0);
    reselect(1);
    document.getElementById(year).scrollIntoView({
        behavior: 'smooth'
    });
    fade.opacity['problem_'+path] = 1;
    fade.els['problem_'+path] = document.getElementById('problem_'+path);
    fade.intervals['problem_'+path] = setInterval(fadeFunction, 1/fade.fps, 'problem_'+path);
}

function fadeFunction(id) {
    fade.opacity[id] -= 1/(fade.fps*fade.time);
    if(fade.opacity[id] < 0) {
        clearInterval(fade.intervals[id]);
    }
    var str = String(Math.round(255 * fade.opacity[id]));
    fade.els[id].style.backgroundColor = 'rgb(255, 255, 0,'+str+')';
}