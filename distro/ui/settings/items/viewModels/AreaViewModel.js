"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaViewModel = void 0;
const app = require("..");
const lib = require("lib");
class AreaViewModel {
    constructor(name, selector) {
        this.items = Array.from(fetch(selector)).map(x => new app.ItemViewModel(x));
        this.name = name;
    }
    toItemSet(value) {
        for (const entry of this.items) {
            if (!entry.store.value)
                continue;
            value.add(entry.value.itemId);
        }
    }
}
exports.AreaViewModel = AreaViewModel;
function* fetch(selector) {
    for (const item of lib.items.list) {
        if (!selector(item))
            continue;
        yield item;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJlYVZpZXdNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9zZXR0aW5ncy9pdGVtcy92aWV3TW9kZWxzL0FyZWFWaWV3TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUUzQixNQUFhLGFBQWE7SUFJeEIsWUFBWSxJQUFZLEVBQUUsUUFBMEM7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBa0I7UUFDMUIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQUUsU0FBUztZQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0NBQ0Y7QUFmRCxzQ0FlQztBQUVELFFBQVMsQ0FBQyxDQUFBLEtBQUssQ0FBQyxRQUEwQztJQUN4RCxLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQUUsU0FBUztRQUM5QixNQUFNLElBQUksQ0FBQztLQUNaO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5pbXBvcnQgKiBhcyBsaWIgZnJvbSAnbGliJztcblxuZXhwb3J0IGNsYXNzIEFyZWFWaWV3TW9kZWwge1xuICByZWFkb25seSBpdGVtczogQXJyYXk8YXBwLkl0ZW1WaWV3TW9kZWw+O1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzZWxlY3RvcjogKGl0ZW06IGxpYi5pdGVtcy5BbGwpID0+IGJvb2xlYW4pIHtcbiAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbShmZXRjaChzZWxlY3RvcikpLm1hcCh4ID0+IG5ldyBhcHAuSXRlbVZpZXdNb2RlbCh4KSk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHRvSXRlbVNldCh2YWx1ZTogU2V0PG51bWJlcj4pIHtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuaXRlbXMpIHtcbiAgICAgIGlmICghZW50cnkuc3RvcmUudmFsdWUpIGNvbnRpbnVlO1xuICAgICAgdmFsdWUuYWRkKGVudHJ5LnZhbHVlLml0ZW1JZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uICpmZXRjaChzZWxlY3RvcjogKGl0ZW06IGxpYi5pdGVtcy5BbGwpID0+IGJvb2xlYW4pIHtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGxpYi5pdGVtcy5saXN0KSB7XG4gICAgaWYgKCFzZWxlY3RvcihpdGVtKSkgY29udGludWU7XG4gICAgeWllbGQgaXRlbTtcbiAgfVxufVxuIl19