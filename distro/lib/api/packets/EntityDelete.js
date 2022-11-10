"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityDelete = void 0;
const app = require("..");
class EntityDelete {
    constructor(id) {
        this.id = id;
    }
    write(stream) {
        stream.writeUInt8(app.PacketType.EntityDelete);
        stream.writeVariableLength(this.id);
    }
}
exports.EntityDelete = EntityDelete;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5RGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hcGkvcGFja2V0cy9FbnRpdHlEZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsWUFBWTtJQUN2QixZQUNXLEVBQVU7UUFBVixPQUFFLEdBQUYsRUFBRSxDQUFRO0lBQUcsQ0FBQztJQUV6QixLQUFLLENBQUMsTUFBd0I7UUFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBUkQsb0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5RGVsZXRlIGltcGxlbWVudHMgYXBwLklQYWNrZXRXcml0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBpZDogbnVtYmVyKSB7fVxuXG4gIHdyaXRlKHN0cmVhbTogYXBwLkJpbmFyeVdyaXRlcikge1xuICAgIHN0cmVhbS53cml0ZVVJbnQ4KGFwcC5QYWNrZXRUeXBlLkVudGl0eURlbGV0ZSk7XG4gICAgc3RyZWFtLndyaXRlVmFyaWFibGVMZW5ndGgodGhpcy5pZCk7XG4gIH1cbn1cbiJdfQ==