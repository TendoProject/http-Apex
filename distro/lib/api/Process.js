"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
const app = require(".");
class Process {
    constructor(value, args = value.args, command = value.command, pid = value.pid) {
        this.args = args;
        this.command = command;
        this.pid = pid;
    }
    async regionsAsync() {
        const response = await fetch(`/api/proc/${this.pid}/maps`);
        const result = await response.json();
        return result.map(x => new app.Region(x));
    }
}
exports.Process = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXBpL1Byb2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBRXpCLE1BQWEsT0FBTztJQUNsQixZQUFZLEtBQW1CLEVBQ3BCLE9BQU8sS0FBSyxDQUFDLElBQUksRUFDakIsVUFBVSxLQUFLLENBQUMsT0FBTyxFQUN2QixNQUFNLEtBQUssQ0FBQyxHQUFHO1FBRmYsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUcsQ0FBQztJQUU5QixLQUFLLENBQUMsWUFBWTtRQUNoQixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxhQUFhLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzNELE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBd0IsQ0FBQztRQUMzRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFYRCwwQkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuJztcblxuZXhwb3J0IGNsYXNzIFByb2Nlc3Mge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYXBwLklQcm9jZXNzLFxuICAgIHJlYWRvbmx5IGFyZ3MgPSB2YWx1ZS5hcmdzLFxuICAgIHJlYWRvbmx5IGNvbW1hbmQgPSB2YWx1ZS5jb21tYW5kLFxuICAgIHJlYWRvbmx5IHBpZCA9IHZhbHVlLnBpZCkge31cblxuICBhc3luYyByZWdpb25zQXN5bmMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wcm9jLyR7dGhpcy5waWR9L21hcHNgKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgQXJyYXk8YXBwLklSZWdpb24+O1xuICAgIHJldHVybiByZXN1bHQubWFwKHggPT4gbmV3IGFwcC5SZWdpb24oeCkpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIElQcm9jZXNzID0ge1xuICBhcmdzOiBBcnJheTxzdHJpbmc+LFxuICBjb21tYW5kOiBzdHJpbmcsXG4gIHBpZDogbnVtYmVyXG59O1xuIl19