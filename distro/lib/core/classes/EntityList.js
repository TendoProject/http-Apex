"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityList = void 0;
const app = require("..");
const maxEntities = 0x10000;
class EntityList extends app.api.Adapter {
    constructor(address, pointers = Array(maxEntities).fill(0).map((_, i) => new app.UInt64(i << 5, 1000))) {
        super(new app.api.Entity(address, pointers, { requestBatch: true }));
        this.pointers = pointers;
        this.entities = new Map();
        this.nextTime = 0;
    }
    get map() {
        return this.entities;
    }
    update(channel) {
        if (!this.nextTime || this.nextTime < Date.now()) {
            this.onUpdate(channel);
            this.nextTime = Date.now() + 1000;
        }
    }
    checkCreate(address, channel, knownSet) {
        if (!this.entities.has(address)) {
            const entity = new app.Entity(address);
            this.entities.set(address, entity);
            channel.create(entity);
            knownSet.add(address);
        }
        else {
            knownSet.add(address);
        }
    }
    onUpdate(channel) {
        const knownSet = new Set();
        for (const pointer of this.pointers) {
            const address = pointer.value;
            if (!address)
                continue;
            this.checkCreate(address, channel, knownSet);
        }
        for (const [k, v] of this.entities) {
            if (knownSet.has(k))
                continue;
            this.entities.delete(k);
            channel.delete(v);
        }
    }
}
exports.EntityList = EntityList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29yZS9jbGFzc2VzL0VudGl0eUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBQzFCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUU1QixNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQXVCO0lBSTdELFlBQVksT0FBZSxFQUNSLFdBQVcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQURsRCxhQUFRLEdBQVIsUUFBUSxDQUF5RTtRQUpuRixhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFDbEQsYUFBUSxHQUFHLENBQUMsQ0FBQztJQUtyQixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBd0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLE9BQWUsRUFBRSxPQUF3QixFQUFFLFFBQXFCO1FBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMvQixNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0wsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFTyxRQUFRLENBQUMsT0FBd0I7UUFDdkMsTUFBTSxRQUFRLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEMsS0FBSyxNQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU87Z0JBQUUsU0FBUztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUM7UUFDRCxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUFFLFNBQVM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7Q0FDRjtBQTVDRCxnQ0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuY29uc3QgbWF4RW50aXRpZXMgPSAweDEwMDAwO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5TGlzdCBleHRlbmRzIGFwcC5hcGkuQWRhcHRlcjxhcHAuYXBpLkVudGl0eT4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGVudGl0aWVzID0gbmV3IE1hcDxiaWdpbnQsIGFwcC5FbnRpdHk+KCk7XG4gIHByaXZhdGUgbmV4dFRpbWUgPSAwO1xuICBcbiAgY29uc3RydWN0b3IoYWRkcmVzczogYmlnaW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9pbnRlcnMgPSBBcnJheShtYXhFbnRpdGllcykuZmlsbCgwKS5tYXAoKF8sIGkpID0+IG5ldyBhcHAuVUludDY0KGkgPDwgNSwgMTAwMCkpKSB7XG4gICAgc3VwZXIobmV3IGFwcC5hcGkuRW50aXR5KGFkZHJlc3MsIHBvaW50ZXJzLCB7cmVxdWVzdEJhdGNoOiB0cnVlfSkpO1xuICB9XG5cbiAgZ2V0IG1hcCgpOiBSZWFkb25seU1hcDxiaWdpbnQsIGFwcC5FbnRpdHk+IHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdGllcztcbiAgfVxuXG4gIHVwZGF0ZShjaGFubmVsOiBhcHAuYXBpLkNoYW5uZWwpIHtcbiAgICBpZiAoIXRoaXMubmV4dFRpbWUgfHwgdGhpcy5uZXh0VGltZSA8IERhdGUubm93KCkpIHtcbiAgICAgIHRoaXMub25VcGRhdGUoY2hhbm5lbCk7XG4gICAgICB0aGlzLm5leHRUaW1lID0gRGF0ZS5ub3coKSArIDEwMDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NyZWF0ZShhZGRyZXNzOiBiaWdpbnQsIGNoYW5uZWw6IGFwcC5hcGkuQ2hhbm5lbCwga25vd25TZXQ6IFNldDxiaWdpbnQ+KSB7XG4gICAgaWYgKCF0aGlzLmVudGl0aWVzLmhhcyhhZGRyZXNzKSkge1xuICAgICAgY29uc3QgZW50aXR5ID0gbmV3IGFwcC5FbnRpdHkoYWRkcmVzcyk7XG4gICAgICB0aGlzLmVudGl0aWVzLnNldChhZGRyZXNzLCBlbnRpdHkpO1xuICAgICAgY2hhbm5lbC5jcmVhdGUoZW50aXR5KTtcbiAgICAgIGtub3duU2V0LmFkZChhZGRyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAga25vd25TZXQuYWRkKGFkZHJlc3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25VcGRhdGUoY2hhbm5lbDogYXBwLmFwaS5DaGFubmVsKSB7XG4gICAgY29uc3Qga25vd25TZXQ6IFNldDxiaWdpbnQ+ID0gbmV3IFNldCgpO1xuICAgIGZvciAoY29uc3QgcG9pbnRlciBvZiB0aGlzLnBvaW50ZXJzKSB7XG4gICAgICBjb25zdCBhZGRyZXNzID0gcG9pbnRlci52YWx1ZTtcbiAgICAgIGlmICghYWRkcmVzcykgY29udGludWU7XG4gICAgICB0aGlzLmNoZWNrQ3JlYXRlKGFkZHJlc3MsIGNoYW5uZWwsIGtub3duU2V0KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgaWYgKGtub3duU2V0LmhhcyhrKSkgY29udGludWU7XG4gICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrKTtcbiAgICAgIGNoYW5uZWwuZGVsZXRlKHYpO1xuICAgIH1cbiAgfVxufVxuIl19