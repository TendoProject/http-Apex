"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalPlayer = void 0;
const app = require("..");
class LocalPlayer extends app.api.Adapter {
    constructor(address, localPlayer = new app.UInt64(0, 1000)) {
        super(new app.api.Entity(address, [localPlayer]));
        this.localPlayer = localPlayer;
    }
    get value() {
        return this.localPlayer.value;
    }
}
exports.LocalPlayer = LocalPlayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYWxQbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvY2xhc3Nlcy9Mb2NhbFBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFFMUIsTUFBYSxXQUFZLFNBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUF1QjtJQUM5RCxZQUFZLE9BQWUsRUFDUixjQUFjLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ3RELEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQURqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7SUFFeEQsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBVEQsa0NBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxQbGF5ZXIgZXh0ZW5kcyBhcHAuYXBpLkFkYXB0ZXI8YXBwLmFwaS5FbnRpdHk+IHtcbiAgY29uc3RydWN0b3IoYWRkcmVzczogYmlnaW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxQbGF5ZXIgPSBuZXcgYXBwLlVJbnQ2NCgwLCAxMDAwKSkge1xuICAgIHN1cGVyKG5ldyBhcHAuYXBpLkVudGl0eShhZGRyZXNzLCBbbG9jYWxQbGF5ZXJdKSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxQbGF5ZXIudmFsdWU7XG4gIH1cbn1cbiJdfQ==