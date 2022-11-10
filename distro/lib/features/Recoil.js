"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recoil = void 0;
const app = require(".");
class Recoil {
    constructor() {
        this.vecPunchWeaponAngle = app.core.VectorData.none;
    }
    update(buttonList, localPlayer, options) {
        if (localPlayer.viewAngle.source.syncId) {
            /* We sent an update, but did not receive confirmation! */
        }
        else if (!buttonList.inAttack.value) {
            this.vecPunchWeaponAngle = app.core.VectorData.none;
        }
        else {
            const vecPunchWeaponAngle = localPlayer.vecPunchWeaponAngle.value;
            const viewAngle = localPlayer.viewAngle.value;
            if (Math.abs(vecPunchWeaponAngle.x) >= 0.5 || Math.abs(vecPunchWeaponAngle.y) >= 0.5 || Math.abs(vecPunchWeaponAngle.z) >= 0.5) {
                const x = viewAngle.x + (this.vecPunchWeaponAngle.x - vecPunchWeaponAngle.x) * options.percentage;
                const y = viewAngle.y + (this.vecPunchWeaponAngle.y - vecPunchWeaponAngle.y) * options.percentage;
                localPlayer.viewAngle.delta(new app.core.VectorData(x, y, viewAngle.z));
                this.vecPunchWeaponAngle = vecPunchWeaponAngle;
            }
        }
    }
}
exports.Recoil = Recoil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjb2lsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9SZWNvaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBRXpCLE1BQWEsTUFBTTtJQUFuQjtRQUNVLHdCQUFtQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQWtCekQsQ0FBQztJQWhCQyxNQUFNLENBQUMsVUFBK0IsRUFBRSxXQUE0QixFQUFFLE9BQXVCO1FBQzNGLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLDBEQUEwRDtTQUMzRDthQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3JEO2FBQU07WUFDTCxNQUFNLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7WUFDbEUsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDOUgsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDbEcsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDbEcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7YUFDaEQ7U0FDRjtJQUNILENBQUM7Q0FDRjtBQW5CRCx3QkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLic7XG5cbmV4cG9ydCBjbGFzcyBSZWNvaWwge1xuICBwcml2YXRlIHZlY1B1bmNoV2VhcG9uQW5nbGUgPSBhcHAuY29yZS5WZWN0b3JEYXRhLm5vbmU7XG5cbiAgdXBkYXRlKGJ1dHRvbkxpc3Q6IGFwcC5jb3JlLkJ1dHRvbkxpc3QsIGxvY2FsUGxheWVyOiBhcHAuY29yZS5QbGF5ZXIsIG9wdGlvbnM6IElSZWNvaWxPcHRpb25zKSB7XG4gICAgaWYgKGxvY2FsUGxheWVyLnZpZXdBbmdsZS5zb3VyY2Uuc3luY0lkKSB7XG4gICAgICAvKiBXZSBzZW50IGFuIHVwZGF0ZSwgYnV0IGRpZCBub3QgcmVjZWl2ZSBjb25maXJtYXRpb24hICovXG4gICAgfSBlbHNlIGlmICghYnV0dG9uTGlzdC5pbkF0dGFjay52YWx1ZSkge1xuICAgICAgdGhpcy52ZWNQdW5jaFdlYXBvbkFuZ2xlID0gYXBwLmNvcmUuVmVjdG9yRGF0YS5ub25lO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2ZWNQdW5jaFdlYXBvbkFuZ2xlID0gbG9jYWxQbGF5ZXIudmVjUHVuY2hXZWFwb25BbmdsZS52YWx1ZTtcbiAgICAgIGNvbnN0IHZpZXdBbmdsZSA9IGxvY2FsUGxheWVyLnZpZXdBbmdsZS52YWx1ZTtcbiAgICAgIGlmIChNYXRoLmFicyh2ZWNQdW5jaFdlYXBvbkFuZ2xlLngpID49IDAuNSB8fCBNYXRoLmFicyh2ZWNQdW5jaFdlYXBvbkFuZ2xlLnkpID49IDAuNSB8fCBNYXRoLmFicyh2ZWNQdW5jaFdlYXBvbkFuZ2xlLnopID49IDAuNSkge1xuICAgICAgICBjb25zdCB4ID0gdmlld0FuZ2xlLnggKyAodGhpcy52ZWNQdW5jaFdlYXBvbkFuZ2xlLnggLSB2ZWNQdW5jaFdlYXBvbkFuZ2xlLngpICogb3B0aW9ucy5wZXJjZW50YWdlO1xuICAgICAgICBjb25zdCB5ID0gdmlld0FuZ2xlLnkgKyAodGhpcy52ZWNQdW5jaFdlYXBvbkFuZ2xlLnkgLSB2ZWNQdW5jaFdlYXBvbkFuZ2xlLnkpICogb3B0aW9ucy5wZXJjZW50YWdlO1xuICAgICAgICBsb2NhbFBsYXllci52aWV3QW5nbGUuZGVsdGEobmV3IGFwcC5jb3JlLlZlY3RvckRhdGEoeCwgeSwgdmlld0FuZ2xlLnopKTtcbiAgICAgICAgdGhpcy52ZWNQdW5jaFdlYXBvbkFuZ2xlID0gdmVjUHVuY2hXZWFwb25BbmdsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgSVJlY29pbE9wdGlvbnMgPSB7XG4gIHBlcmNlbnRhZ2U6IG51bWJlciAgICAgIC8vIDAgPC0+IDFcbn1cbiJdfQ==