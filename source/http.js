
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
