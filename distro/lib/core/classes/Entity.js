"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const app = require("..");
class Entity extends app.api.Adapter {
    constructor(address, signifierName = new app.UInt64(app.offsets.entity.iSignifierName, 60000)) {
        super(new app.api.Entity(address, [signifierName]));
        this.signifierName = signifierName;
    }
    get value() {
        return this.signifierName.value;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2NsYXNzZXMvRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLE1BQU8sU0FBUSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQXVCO0lBQ3pELFlBQVksT0FBZSxFQUNSLGdCQUFnQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQztRQUN6RixLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFEbkMsa0JBQWEsR0FBYixhQUFhLENBQTJEO0lBRTNGLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQVRELHdCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIEVudGl0eSBleHRlbmRzIGFwcC5hcGkuQWRhcHRlcjxhcHAuYXBpLkVudGl0eT4ge1xuICBjb25zdHJ1Y3RvcihhZGRyZXNzOiBiaWdpbnQsXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaWduaWZpZXJOYW1lID0gbmV3IGFwcC5VSW50NjQoYXBwLm9mZnNldHMuZW50aXR5LmlTaWduaWZpZXJOYW1lLCA2MDAwMCkpIHtcbiAgICBzdXBlcihuZXcgYXBwLmFwaS5FbnRpdHkoYWRkcmVzcywgW3NpZ25pZmllck5hbWVdKSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWVyTmFtZS52YWx1ZTtcbiAgfVxufVxuIl19