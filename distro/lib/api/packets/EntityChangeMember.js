"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityChangeMember = void 0;
class EntityChangeMember {
    constructor(offset, buffer, deltas) {
        this.offset = offset;
        this.buffer = buffer;
        this.deltas = deltas;
    }
    write(stream) {
        stream.writeVariableLength(this.offset);
        if (this.deltas) {
            stream.writeVariableLength(this.deltas.length);
            this.deltas.forEach(x => x.write(stream));
        }
        else {
            stream.writeUInt8(0);
            stream.writeVariableLength(this.buffer.byteLength);
            stream.writeBytes(this.buffer);
        }
    }
}
exports.EntityChangeMember = EntityChangeMember;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5Q2hhbmdlTWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hcGkvcGFja2V0cy9FbnRpdHlDaGFuZ2VNZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxrQkFBa0I7SUFDN0IsWUFDVyxNQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsTUFBMkM7UUFGM0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBcUM7SUFBRyxDQUFDO0lBRTFELEtBQUssQ0FBQyxNQUF3QjtRQUM1QixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztDQUNGO0FBakJELGdEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlDaGFuZ2VNZW1iZXIgaW1wbGVtZW50cyBhcHAuSVBhY2tldFdyaXRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IG9mZnNldDogbnVtYmVyLFxuICAgIHJlYWRvbmx5IGJ1ZmZlcjogRGF0YVZpZXcsXG4gICAgcmVhZG9ubHkgZGVsdGFzPzogQXJyYXk8YXBwLkVudGl0eUNoYW5nZU1lbWJlckRlbHRhPikge31cblxuICB3cml0ZShzdHJlYW06IGFwcC5CaW5hcnlXcml0ZXIpIHtcbiAgICBzdHJlYW0ud3JpdGVWYXJpYWJsZUxlbmd0aCh0aGlzLm9mZnNldCk7XG4gICAgaWYgKHRoaXMuZGVsdGFzKSB7XG4gICAgICBzdHJlYW0ud3JpdGVWYXJpYWJsZUxlbmd0aCh0aGlzLmRlbHRhcy5sZW5ndGgpO1xuICAgICAgdGhpcy5kZWx0YXMuZm9yRWFjaCh4ID0+IHgud3JpdGUoc3RyZWFtKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmVhbS53cml0ZVVJbnQ4KDApO1xuICAgICAgc3RyZWFtLndyaXRlVmFyaWFibGVMZW5ndGgodGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICBzdHJlYW0ud3JpdGVCeXRlcyh0aGlzLmJ1ZmZlcik7XG4gICAgfVxuICB9XG59XG4iXX0=