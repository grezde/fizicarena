
var accountData = {};
var filledAccountData = false;

function getLocalData(name, fallback) {
    var value = localStorage.getItem(name);
    if(value != null)
        return value;
    localStorage.setItem(name, fallback);
    return fallback;
}

function getProblemData(path) {
    if(!contests) 
        return {
            path: path,
            contest: '???',
            year: '????',
            qnumber: '??',
            name: '????'
        };
    var obj = { path: path };
    path = path.split('.');  //path ~ ipho.2006.2
    obj.contest = contests[path[0]].displayName;
    var problemdata = contests[path[0]].data.values;
    for(var j=0; j<problemdata.length; j++)
        if(problemdata[j].year == path[1]) {
            problemdata = problemdata[j];
            break;
        }
    obj.year = path[1];
    obj.qnumber = 'Q'+(Number(path[2])+1);
    obj.name = problemdata.problems[path[2]].title;
    return obj;
}

function getData() {
    console.log(localStorage);
    if(filledAccountData)
        return accountData;

    filledAccountData = true;
    accountData.name = getLocalData('name', 'Anonim');
    accountData.solved = getLocalData('solved', 0);
    accountData.saved = [];
    accountData.notfin = [];
    var savedLen = getLocalData('saved.length', 0);
    for(var i=0; i<savedLen; i++)
        saved[i] = getProblemData(localStorage.getItem('saved.'+i));
    var notfinLen = getLocalData('notfin.length', 0);
    for(var i=0; i<notfinLen; i++)
        notfin[i] = getProblemData(localStorage.getItem('saved.'+i));

    return accountData;
}