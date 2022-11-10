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
const app = require(".");
const mobx = require("mobx");
class MainViewModel {
    constructor() {
        this.general = new app.general.MainViewModel();
        this.items = new app.items.MainViewModel();
        this.research = new app.research.MainViewModel();
        this.currentView = 0;
        this.itemSet = new Set();
        mobx.makeObservable(this);
        mobx.autorun(this.updateItemSet.bind(this));
    }
    changeView(view) {
        this.currentView = view;
    }
    updateItemSet() {
        const value = new Set();
        this.items.toItemSet(value);
        this.itemSet = value;
        value.delete(0);
    }
}
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MainViewModel.prototype, "changeView", null);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "currentView", void 0);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "itemSet", void 0);
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXdNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9zZXR0aW5ncy9NYWluVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFFN0IsTUFBYSxhQUFhO0lBS3hCO1FBSlMsWUFBTyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQyxVQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFhckQsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFHaEIsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFiMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUdELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFRTyxhQUFhO1FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFoQkM7SUFEQyxJQUFJLENBQUMsTUFBTTs7OzsrQ0FHWDtBQUdEO0lBREMsSUFBSSxDQUFDLFVBQVU7O2tEQUNBO0FBR2hCO0lBREMsSUFBSSxDQUFDLFVBQVU7OzhDQUNZO0FBbkI5QixzQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLic7XG5pbXBvcnQgKiBhcyBtb2J4IGZyb20gJ21vYngnO1xuXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCB7XG4gIHJlYWRvbmx5IGdlbmVyYWwgPSBuZXcgYXBwLmdlbmVyYWwuTWFpblZpZXdNb2RlbCgpO1xuICByZWFkb25seSBpdGVtcyA9IG5ldyBhcHAuaXRlbXMuTWFpblZpZXdNb2RlbCgpO1xuICByZWFkb25seSByZXNlYXJjaCA9IG5ldyBhcHAucmVzZWFyY2guTWFpblZpZXdNb2RlbCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG1vYngubWFrZU9ic2VydmFibGUodGhpcyk7XG4gICAgbW9ieC5hdXRvcnVuKHRoaXMudXBkYXRlSXRlbVNldC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIEBtb2J4LmFjdGlvblxuICBjaGFuZ2VWaWV3KHZpZXc6IG51bWJlcikge1xuICAgIHRoaXMuY3VycmVudFZpZXcgPSB2aWV3O1xuICB9XG5cbiAgQG1vYngub2JzZXJ2YWJsZVxuICBjdXJyZW50VmlldyA9IDA7XG5cbiAgQG1vYngub2JzZXJ2YWJsZVxuICBpdGVtU2V0ID0gbmV3IFNldDxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtU2V0KCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgdGhpcy5pdGVtcy50b0l0ZW1TZXQodmFsdWUpO1xuICAgIHRoaXMuaXRlbVNldCA9IHZhbHVlO1xuICAgIHZhbHVlLmRlbGV0ZSgwKTtcbiAgfVxufVxuIl19