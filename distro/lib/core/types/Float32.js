"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Float32 = void 0;
const app = require("..");
class Float32 extends app.api.Adapter {
    constructor(offset, interval = 0) {
        super(new app.api.EntityMember(offset, interval, 4));
    }
    get value() {
        return this.source.buffer.getFloat32(0, true);
    }
    set value(value) {
        if (value === this.value)
            return;
        this.source.buffer.setFloat32(0, value, true);
        this.source.send = true;
    }
    toString() {
        return this.value.toString();
    }
}
exports.Float32 = Float32;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvYXQzMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29yZS90eXBlcy9GbG9hdDMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQTZCO0lBQ2hFLFlBQVksTUFBYyxFQUFFLFFBQVEsR0FBRyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBbEJELDBCQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBGbG9hdDMyIGV4dGVuZHMgYXBwLmFwaS5BZGFwdGVyPGFwcC5hcGkuRW50aXR5TWVtYmVyPiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldDogbnVtYmVyLCBpbnRlcnZhbCA9IDApIHtcbiAgICBzdXBlcihuZXcgYXBwLmFwaS5FbnRpdHlNZW1iZXIob2Zmc2V0LCBpbnRlcnZhbCwgNCkpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS5idWZmZXIuZ2V0RmxvYXQzMigwLCB0cnVlKTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnZhbHVlKSByZXR1cm47XG4gICAgdGhpcy5zb3VyY2UuYnVmZmVyLnNldEZsb2F0MzIoMCwgdmFsdWUsIHRydWUpO1xuICAgIHRoaXMuc291cmNlLnNlbmQgPSB0cnVlO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgfVxufVxuIl19