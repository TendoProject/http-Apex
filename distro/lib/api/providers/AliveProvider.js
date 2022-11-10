"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliveProvider = void 0;
const app = require("..");
class AliveProvider {
    constructor() {
        this.nextActiveTime = this.getNextTime();
    }
    update(stream) {
        if (this.nextActiveTime >= Date.now())
            return;
        new app.BasicAlive().write(stream);
        this.nextActiveTime = this.getNextTime();
    }
    getNextTime() {
        return Date.now() + 10000;
    }
}
exports.AliveProvider = AliveProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxpdmVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXBpL3Byb3ZpZGVycy9BbGl2ZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLGFBQWE7SUFBMUI7UUFDVSxtQkFBYyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQVc5QyxDQUFDO0lBVEMsTUFBTSxDQUFDLE1BQXdCO1FBQzdCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQUUsT0FBTztRQUM5QyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVPLFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQVpELHNDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIEFsaXZlUHJvdmlkZXIgaW1wbGVtZW50cyBhcHAuSVBhY2tldFByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBuZXh0QWN0aXZlVGltZSA9IHRoaXMuZ2V0TmV4dFRpbWUoKTtcblxuICB1cGRhdGUoc3RyZWFtOiBhcHAuQmluYXJ5V3JpdGVyKSB7XG4gICAgaWYgKHRoaXMubmV4dEFjdGl2ZVRpbWUgPj0gRGF0ZS5ub3coKSkgcmV0dXJuO1xuICAgIG5ldyBhcHAuQmFzaWNBbGl2ZSgpLndyaXRlKHN0cmVhbSk7XG4gICAgdGhpcy5uZXh0QWN0aXZlVGltZSA9IHRoaXMuZ2V0TmV4dFRpbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFRpbWUoKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyAxMDAwMDtcbiAgfVxufVxuIl19