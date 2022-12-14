"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityUpdate = void 0;
const app = require("..");
class EntityUpdate {
    constructor(entities) {
        this.entities = entities;
    }
    static create(stream) {
        const membersSize = stream.readVariableLength();
        const members = process(stream, membersSize);
        return new EntityUpdate(members);
    }
}
exports.EntityUpdate = EntityUpdate;
function process(stream, size) {
    const result = new Array(size);
    for (let i = 0; i < size; i++)
        result[i] = app.EntityUpdateEntity.create(stream);
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5VXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hcGkvcGFja2V0cy9FbnRpdHlVcGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsWUFBWTtJQUN2QixZQUNXLFFBQXVDO1FBQXZDLGFBQVEsR0FBUixRQUFRLENBQStCO0lBQUcsQ0FBQztJQUV0RCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQXdCO1FBQ3BDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2hELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFURCxvQ0FTQztBQUVELFNBQVMsT0FBTyxDQUFDLE1BQXdCLEVBQUUsSUFBWTtJQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBeUIsSUFBSSxDQUFDLENBQUM7SUFDdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUU7UUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIEVudGl0eVVwZGF0ZSB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgZW50aXRpZXM6IEFycmF5PGFwcC5FbnRpdHlVcGRhdGVFbnRpdHk+KSB7fVxuXG4gIHN0YXRpYyBjcmVhdGUoc3RyZWFtOiBhcHAuQmluYXJ5UmVhZGVyKSB7XG4gICAgY29uc3QgbWVtYmVyc1NpemUgPSBzdHJlYW0ucmVhZFZhcmlhYmxlTGVuZ3RoKCk7XG4gICAgY29uc3QgbWVtYmVycyA9IHByb2Nlc3Moc3RyZWFtLCBtZW1iZXJzU2l6ZSk7XG4gICAgcmV0dXJuIG5ldyBFbnRpdHlVcGRhdGUobWVtYmVycyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2VzcyhzdHJlYW06IGFwcC5CaW5hcnlSZWFkZXIsIHNpemU6IG51bWJlcikge1xuICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8YXBwLkVudGl0eVVwZGF0ZUVudGl0eT4oc2l6ZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSByZXN1bHRbaV0gPSBhcHAuRW50aXR5VXBkYXRlRW50aXR5LmNyZWF0ZShzdHJlYW0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl19