"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
class Region {
    constructor(value, start = parseHex(value.start), end = parseHex(value.end), perms = value.perms, offset = parseHex(value.offset), devMajor = value.devMajor, devMinor = value.devMinor, inode = parseHex(value.inode), pathname = value.pathname) {
        this.start = start;
        this.end = end;
        this.perms = perms;
        this.offset = offset;
        this.devMajor = devMajor;
        this.devMinor = devMinor;
        this.inode = inode;
        this.pathname = pathname;
    }
}
exports.Region = Region;
function parseHex(value) {
    return /^0x/i.test(value)
        ? BigInt(value)
        : BigInt(`0x${value}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hcGkvUmVnaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLE1BQWEsTUFBTTtJQUNqQixZQUFZLEtBQWtCLEVBQ25CLFFBQVEsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDN0IsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUN6QixRQUFRLEtBQUssQ0FBQyxLQUFLLEVBQ25CLFNBQVMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDL0IsV0FBVyxLQUFLLENBQUMsUUFBUSxFQUN6QixXQUFXLEtBQUssQ0FBQyxRQUFRLEVBQ3pCLFFBQVEsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDN0IsV0FBVyxLQUFLLENBQUMsUUFBUTtRQVB6QixVQUFLLEdBQUwsS0FBSyxDQUF3QjtRQUM3QixRQUFHLEdBQUgsR0FBRyxDQUFzQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQXdCO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQUcsQ0FBQztDQUN6QztBQVZELHdCQVVDO0FBRUQsU0FBUyxRQUFRLENBQUMsS0FBYTtJQUM3QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuJztcblxuZXhwb3J0IGNsYXNzIFJlZ2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhcHAuSVJlZ2lvbixcbiAgICByZWFkb25seSBzdGFydCA9IHBhcnNlSGV4KHZhbHVlLnN0YXJ0KSxcbiAgICByZWFkb25seSBlbmQgPSBwYXJzZUhleCh2YWx1ZS5lbmQpLFxuICAgIHJlYWRvbmx5IHBlcm1zID0gdmFsdWUucGVybXMsXG4gICAgcmVhZG9ubHkgb2Zmc2V0ID0gcGFyc2VIZXgodmFsdWUub2Zmc2V0KSxcbiAgICByZWFkb25seSBkZXZNYWpvciA9IHZhbHVlLmRldk1ham9yLFxuICAgIHJlYWRvbmx5IGRldk1pbm9yID0gdmFsdWUuZGV2TWlub3IsXG4gICAgcmVhZG9ubHkgaW5vZGUgPSBwYXJzZUhleCh2YWx1ZS5pbm9kZSksXG4gICAgcmVhZG9ubHkgcGF0aG5hbWUgPSB2YWx1ZS5wYXRobmFtZSkge31cbn1cblxuZnVuY3Rpb24gcGFyc2VIZXgodmFsdWU6IHN0cmluZykge1xuICByZXR1cm4gL14weC9pLnRlc3QodmFsdWUpXG4gICAgPyBCaWdJbnQodmFsdWUpXG4gICAgOiBCaWdJbnQoYDB4JHt2YWx1ZX1gKTtcbn1cblxuZXhwb3J0IHR5cGUgSVJlZ2lvbiA9IHtcbiAgZGV2TWFqb3I6IG51bWJlcixcbiAgZGV2TWlub3I6IG51bWJlcixcbiAgZW5kOiBzdHJpbmcsXG4gIGlub2RlOiBzdHJpbmcsXG4gIG9mZnNldDogc3RyaW5nLFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBwZXJtczogbnVtYmVyLFxuICBzdGFydDogc3RyaW5nXG59O1xuIl19