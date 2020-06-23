
function separate(text) {
    var data = text.split('$');
    var first = data.shift();
    data = data.map(function(dataEl) {
        var size = dataEl.split(/[^a-zA-Z:?@=]/, 1)[0].length;
        var replname = dataEl.slice(0, size);
        var rest = dataEl.slice(size);
        return [replname, rest];
    });
    data.unshift(['', first]);
    return data;
}

function getValue(name, obj, context) {
    if(typeof obj == 'object' && name in obj)
        return obj[name];
    if(name in context)
        return context[name];
    return undefined;
}

function populate(text, obj, context) {

    if(context == null)
        context = obj;

    var result = '';
    var data = separate(text);
    result += data[0][1];

    for(var i=1; i<data.length; i++) {
        var ini=i, nextObj, toBePopulated='';
        if(':?!'.includes(data[i][0][0]) || data[i][0].includes('=')) {
            i++;
            while(data[i][0] != data[ini][0])
                i++;

            toBePopulated += data[ini][1];
            for(var j=ini+1; j<i; j++)
                toBePopulated += '$'+data[j][0]+data[j][1];

            nextObj = getValue(data[i][0].slice(1), obj, context);            
        }

        if(data[ini][0][0] == ':') {
            if(nextObj) {
                for(var j=0; j<nextObj.length; j++) {
                    if(typeof nextObj[j] == 'object')
                        nextObj[j].loopIndex = j;
                    result += populate(toBePopulated, nextObj[j], context);
                }
            }
        }
        else if(data[i][0][0] == '?') {
            if(nextObj)
                result += populate(toBePopulated, obj, context);
        }
        else if(data[i][0][0] == '!') {
            if(!nextObj)
                result += populate(toBePopulated, obj, context);
        }
        else if(data[i][0].includes('=')) {
            var values = data[i][0].split('=');
            var first, second = values[1];
            if(values[0] == '@')
                first = obj;
            else
                first = getValue(values[0], obj, context);
            if(first == second)
                result += populate(toBePopulated, obj, context);
        }
        else if(data[i][0] == '@')
            result += obj;
        else
            result += getValue(data[i][0], obj, context);
        result += data[i][1];
        
    }
    return result;
}

