var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Editor;
(function (Editor) {
    Editor[Editor["MARVEL"] = 0] = "MARVEL";
    Editor[Editor["DC"] = 1] = "DC";
})(Editor || (Editor = {}));
var SuperHero = (function () {
    function SuperHero(_name, _editor, creationYear) {
        this._name = _name;
        this._editor = _editor;
        this.creationYear = creationYear;
    }
    SuperHero.prototype.createMessage = function () {
        return " Hola soy  " + this._name + ", \n                 formo parte de " + Editor[this._editor] + ", \n                 y nac\u00ED en " + this.creationYear;
    };
    return SuperHero;
}());
var FlyingHero = (function (_super) {
    __extends(FlyingHero, _super);
    function FlyingHero(_name, _editor, creationYear, _fly) {
        var _this = _super.call(this, _name, _editor, creationYear) || this;
        _this._name = _name;
        _this._editor = _editor;
        _this._fly = _fly;
        _this._fly = _fly;
        return _this;
    }
    FlyingHero.prototype.flies = function (frase) {
        console.log("Estamos volando!");
    };
    Object.defineProperty(FlyingHero.prototype, "fly", {
        get: function () {
            return this._fly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlyingHero.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    FlyingHero.prototype.createMessage = function () {
        return " Hola soy  " + this.name + ", \n                 formo parte de " + Editor[this._editor] + ", \n                 nac\u00ED en " + this.creationYear + ",\n                 y ademas puedo volar";
    };
    return FlyingHero;
}(SuperHero));
var Superman = new SuperHero('Superman', Editor.DC, 1999);
var Batman = new FlyingHero('Batman', Editor.DC, 1999, true);
Batman.name = "Larry";
console.log("Batman", Batman.createMessage());
console.log("Batman", Superman.createMessage());
console.log("Batman name", Batman.name);
//# sourceMappingURL=object-oriented.js.map