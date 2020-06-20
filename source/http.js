
function getFile(url, cb) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200)
            cb(xhttp.responseText);
    };
    xhttp.open('GET', url, true);
    xhttp.send(null);
}

function getJson(url, cb) {
    getFile(url + '.json', function(text) {
        cb(JSON.parse(text));
    });
}

function parallel(func, data, cb) {
    var done = 0;
    for(var i=0; i<data.length; i++) {
        (function(p) {
            func(data[p], function(response) {
                done++;
                data[p] = response;
                if(done == data.length)
                    cb(data);
            });
        })(i);   
    }
}

//[function, params, ...]
function getAll(format, cb) {

    var resp = [];    
    var done = 0;
    for(var i=0; i<format.length; i++) {
        (function(p) {
            var func = format[p].shift();
            parallel(func, format[p], (response) => {
                done++;
                resp[p] = response;
                if(done == format.length)
                    cb(resp);
            });
        })(i);
    }

}

function populate(text, obj) {
    var result = '';
    var data = text.split('$');
    result += data.shift();
    data = data.map(function(dataEl) {
        var sep = dataEl.split(' ');
        var replname = sep.shift();
        var rest = ' ' + sep.join(' ');
        return [replname, rest];
    });
    console.log(data);
    for(var i=1; i<data.length; i++) {
        
        if(data[i][0][0] == ':') {
            var ini = i;
            var arrat = obj[data[i][0].slice(1)];
            i++;
            while(data[i][0] != data[ini][0])
                i++;
            
            var toBePopulated = data[ini][1];
            for(var j=ini+1; j<i; j++)
                toBePopulated += '$'+data[j][0]+data[j][1];

            for(var j=0; j<arrat.length; j++)
                result += populate(toBePopulated, arrat[j]);

        }
        else
            result += obj[data[i][0]] + data[i][1];
    }
    return result;
}