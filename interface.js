var getVal = function () {
    var cricket = { name: document.getElementById('name').value,
        matches: parseInt(document.getElementById('match').value),
        runs: parseInt(document.getElementById('runs').value),
        hs: parseInt(document.getElementById('hs').value)
    };
    getInfo(cricket);
};
var getInfo = function (json) {
    console.log("Name :" + json.name);
    console.log("Matches :" + json.matches);
    console.log("Runs :" + json.runs);
    console.log("HS :" + json.hs);
};
