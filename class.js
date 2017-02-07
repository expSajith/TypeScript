var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Cricket = (function () {
    function Cricket(data) {
        this.name = data.name;
        this.matches = data.matches;
        this.runs = data.runs;
        this.lastScores = data.lastScores;
    }
    Cricket.prototype.display = function () {
        console.log("Name :", this.name);
        console.log("Matches :", this.matches);
        console.log("runs :", this.runs);
        console.log("lastScores :", this.lastScores);
    };
    return Cricket;
}());
var bowler = (function (_super) {
    __extends(bowler, _super);
    function bowler(data) {
        var _this = _super.call(this, data) || this;
        _this.name = data.name;
        _this.matches = data.matches;
        _this.runs = data.runs;
        _this.wickets = data.wickets;
        return _this;
    }
    bowler.prototype.displayBowler = function () {
        console.log("Wickets :", this.wickets);
    };
    return bowler;
}(Cricket));
var obj = { name: "sachin", matches: 464, runs: 16888, lastScores: [168, 24, 71] };
var c = new Cricket(obj);
var ob = { name: "Lee", matches: 212, runs: 1888, lastScores: [8, 24, 11], wickets: 330 };
var d = new bowler(ob);
c.display();
d.display();
d.displayBowler();
