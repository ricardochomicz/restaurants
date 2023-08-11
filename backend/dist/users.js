"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email == this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "ricardo@gmail.com": new User('ricardo@gmail.com', 'Ricardo', '123456'),
    "pedro@gmail.com": new User('pedro@gmail.com', 'Pedro', '123456')
};
