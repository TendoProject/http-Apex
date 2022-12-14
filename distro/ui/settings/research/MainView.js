"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainView = void 0;
const app = require(".");
const React = require("react");
const ui = require("ui");
exports.MainView = ui.createView(({ vm }) => (React.createElement(React.Fragment, null,
    React.createElement(ui.material.Typography, { variant: "h5" }, app.language.research),
    React.createElement(ui.material.Alert, { severity: "warning" }, app.language.researchWarning),
    React.createElement(app.RecoilView, { vm: vm.recoil }))));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdWkvc2V0dGluZ3MvcmVzZWFyY2gvTWFpblZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUN6QiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBRVosUUFBQSxRQUFRLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBMEIsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUN2RSxvQkFBQyxLQUFLLENBQUMsUUFBUTtJQUNiLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFDLE9BQU8sRUFBQyxJQUFJLElBQ2pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNDO0lBQ3pCLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFDLFFBQVEsRUFBQyxTQUFTLElBQ2xDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUNYO0lBQ3BCLG9CQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUksQ0FDbEIsQ0FDbEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgdWkgZnJvbSAndWknO1xuXG5leHBvcnQgY29uc3QgTWFpblZpZXcgPSB1aS5jcmVhdGVWaWV3PHt2bTogYXBwLk1haW5WaWV3TW9kZWx9Pigoe3ZtfSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHVpLm1hdGVyaWFsLlR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICB7YXBwLmxhbmd1YWdlLnJlc2VhcmNofVxuICAgIDwvdWkubWF0ZXJpYWwuVHlwb2dyYXBoeT5cbiAgICA8dWkubWF0ZXJpYWwuQWxlcnQgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgICB7YXBwLmxhbmd1YWdlLnJlc2VhcmNoV2FybmluZ31cbiAgICA8L3VpLm1hdGVyaWFsLkFsZXJ0PlxuICAgIDxhcHAuUmVjb2lsVmlldyB2bT17dm0ucmVjb2lsfSAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKSk7XG4iXX0=