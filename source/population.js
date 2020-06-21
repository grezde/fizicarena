

function populate(text, obj) {
    console.log('POPULATING', text, obj);

    var result = '';
    var data = text.split('$');
    result += data.shift();
    data = data.map(function(dataEl) {
        var sep = dataEl.split(' ');
        var replname = sep.shift();
        var rest = ' ' + sep.join(' ');
        return [replname, rest];
    });
    console.log('OBTAINED', result, data);
    for(var i=0; i<data.length; i++) {
        
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

            result += data[i][1];
        }
        else if(data[i][0][0] == '?') {
            var ini = i;
            var exists = obj[data[i][0].slice(1)];
            i++;
            while(data[i][0] != data[ini][0])
                i++;
            
            var toBePopulated = data[ini][1];
            for(var j=ini+1; j<i; j++)
                toBePopulated += '$'+data[j][0]+data[j][1];

            if(exists)
                result += populate(toBePopulated, obj);
            result += data[i][1];
        }
        else
            result += obj[data[i][0]] + data[i][1];
        
    }
    console.log('FINISHED', result);
    return result;
}