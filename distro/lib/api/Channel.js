"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const app = require(".");
class Channel {
    constructor(pid) {
        this.syncId = 0;
        this.alive = new app.AliveProvider();
        this.entities = new app.EntityProvider();
        this.socket = new WebSocket(`ws://${location.host}/ws/direct/${pid}`);
        this.socket.binaryType = 'arraybuffer';
        this.socket.addEventListener('message', x => this.receive(x));
    }
    create(adapter) {
        this.entities.create(adapter.source);
    }
    delete(adapter) {
        this.entities.delete(adapter.source);
    }
    async runAsync(renderFrame) {
        while (true) {
            switch (this.socket.readyState) {
                case this.socket.CONNECTING:
                    await new Promise(requestAnimationFrame);
                    break;
                case this.socket.OPEN:
                    renderFrame();
                    this.update();
                    await new Promise(requestAnimationFrame);
                    break;
                default:
                    throw new Error('Invalid channel state!');
            }
        }
    }
    receive(ev) {
        if (ev.data instanceof ArrayBuffer) {
            const stream = new app.BinaryReader(ev.data);
            while (stream.hasBytes()) {
                switch (stream.readUInt8()) {
                    case app.PacketType.BasicSync:
                        this.entities.receive(app.BasicSync.create(stream));
                        break;
                    case app.PacketType.EntityUpdate:
                        this.entities.receive(app.EntityUpdate.create(stream));
                        break;
                }
            }
        }
    }
    update() {
        const stream = new app.BinaryWriter();
        this.alive.update(stream);
        this.entities.update(stream, this.syncId);
        if (stream.hasBytes()) {
            new app.BasicSync(this.syncId).write(stream);
            this.socket.send(stream.toBuffer());
            this.syncId = this.syncId !== 255 ? this.syncId + 1 : 1;
        }
    }
}
exports.Channel = Channel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXBpL0NoYW5uZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBRXpCLE1BQWEsT0FBTztJQU1sQixZQUFZLEdBQVc7UUFGZixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBR2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLFFBQVEsUUFBUSxDQUFDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWdDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQWdDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUF1QjtRQUNwQyxPQUFPLElBQUksRUFBRTtZQUNYLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQzlCLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUN6QixNQUFNLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1IsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ25CLFdBQVcsRUFBRSxDQUFDO29CQUNkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDZCxNQUFNLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sT0FBTyxDQUFDLEVBQWdCO1FBQzlCLElBQUksRUFBRSxDQUFDLElBQUksWUFBWSxXQUFXLEVBQUU7WUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxPQUFPLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDeEIsUUFBUSxNQUFNLENBQUMsU0FBUyxFQUFvQixFQUFFO29CQUM1QyxLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUzt3QkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsTUFBTTtvQkFDUixLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWTt3QkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsTUFBTTtpQkFDVDthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sTUFBTTtRQUNaLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDckIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7Q0FDRjtBQWpFRCwwQkFpRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLic7XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBhbGl2ZTogYXBwLkFsaXZlUHJvdmlkZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgZW50aXRpZXM6IGFwcC5FbnRpdHlQcm92aWRlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBzb2NrZXQ6IFdlYlNvY2tldDtcbiAgcHJpdmF0ZSBzeW5jSWQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHBpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5hbGl2ZSA9IG5ldyBhcHAuQWxpdmVQcm92aWRlcigpO1xuICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgYXBwLkVudGl0eVByb3ZpZGVyKCk7XG4gICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KGB3czovLyR7bG9jYXRpb24uaG9zdH0vd3MvZGlyZWN0LyR7cGlkfWApO1xuICAgIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB4ID0+IHRoaXMucmVjZWl2ZSh4KSk7XG4gIH1cblxuICBjcmVhdGUoYWRhcHRlcjogYXBwLkFkYXB0ZXI8YXBwLkVudGl0eT4pIHtcbiAgICB0aGlzLmVudGl0aWVzLmNyZWF0ZShhZGFwdGVyLnNvdXJjZSk7XG4gIH1cblxuICBkZWxldGUoYWRhcHRlcjogYXBwLkFkYXB0ZXI8YXBwLkVudGl0eT4pIHtcbiAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShhZGFwdGVyLnNvdXJjZSk7XG4gIH1cblxuICBhc3luYyBydW5Bc3luYyhyZW5kZXJGcmFtZTogKCkgPT4gdm9pZCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc29ja2V0LnJlYWR5U3RhdGUpIHtcbiAgICAgICAgY2FzZSB0aGlzLnNvY2tldC5DT05ORUNUSU5HOlxuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlcXVlc3RBbmltYXRpb25GcmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdGhpcy5zb2NrZXQuT1BFTjpcbiAgICAgICAgICByZW5kZXJGcmFtZSgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVxdWVzdEFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY2hhbm5lbCBzdGF0ZSEnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlY2VpdmUoZXY6IE1lc3NhZ2VFdmVudCkge1xuICAgIGlmIChldi5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBhcHAuQmluYXJ5UmVhZGVyKGV2LmRhdGEpO1xuICAgICAgd2hpbGUgKHN0cmVhbS5oYXNCeXRlcygpKSB7XG4gICAgICAgIHN3aXRjaCAoc3RyZWFtLnJlYWRVSW50OCgpIGFzIGFwcC5QYWNrZXRUeXBlKSB7XG4gICAgICAgICAgY2FzZSBhcHAuUGFja2V0VHlwZS5CYXNpY1N5bmM6XG4gICAgICAgICAgICB0aGlzLmVudGl0aWVzLnJlY2VpdmUoYXBwLkJhc2ljU3luYy5jcmVhdGUoc3RyZWFtKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGFwcC5QYWNrZXRUeXBlLkVudGl0eVVwZGF0ZTpcbiAgICAgICAgICAgIHRoaXMuZW50aXRpZXMucmVjZWl2ZShhcHAuRW50aXR5VXBkYXRlLmNyZWF0ZShzdHJlYW0pKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IGFwcC5CaW5hcnlXcml0ZXIoKTtcbiAgICB0aGlzLmFsaXZlLnVwZGF0ZShzdHJlYW0pO1xuICAgIHRoaXMuZW50aXRpZXMudXBkYXRlKHN0cmVhbSwgdGhpcy5zeW5jSWQpO1xuICAgIGlmIChzdHJlYW0uaGFzQnl0ZXMoKSkge1xuICAgICAgbmV3IGFwcC5CYXNpY1N5bmModGhpcy5zeW5jSWQpLndyaXRlKHN0cmVhbSk7XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKHN0cmVhbS50b0J1ZmZlcigpKTtcbiAgICAgIHRoaXMuc3luY0lkID0gdGhpcy5zeW5jSWQgIT09IDI1NSA/IHRoaXMuc3luY0lkICsgMSA6IDE7XG4gICAgfVxuICB9XG59XG4iXX0=