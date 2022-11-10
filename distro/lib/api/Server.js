"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const app = require(".");
class Server {
    async processesAsync() {
        const response = await fetch('/api/proc');
        const result = await response.json();
        return result.map(x => new app.Process(x));
    }
    async versionAsync() {
        const response = await fetch('/api/version');
        const result = await response.json().catch(() => 0);
        return result;
    }
}
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hcGkvU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUV6QixNQUFhLE1BQU07SUFDakIsS0FBSyxDQUFDLGNBQWM7UUFDbEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUF5QixDQUFDO1FBQzVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWTtRQUNoQixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QyxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFXLENBQUM7UUFDOUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBWkQsd0JBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLic7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICBhc3luYyBwcm9jZXNzZXNBc3luYygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3Byb2MnKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgQXJyYXk8YXBwLklQcm9jZXNzPjtcbiAgICByZXR1cm4gcmVzdWx0Lm1hcCh4ID0+IG5ldyBhcHAuUHJvY2Vzcyh4KSk7XG4gIH1cblxuICBhc3luYyB2ZXJzaW9uQXN5bmMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS92ZXJzaW9uJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+IDApIGFzIE51bWJlcjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=