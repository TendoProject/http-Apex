"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicSync = void 0;
const app = require("..");
class BasicSync {
    constructor(id) {
        this.id = id;
    }
    static create(stream) {
        const id = stream.readUInt8();
        return new BasicSync(id);
    }
    write(stream) {
        stream.writeUInt8(app.PacketType.BasicSync);
        stream.writeUInt8(this.id);
    }
}
exports.BasicSync = BasicSync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNTeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hcGkvcGFja2V0cy9CYXNpY1N5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsU0FBUztJQUNwQixZQUNXLEVBQVU7UUFBVixPQUFFLEdBQUYsRUFBRSxDQUFRO0lBQUcsQ0FBQztJQUV6QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQXdCO1FBQ3BDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixPQUFPLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBd0I7UUFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQWJELDhCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIEJhc2ljU3luYyBpbXBsZW1lbnRzIGFwcC5JUGFja2V0V3JpdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgaWQ6IG51bWJlcikge31cblxuICBzdGF0aWMgY3JlYXRlKHN0cmVhbTogYXBwLkJpbmFyeVJlYWRlcikge1xuICAgIGNvbnN0IGlkID0gc3RyZWFtLnJlYWRVSW50OCgpO1xuICAgIHJldHVybiBuZXcgQmFzaWNTeW5jKGlkKTtcbiAgfVxuXG4gIHdyaXRlKHN0cmVhbTogYXBwLkJpbmFyeVdyaXRlcikge1xuICAgIHN0cmVhbS53cml0ZVVJbnQ4KGFwcC5QYWNrZXRUeXBlLkJhc2ljU3luYyk7XG4gICAgc3RyZWFtLndyaXRlVUludDgodGhpcy5pZCk7XG4gIH1cbn1cbiJdfQ==