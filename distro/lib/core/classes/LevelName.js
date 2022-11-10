"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelName = void 0;
const app = require("..");
class LevelName extends app.api.Adapter {
    constructor(address, levelName = new app.CString(0, 1000, 32)) {
        super(new app.api.Entity(address, [levelName]));
        this.levelName = levelName;
    }
    get value() {
        return this.levelName.value;
    }
}
exports.LevelName = LevelName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV2ZWxOYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2NsYXNzZXMvTGV2ZWxOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLFNBQVUsU0FBUSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQXVCO0lBQzVELFlBQVksT0FBZSxFQUNSLFlBQVksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUQvQixjQUFTLEdBQVQsU0FBUyxDQUErQjtJQUUzRCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFURCw4QkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBMZXZlbE5hbWUgZXh0ZW5kcyBhcHAuYXBpLkFkYXB0ZXI8YXBwLmFwaS5FbnRpdHk+IHtcbiAgY29uc3RydWN0b3IoYWRkcmVzczogYmlnaW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGV2ZWxOYW1lID0gbmV3IGFwcC5DU3RyaW5nKDAsIDEwMDAsIDMyKSkge1xuICAgIHN1cGVyKG5ldyBhcHAuYXBpLkVudGl0eShhZGRyZXNzLCBbbGV2ZWxOYW1lXSkpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmxldmVsTmFtZS52YWx1ZTtcbiAgfVxufVxuIl19