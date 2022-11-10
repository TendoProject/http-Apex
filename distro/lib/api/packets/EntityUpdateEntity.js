"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityUpdateEntity = void 0;
const app = require("..");
class EntityUpdateEntity {
    constructor(id, members) {
        this.id = id;
        this.members = members;
    }
    static create(stream) {
        const id = stream.readVariableLength();
        const membersSize = stream.readVariableLength();
        const members = process(stream, membersSize);
        return new EntityUpdateEntity(id, members);
    }
}
exports.EntityUpdateEntity = EntityUpdateEntity;
function process(stream, size) {
    const result = new Array(size);
    for (let i = 0; i < size; i++)
        result[i] = app.EntityUpdateEntityMember.create(stream);
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5VXBkYXRlRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hcGkvcGFja2V0cy9FbnRpdHlVcGRhdGVFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsa0JBQWtCO0lBQzdCLFlBQ1csRUFBVSxFQUNWLE9BQTRDO1FBRDVDLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixZQUFPLEdBQVAsT0FBTyxDQUFxQztJQUFHLENBQUM7SUFFM0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUF3QjtRQUNwQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNoRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBWEQsZ0RBV0M7QUFFRCxTQUFTLE9BQU8sQ0FBQyxNQUF3QixFQUFFLElBQVk7SUFDckQsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQStCLElBQUksQ0FBQyxDQUFDO0lBQzdELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkYsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlVcGRhdGVFbnRpdHkge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IGlkOiBudW1iZXIsXG4gICAgcmVhZG9ubHkgbWVtYmVyczogQXJyYXk8YXBwLkVudGl0eVVwZGF0ZUVudGl0eU1lbWJlcj4pIHt9XG5cbiAgc3RhdGljIGNyZWF0ZShzdHJlYW06IGFwcC5CaW5hcnlSZWFkZXIpIHtcbiAgICBjb25zdCBpZCA9IHN0cmVhbS5yZWFkVmFyaWFibGVMZW5ndGgoKTtcbiAgICBjb25zdCBtZW1iZXJzU2l6ZSA9IHN0cmVhbS5yZWFkVmFyaWFibGVMZW5ndGgoKTtcbiAgICBjb25zdCBtZW1iZXJzID0gcHJvY2VzcyhzdHJlYW0sIG1lbWJlcnNTaXplKTtcbiAgICByZXR1cm4gbmV3IEVudGl0eVVwZGF0ZUVudGl0eShpZCwgbWVtYmVycyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2VzcyhzdHJlYW06IGFwcC5CaW5hcnlSZWFkZXIsIHNpemU6IG51bWJlcikge1xuICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8YXBwLkVudGl0eVVwZGF0ZUVudGl0eU1lbWJlcj4oc2l6ZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSByZXN1bHRbaV0gPSBhcHAuRW50aXR5VXBkYXRlRW50aXR5TWVtYmVyLmNyZWF0ZShzdHJlYW0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl19