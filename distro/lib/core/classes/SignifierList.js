"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignifierList = void 0;
const app = require("..");
class SignifierList {
    constructor(channel, signifiers = new Map()) {
        this.channel = channel;
        this.signifiers = signifiers;
    }
    get(address) {
        return this.signifiers.get(address) ?? this.create(address);
    }
    create(address) {
        const signifier = new app.Signifier(address);
        this.signifiers.set(address, signifier);
        this.channel.create(signifier);
        return signifier;
    }
}
exports.SignifierList = SignifierList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmlmaWVyTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29yZS9jbGFzc2VzL1NpZ25pZmllckxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsYUFBYTtJQUN4QixZQUNtQixPQUF3QixFQUN4QixhQUF5QyxJQUFJLEdBQUcsRUFBRTtRQURsRCxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUF3QztJQUFHLENBQUM7SUFFekUsR0FBRyxDQUFDLE9BQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyxNQUFNLENBQUMsT0FBZTtRQUM1QixNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQWZELHNDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIFNpZ25pZmllckxpc3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNoYW5uZWw6IGFwcC5hcGkuQ2hhbm5lbCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpZ25pZmllcnM6IE1hcDxiaWdpbnQsIGFwcC5TaWduaWZpZXI+ID0gbmV3IE1hcCgpKSB7fVxuXG4gIGdldChhZGRyZXNzOiBiaWdpbnQpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpZXJzLmdldChhZGRyZXNzKSA/PyB0aGlzLmNyZWF0ZShhZGRyZXNzKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKGFkZHJlc3M6IGJpZ2ludCkge1xuICAgIGNvbnN0IHNpZ25pZmllciA9IG5ldyBhcHAuU2lnbmlmaWVyKGFkZHJlc3MpO1xuICAgIHRoaXMuc2lnbmlmaWVycy5zZXQoYWRkcmVzcywgc2lnbmlmaWVyKTtcbiAgICB0aGlzLmNoYW5uZWwuY3JlYXRlKHNpZ25pZmllcik7XG4gICAgcmV0dXJuIHNpZ25pZmllcjtcbiAgfVxufVxuIl19