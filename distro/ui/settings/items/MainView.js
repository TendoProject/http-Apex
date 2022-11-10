"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainView = void 0;
const app = require(".");
const React = require("react");
const ui = require("ui");
exports.MainView = ui.createView(({ vm }) => (React.createElement(React.Fragment, null,
    React.createElement(ui.material.Typography, { variant: "h5" }, app.language.items),
    vm.areas.map((x, i) => (React.createElement(app.AreaView, { key: i, vm: x }))))));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdWkvc2V0dGluZ3MvaXRlbXMvTWFpblZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBRVosUUFBQSxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBMEIsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUN2RSxvQkFBQyxLQUFLLENBQUMsUUFBUTtJQUNiLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFDLE9BQU8sRUFBQyxJQUFJLElBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUNJO0lBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDdEIsb0JBQUMsR0FBRyxDQUFDLFFBQVEsSUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUksQ0FDaEMsQ0FBQyxDQUNhLENBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHVpIGZyb20gJ3VpJztcblxuZXhwb3J0IGNvbnN0IE1haW5WaWV3ID0gdWkuY3JlYXRlVmlldzx7dm06IGFwcC5NYWluVmlld01vZGVsfT4oKHt2bX0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDx1aS5tYXRlcmlhbC5UeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAge2FwcC5sYW5ndWFnZS5pdGVtc31cbiAgICA8L3VpLm1hdGVyaWFsLlR5cG9ncmFwaHk+XG4gICAge3ZtLmFyZWFzLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgPGFwcC5BcmVhVmlldyBrZXk9e2l9IHZtPXt4fSAvPlxuICAgICkpfVxuICA8L1JlYWN0LkZyYWdtZW50PlxuKSk7XG4iXX0=