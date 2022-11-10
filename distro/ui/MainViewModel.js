"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainViewModel = void 0;
const app = require("lib");
const mobx = require("mobx");
const ui = require("ui");
class MainViewModel {
    constructor(renderFrame) {
        this.renderFrame = renderFrame;
        this.isLoading = true;
        this.errorMessage = '';
        this.showSettings = false;
        this.settings = new ui.settings.MainViewModel();
        mobx.makeObservable(this);
    }
    static create(renderFrame) {
        const vm = new MainViewModel(renderFrame);
        vm.connectAsync();
        return vm;
    }
    async connectAsync() {
        try {
            this.isLoading = true;
            const server = new app.api.Server();
            const version = await server.versionAsync();
            if (!version) {
                this.errorMessage = ui.language.errorDriver;
            }
            else if (version !== app.api.VERSION) {
                this.errorMessage = ui.language.errorVersion;
            }
            else if (!await this.startAsync(server)) {
                this.errorMessage = ui.language.errorProcess;
            }
            else {
                this.errorMessage = '';
            }
        }
        catch (err) {
            this.disconnect(err);
        }
        finally {
            this.isLoading = false;
        }
    }
    toggleSettings() {
        this.showSettings = !this.showSettings;
    }
    get hasError() {
        return Boolean(this.errorMessage);
    }
    disconnect(reason) {
        this.errorMessage = ui.language.error;
        console.error(reason);
    }
    async startAsync(server) {
        const core = await app.core.Core
            .createAsync(server)
            .catch(() => { });
        if (core) {
            core.runAsync(() => this.renderFrame(core, this)).catch(this.disconnect.bind(this));
            return true;
        }
        else {
            return false;
        }
    }
}
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MainViewModel.prototype, "connectAsync", null);
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainViewModel.prototype, "toggleSettings", null);
__decorate([
    mobx.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MainViewModel.prototype, "hasError", null);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "isLoading", void 0);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "errorMessage", void 0);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "showSettings", void 0);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "settings", void 0);
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainViewModel.prototype, "disconnect", null);
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app.api.Server]),
    __metadata("design:returntype", Promise)
], MainViewModel.prototype, "startAsync", null);
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXdNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9NYWluVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBRXpCLE1BQWEsYUFBYTtJQUN4QixZQUNtQixXQUFnRTtRQUFoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBcUQ7UUEyQ25GLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHWixhQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBbkRsRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQWdFO1FBQzVFLE1BQU0sRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFHRCxLQUFLLENBQUMsWUFBWTtRQUNoQixJQUFJO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BDLE1BQU0sT0FBTyxHQUFHLE1BQU0sTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQzthQUM3QztpQkFBTSxJQUFJLE9BQU8sS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQzthQUM5QztpQkFBTSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEI7Z0JBQVM7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7SUFHRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQztJQUdELElBQUksUUFBUTtRQUNWLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBZU8sVUFBVSxDQUFDLE1BQWU7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFHTyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQXNCO1FBQzdDLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQzdCLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDbkIsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0NBQ0Y7QUE3REM7SUFEQyxJQUFJLENBQUMsTUFBTTs7OztpREFvQlg7QUFHRDtJQURDLElBQUksQ0FBQyxNQUFNOzs7O21EQUdYO0FBR0Q7SUFEQyxJQUFJLENBQUMsUUFBUTs7OzZDQUdiO0FBR0Q7SUFEQyxJQUFJLENBQUMsVUFBVTs7Z0RBQ0M7QUFHakI7SUFEQyxJQUFJLENBQUMsVUFBVTs7bURBQ0U7QUFHbEI7SUFEQyxJQUFJLENBQUMsVUFBVTs7bURBQ0s7QUFHckI7SUFEQyxJQUFJLENBQUMsVUFBVTs7K0NBQ29DO0FBR3BEO0lBREMsSUFBSSxDQUFDLE1BQU07Ozs7K0NBSVg7QUFHRDtJQURDLElBQUksQ0FBQyxNQUFNOztxQ0FDcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNOzsrQ0FVOUM7QUF6RUgsc0NBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJ2xpYic7XG5pbXBvcnQgKiBhcyBtb2J4IGZyb20gJ21vYngnO1xuaW1wb3J0ICogYXMgdWkgZnJvbSAndWknO1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJGcmFtZTogKGNvcmU6IGFwcC5jb3JlLkNvcmUsIHZtOiB1aS5NYWluVmlld01vZGVsKSA9PiB2b2lkKSB7XG4gICAgbW9ieC5tYWtlT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUocmVuZGVyRnJhbWU6IChjb3JlOiBhcHAuY29yZS5Db3JlLCB2bTogdWkuTWFpblZpZXdNb2RlbCkgPT4gdm9pZCkge1xuICAgIGNvbnN0IHZtID0gbmV3IE1haW5WaWV3TW9kZWwocmVuZGVyRnJhbWUpO1xuICAgIHZtLmNvbm5lY3RBc3luYygpO1xuICAgIHJldHVybiB2bTtcbiAgfVxuXG4gIEBtb2J4LmFjdGlvblxuICBhc3luYyBjb25uZWN0QXN5bmMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHNlcnZlciA9IG5ldyBhcHAuYXBpLlNlcnZlcigpO1xuICAgICAgY29uc3QgdmVyc2lvbiA9IGF3YWl0IHNlcnZlci52ZXJzaW9uQXN5bmMoKTtcbiAgICAgIGlmICghdmVyc2lvbikge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHVpLmxhbmd1YWdlLmVycm9yRHJpdmVyO1xuICAgICAgfSBlbHNlIGlmICh2ZXJzaW9uICE9PSBhcHAuYXBpLlZFUlNJT04pIHtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB1aS5sYW5ndWFnZS5lcnJvclZlcnNpb247XG4gICAgICB9IGVsc2UgaWYgKCFhd2FpdCB0aGlzLnN0YXJ0QXN5bmMoc2VydmVyKSkge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHVpLmxhbmd1YWdlLmVycm9yUHJvY2VzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAbW9ieC5hY3Rpb25cbiAgdG9nZ2xlU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zaG93U2V0dGluZ3MgPSAhdGhpcy5zaG93U2V0dGluZ3M7XG4gIH1cblxuICBAbW9ieC5jb21wdXRlZFxuICBnZXQgaGFzRXJyb3IoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5lcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgQG1vYngub2JzZXJ2YWJsZVxuICBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gIEBtb2J4Lm9ic2VydmFibGVcbiAgZXJyb3JNZXNzYWdlID0gJyc7XG5cbiAgQG1vYngub2JzZXJ2YWJsZVxuICBzaG93U2V0dGluZ3MgPSBmYWxzZTtcblxuICBAbW9ieC5vYnNlcnZhYmxlXG4gIHJlYWRvbmx5IHNldHRpbmdzID0gbmV3IHVpLnNldHRpbmdzLk1haW5WaWV3TW9kZWwoKTtcblxuICBAbW9ieC5hY3Rpb25cbiAgcHJpdmF0ZSBkaXNjb25uZWN0KHJlYXNvbjogdW5rbm93bikge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdWkubGFuZ3VhZ2UuZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihyZWFzb24pO1xuICB9XG5cbiAgQG1vYnguYWN0aW9uXG4gIHByaXZhdGUgYXN5bmMgc3RhcnRBc3luYyhzZXJ2ZXI6IGFwcC5hcGkuU2VydmVyKSB7XG4gICAgY29uc3QgY29yZSA9IGF3YWl0IGFwcC5jb3JlLkNvcmVcbiAgICAgIC5jcmVhdGVBc3luYyhzZXJ2ZXIpXG4gICAgICAuY2F0Y2goKCkgPT4ge30pO1xuICAgIGlmIChjb3JlKSB7XG4gICAgICBjb3JlLnJ1bkFzeW5jKCgpID0+IHRoaXMucmVuZGVyRnJhbWUoY29yZSwgdGhpcykpLmNhdGNoKHRoaXMuZGlzY29ubmVjdC5iaW5kKHRoaXMpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=