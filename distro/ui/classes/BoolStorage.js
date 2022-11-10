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
exports.BoolStorage = void 0;
const mobx = require("mobx");
class BoolStorage {
    constructor(key, defaultValue) {
        this.key = key;
        const value = localStorage.getItem(key);
        this.value = value ? /^true$/i.test(value) : defaultValue;
        mobx.makeObservable(this);
    }
    change(value) {
        this.value = value;
        localStorage.setItem(this.key, String(this.value));
    }
}
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], BoolStorage.prototype, "change", null);
__decorate([
    mobx.observable,
    __metadata("design:type", Boolean)
], BoolStorage.prototype, "value", void 0);
exports.BoolStorage = BoolStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbFN0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvY2xhc3Nlcy9Cb29sU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNkI7QUFFN0IsTUFBYSxXQUFXO0lBQ3RCLFlBQTZCLEdBQVcsRUFBRSxZQUFxQjtRQUFsQyxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxNQUFNLENBQUMsS0FBYztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FJRjtBQVBDO0lBREMsSUFBSSxDQUFDLE1BQU07Ozs7eUNBSVg7QUFHRDtJQURDLElBQUksQ0FBQyxVQUFVOzswQ0FDRDtBQWRqQixrQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vYnggZnJvbSAnbW9ieCc7XG5cbmV4cG9ydCBjbGFzcyBCb29sU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyAvXnRydWUkL2kudGVzdCh2YWx1ZSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgbW9ieC5tYWtlT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfVxuXG4gIEBtb2J4LmFjdGlvblxuICBjaGFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIFN0cmluZyh0aGlzLnZhbHVlKSk7XG4gIH1cblxuICBAbW9ieC5vYnNlcnZhYmxlXG4gIHZhbHVlOiBib29sZWFuO1xufVxuIl19