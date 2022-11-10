"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainViewModel = void 0;
const app = require(".");
const ui = require("ui");
class MainViewModel {
    constructor() {
        this.map = new app.MapViewModel();
        this.radar = new app.RadarViewModel();
        this.sense = new app.SenseViewModel();
        this.viewType = new ui.StringStorage('settings.viewType', app.MainType.Radar);
    }
}
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXdNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91aS9zZXR0aW5ncy9nZW5lcmFsL01haW5WaWV3TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUV6QixNQUFhLGFBQWE7SUFBMUI7UUFDVyxRQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pDLFVBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQyxhQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFlLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEcsQ0FBQztDQUFBO0FBTEQsc0NBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLic7XG5pbXBvcnQgKiBhcyB1aSBmcm9tICd1aSc7XG5cbmV4cG9ydCBjbGFzcyBNYWluVmlld01vZGVsIHtcbiAgcmVhZG9ubHkgbWFwID0gbmV3IGFwcC5NYXBWaWV3TW9kZWwoKTtcbiAgcmVhZG9ubHkgcmFkYXIgPSBuZXcgYXBwLlJhZGFyVmlld01vZGVsKCk7XG4gIHJlYWRvbmx5IHNlbnNlID0gbmV3IGFwcC5TZW5zZVZpZXdNb2RlbCgpO1xuICByZWFkb25seSB2aWV3VHlwZSA9IG5ldyB1aS5TdHJpbmdTdG9yYWdlPGFwcC5NYWluVHlwZT4oJ3NldHRpbmdzLnZpZXdUeXBlJywgYXBwLk1haW5UeXBlLlJhZGFyKTtcbn1cbiJdfQ==