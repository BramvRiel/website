"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Location;
(function (Location) {
    Location[Location["About"] = 1] = "About";
    Location[Location["Blog"] = 2] = "Blog";
})(Location = exports.Location || (exports.Location = {}));
class Menu {
    constructor(location) {
        this.Active = location;
    }
}
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map