//Tools
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
};


var findObjectByLabel = function(obj, label) {
    if(obj.label === label) { return obj; }
    for(var i in obj) {
        if(obj.hasOwnProperty(i)){
            var foundLabel = findObjectByLabel(obj[i], label);
            if(foundLabel) { return foundLabel; }
        }
    }
    return null;
};

Object.prototype.findKey = function(keyObj) {
    var p, key, val, tRet;
    for (p in keyObj) {
        if (keyObj.hasOwnProperty(p)) {
            key = p;
            val = keyObj[p];
        }
    }

    for (p in this) {
        if (p == key) {
            if (this[p] == val) {
                return this;
            }
        } else if (this[p] instanceof Object) {
            if (this.hasOwnProperty(p)) {
                tRet = this[p].findKey(keyObj);
                if (tRet) { return tRet; }
            }
        }
    }

    return false;
};

//Clone objects.  Could be useful later.
// function clone(obj) {
//   if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
//     return obj;

//   if (obj instanceof Date)
//     var temp = new obj.constructor(); //or new Date(obj);
//   else
//     var temp = obj.constructor();

//   for (var key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       obj['isActiveClone'] = null;
//       temp[key] = clone(obj[key]);
//       delete obj['isActiveClone'];
//     }
//   }

//   return temp;
// }