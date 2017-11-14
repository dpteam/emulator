new Blob([randomData], {type: "application/octet-stream"})
// 
var randomData = [];
// while randomData.length < 308
    var bytes = new Uint8Array(4);
    for (var i=4; i--; ) {
        bytes[i] = longRandomNumber & (255);
        longRandomNumber = longRandomNumber >> 8
    }
    randomData.push(bytes);

var blob = new Blob(randomData, {type: "application/octet-stream"});
var randomData = new Uint8Array(1232),
    count = 0;
// while count < randomData.length
    for (var i=4; i--; ) {
        randomData[count++] = longRandomNumber & (255);
        longRandomNumber = longRandomNumber >> 8
    }

var blob = new Blob([randomData], {type: "application/octet-stream"});
