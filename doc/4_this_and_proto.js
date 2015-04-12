var A = function (x, y) {
    this.x = x;
    this.y = y;
    this.sumXY = function () {
        return this.x + this.y;
    };
};

A.prototype.z = 1;

A.prototype.sumXYZ = function () {
    return this.x + this.y + this.z;
};

var a = new A(3, 4);
var b = new A(5, 4);

console.log("i) " + a.sumXY());
console.log("ii) " + b.sumXY());
console.log("iii) " + a.sumXYZ());

a.z += 1;
console.log("iv) " + a.z);
console.log("v) " + a.sumXYZ());
console.log("vi) " + a.sumXY == b.sumXY);
console.log("vii) " + a.sumXYZ == b.sumXYZ);
console.log("viii) " + a.__proto__ == b.__proto__);
console.log("ix) " + a.__proto__ == A.prototype);

var c = new A(1, 2);

console.log("x) " + c.sumXY());
console.log("xi) " + c.sumXYZ());
