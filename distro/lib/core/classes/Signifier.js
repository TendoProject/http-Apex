"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signifier = void 0;
const app = require("..");
class Signifier extends app.api.Adapter {
    constructor(address, signifierName = new app.CString(0, 60000, 32)) {
        super(new app.api.Entity(address, [signifierName]));
        this.signifierName = signifierName;
    }
    get value() {
        return this.signifierName.value;
    }
}
exports.Signifier = Signifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmlmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2NsYXNzZXMvU2lnbmlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLFNBQVUsU0FBUSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQXVCO0lBQzVELFlBQVksT0FBZSxFQUNSLGdCQUFnQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDOUQsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRG5DLGtCQUFhLEdBQWIsYUFBYSxDQUFnQztJQUVoRSxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7QUFURCw4QkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBTaWduaWZpZXIgZXh0ZW5kcyBhcHAuYXBpLkFkYXB0ZXI8YXBwLmFwaS5FbnRpdHk+IHtcbiAgY29uc3RydWN0b3IoYWRkcmVzczogYmlnaW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2lnbmlmaWVyTmFtZSA9IG5ldyBhcHAuQ1N0cmluZygwLCA2MDAwMCwgMzIpKSB7XG4gICAgc3VwZXIobmV3IGFwcC5hcGkuRW50aXR5KGFkZHJlc3MsIFtzaWduaWZpZXJOYW1lXSkpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmllck5hbWUudmFsdWU7XG4gIH1cbn1cbiJdfQ==