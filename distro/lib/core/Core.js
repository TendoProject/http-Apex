"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const app = require(".");
class Core {
    constructor(address, channel, entityList = new app.EntityList(address + app.offsets.core.clEntityList), itemFilter = new app.EntityListFilter(app.Item, 'prop_survival'), npcFilter = new app.EntityListFilter(app.NPC, 'npc_dummie'), playerFilter = new app.EntityListFilter(app.Player, 'player'), signifierList = new app.SignifierList(channel)) {
        this.address = address;
        this.channel = channel;
        this.entityList = entityList;
        this.itemFilter = itemFilter;
        this.npcFilter = npcFilter;
        this.playerFilter = playerFilter;
        this.signifierList = signifierList;
        this.buttonList = new app.ButtonList(this.address);
        this.levelName = new app.LevelName(this.address + app.offsets.core.levelName);
        this.localPlayer = new app.LocalPlayer(this.address + app.offsets.core.localPlayer);
        this.itemList = this.itemFilter.map;
        this.npcList = this.npcFilter.map;
        this.playerList = this.playerFilter.map;
        this.channel.create(this.buttonList);
        this.channel.create(this.entityList);
        this.channel.create(this.levelName);
        this.channel.create(this.localPlayer);
    }
    static async createAsync(server) {
        const processes = await server.processesAsync();
        const targetProcess = processes.find(x => x.command.toLowerCase().endsWith('r5apex.exe'));
        if (!targetProcess)
            throw new Error('Invalid process!');
        const regions = await targetProcess.regionsAsync();
        const targetRegion = regions.find(x => x.pathname.toLowerCase().endsWith('r5apex.exe'))
            ?? regions.find(x => x.perms == 1 && x.pathname.startsWith('/memfd'))
            ?? regions.find(x => x.start === BigInt(0x140000000));
        if (!targetRegion)
            throw new Error('Invalid region!');
        return new Core(targetRegion.start, new app.api.Channel(targetProcess.pid));
    }
    async runAsync(renderFrame) {
        const filters = [this.itemFilter, this.npcFilter, this.playerFilter];
        await this.channel.runAsync(() => {
            this.entityList.update(this.channel);
            filters.forEach(x => x.update(this.channel, this.entityList, this.signifierList));
            renderFrame();
        });
    }
}
exports.Core = Core;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29yZS9Db3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUV6QixNQUFhLElBQUk7SUFRZixZQUNtQixPQUFlLEVBQ2YsT0FBd0IsRUFDeEIsYUFBYSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUN4RSxhQUFhLElBQUksR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLEVBQ2hFLFlBQVksSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsRUFDM0QsZUFBZSxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUM3RCxnQkFBZ0IsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQU45QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBOEQ7UUFDeEUsZUFBVSxHQUFWLFVBQVUsQ0FBc0Q7UUFDaEUsY0FBUyxHQUFULFNBQVMsQ0FBa0Q7UUFDM0QsaUJBQVksR0FBWixZQUFZLENBQWlEO1FBQzdELGtCQUFhLEdBQWIsYUFBYSxDQUFpQztRQWR4RCxlQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekUsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsQ0FB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IGZyb20gJy4nO1xuXG5leHBvcnQgY2xhc3MgQ29yZSB7XG4gIHJlYWRvbmx5IGJ1dHRvbkxpc3QgPSBuZXcgYXBwLkJ1dHRvbkxpc3QodGhpcy5hZGRyZXNzKTtcbiAgcmVhZG9ubHkgbGV2ZWxOYW1lID0gbmV3IGFwcC5MZXZlbE5hbWUodGhpcy5hZGRyZXNzICsgYXBwLm9mZnNldHMuY29yZS5sZXZlbE5hbWUpO1xuICByZWFkb25seSBsb2NhbFBsYXllciA9IG5ldyBhcHAuTG9jYWxQbGF5ZXIodGhpcy5hZGRyZXNzICsgYXBwLm9mZnNldHMuY29yZS5sb2NhbFBsYXllcik7XG4gIHJlYWRvbmx5IGl0ZW1MaXN0ID0gdGhpcy5pdGVtRmlsdGVyLm1hcDtcbiAgcmVhZG9ubHkgbnBjTGlzdCA9IHRoaXMubnBjRmlsdGVyLm1hcDtcbiAgcmVhZG9ubHkgcGxheWVyTGlzdCA9IHRoaXMucGxheWVyRmlsdGVyLm1hcDtcbiAgXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBhZGRyZXNzOiBiaWdpbnQsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjaGFubmVsOiBhcHAuYXBpLkNoYW5uZWwsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbnRpdHlMaXN0ID0gbmV3IGFwcC5FbnRpdHlMaXN0KGFkZHJlc3MgKyBhcHAub2Zmc2V0cy5jb3JlLmNsRW50aXR5TGlzdCksXG4gICAgcHJpdmF0ZSByZWFkb25seSBpdGVtRmlsdGVyID0gbmV3IGFwcC5FbnRpdHlMaXN0RmlsdGVyKGFwcC5JdGVtLCAncHJvcF9zdXJ2aXZhbCcpLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbnBjRmlsdGVyID0gbmV3IGFwcC5FbnRpdHlMaXN0RmlsdGVyKGFwcC5OUEMsICducGNfZHVtbWllJyksXG4gICAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJGaWx0ZXIgPSBuZXcgYXBwLkVudGl0eUxpc3RGaWx0ZXIoYXBwLlBsYXllciwgJ3BsYXllcicpLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2lnbmlmaWVyTGlzdCA9IG5ldyBhcHAuU2lnbmlmaWVyTGlzdChjaGFubmVsKSkge1xuICAgIHRoaXMuY2hhbm5lbC5jcmVhdGUodGhpcy5idXR0b25MaXN0KTtcbiAgICB0aGlzLmNoYW5uZWwuY3JlYXRlKHRoaXMuZW50aXR5TGlzdCk7XG4gICAgdGhpcy5jaGFubmVsLmNyZWF0ZSh0aGlzLmxldmVsTmFtZSk7XG4gICAgdGhpcy5jaGFubmVsLmNyZWF0ZSh0aGlzLmxvY2FsUGxheWVyKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVBc3luYyhzZXJ2ZXI6IGFwcC5hcGkuU2VydmVyKSB7XG4gICAgY29uc3QgcHJvY2Vzc2VzID0gYXdhaXQgc2VydmVyLnByb2Nlc3Nlc0FzeW5jKCk7XG4gICAgY29uc3QgdGFyZ2V0UHJvY2VzcyA9IHByb2Nlc3Nlcy5maW5kKHggPT4geC5jb21tYW5kLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3I1YXBleC5leGUnKSk7XG4gICAgaWYgKCF0YXJnZXRQcm9jZXNzKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvY2VzcyEnKTtcbiAgICBjb25zdCByZWdpb25zID0gYXdhaXQgdGFyZ2V0UHJvY2Vzcy5yZWdpb25zQXN5bmMoKTtcbiAgICBjb25zdCB0YXJnZXRSZWdpb24gPSByZWdpb25zLmZpbmQoeCA9PiB4LnBhdGhuYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3I1YXBleC5leGUnKSlcbiAgICAgID8/IHJlZ2lvbnMuZmluZCh4ID0+IHgucGVybXMgPT0gMSAmJiB4LnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9tZW1mZCcpKVxuICAgICAgPz8gcmVnaW9ucy5maW5kKHggPT4geC5zdGFydCA9PT0gQmlnSW50KDB4MTQwMDAwMDAwKSk7XG4gICAgaWYgKCF0YXJnZXRSZWdpb24pIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZWdpb24hJyk7XG4gICAgcmV0dXJuIG5ldyBDb3JlKHRhcmdldFJlZ2lvbi5zdGFydCwgbmV3IGFwcC5hcGkuQ2hhbm5lbCh0YXJnZXRQcm9jZXNzLnBpZCkpO1xuICB9XG5cbiAgYXN5bmMgcnVuQXN5bmMocmVuZGVyRnJhbWU6ICgpID0+IHZvaWQpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gW3RoaXMuaXRlbUZpbHRlciwgdGhpcy5ucGNGaWx0ZXIsIHRoaXMucGxheWVyRmlsdGVyXTtcbiAgICBhd2FpdCB0aGlzLmNoYW5uZWwucnVuQXN5bmMoKCkgPT4ge1xuICAgICAgdGhpcy5lbnRpdHlMaXN0LnVwZGF0ZSh0aGlzLmNoYW5uZWwpO1xuICAgICAgZmlsdGVycy5mb3JFYWNoKHggPT4geC51cGRhdGUodGhpcy5jaGFubmVsLCB0aGlzLmVudGl0eUxpc3QsIHRoaXMuc2lnbmlmaWVyTGlzdCkpO1xuICAgICAgcmVuZGVyRnJhbWUoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19