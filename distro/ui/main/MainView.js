"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainView = void 0;
const React = require("react");
const ui = require("ui");
exports.MainView = ui.createView(() => {
    React.useEffect(() => {
        const canvas = document.getElementById('canvas');
        canvas.style.display = 'inline';
        return () => onUnmount(canvas);
    }, []);
    return null;
});
function onUnmount(canvas) {
    canvas.style.display = 'none';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvbWFpbi9NYWluVmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUVaLFFBQUEsUUFBUSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO0lBQ3pDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ25CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUNoQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxTQUFTLENBQUMsTUFBbUI7SUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyB1aSBmcm9tICd1aSc7XG5cbmV4cG9ydCBjb25zdCBNYWluVmlldyA9IHVpLmNyZWF0ZVZpZXcoKCkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgIHJldHVybiAoKSA9PiBvblVubW91bnQoY2FudmFzKTtcbiAgfSwgW10pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuXG5mdW5jdGlvbiBvblVubW91bnQoY2FudmFzOiBIVE1MRWxlbWVudCkge1xuICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cbiJdfQ==