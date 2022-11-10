"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mobx = require("mobx");
const React = require("react");
const ReactDOM = require("react-dom");
const ui = require("ui");"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mobx = require("mobx");
const React = require("react");
const ReactDOM = require("react-dom");
const ui = require("ui");
const Runner_1 = require("./Runner");
const packageData = require('../package');
function App() {
    return (React.createElement(ui.material.ThemeProvider, { theme: theme },
        React.createElement(ui.material.CssBaseline, null),
        React.createElement(ui.MainView, { vm: ui.MainViewModel.create(Runner_1.Runner.create()) })));
}
const theme = ui.material.createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#4CAF50' }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    backgroundColor: '#333'
                },
                body: {
                    backgroundColor: '#333',
                },
                canvas: {
                    display: 'none',
                    position: 'fixed'
                },
                '::-webkit-scrollbar': {
                    width: '12px'
                },
                '::-webkit-scrollbar-track': {
                    backgroundColor: '#333'
                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: '#4CAF50',
                    border: '4px solid #333',
                    borderRadius: '12px'
                }
            }
        }
    }
});
(function () {
    document.title = `${packageData.name} (${packageData.version})`;
    mobx.configure({ enforceActions: 'never' });
    ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLHFDQUFnQztBQUNoQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFMUMsU0FBUyxHQUFHO0lBQ1YsT0FBTyxDQUNMLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3JDLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxPQUFHO1FBQzNCLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFJLENBQ25DLENBQzdCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDcEMsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0tBQzNCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsY0FBYyxFQUFFO1lBQ2QsY0FBYyxFQUFFO2dCQUNkLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtpQkFDeEI7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO2lCQUN4QjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE1BQU07b0JBQ2YsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNELHFCQUFxQixFQUFFO29CQUNyQixLQUFLLEVBQUUsTUFBTTtpQkFDZDtnQkFDRCwyQkFBMkIsRUFBRTtvQkFDM0IsZUFBZSxFQUFFLE1BQU07aUJBQ3hCO2dCQUNELDJCQUEyQixFQUFFO29CQUMzQixlQUFlLEVBQUUsU0FBUztvQkFDMUIsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsWUFBWSxFQUFFLE1BQU07aUJBQ3JCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsQ0FBQztJQUNDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsY0FBYyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDMUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgKiBhcyBtb2J4IGZyb20gJ21vYngnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIHVpIGZyb20gJ3VpJztcbmltcG9ydCB7UnVubmVyfSBmcm9tICcuL1J1bm5lcic7XG5jb25zdCBwYWNrYWdlRGF0YSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UnKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDx1aS5tYXRlcmlhbC5UaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8dWkubWF0ZXJpYWwuQ3NzQmFzZWxpbmUgLz5cbiAgICAgIDx1aS5NYWluVmlldyB2bT17dWkuTWFpblZpZXdNb2RlbC5jcmVhdGUoUnVubmVyLmNyZWF0ZSgpKX0gLz5cbiAgICA8L3VpLm1hdGVyaWFsLlRoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IHRoZW1lID0gdWkubWF0ZXJpYWwuY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2RhcmsnLFxuICAgIHByaW1hcnk6IHttYWluOiAnIzRDQUY1MCd9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlDc3NCYXNlbGluZToge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgaHRtbDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMnXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLCBcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJ1xuICAgICAgICB9LFxuICAgICAgICAnOjotd2Via2l0LXNjcm9sbGJhcic6IHtcbiAgICAgICAgICB3aWR0aDogJzEycHgnXG4gICAgICAgIH0sXG4gICAgICAgICc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMnXG4gICAgICAgIH0sXG4gICAgICAgICc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLFxuICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCAjMzMzJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMnB4J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuKGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC50aXRsZSA9IGAke3BhY2thZ2VEYXRhLm5hbWV9ICgke3BhY2thZ2VEYXRhLnZlcnNpb259KWA7XG4gIG1vYnguY29uZmlndXJlKHtlbmZvcmNlQWN0aW9uczogJ25ldmVyJ30pO1xuICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcbn0pKCk7XG4iXX0=
const Runner_1 = require("./Runner");
const packageData = require('../package');
function App() {
    return (React.createElement(ui.material.ThemeProvider, { theme: theme },
        React.createElement(ui.material.CssBaseline, null),
        React.createElement(ui.MainView, { vm: ui.MainViewModel.create(Runner_1.Runner.create()) })));
}
const theme = ui.material.createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#4CAF50' }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    backgroundColor: '#333'
                },
                body: {
                    backgroundColor: '#333',
                },
                canvas: {
                    display: 'none',
                    position: 'fixed'
                },
                '::-webkit-scrollbar': {
                    width: '12px'
                },
                '::-webkit-scrollbar-track': {
                    backgroundColor: '#333'
                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: '#4CAF50',
                    border: '4px solid #333',
                    borderRadius: '12px'
                }
            }
        }
    }
});
(function () {
    document.title = `${packageData.name} (${packageData.version})`;
    mobx.configure({ enforceActions: 'never' });
    ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLHFDQUFnQztBQUNoQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFMUMsU0FBUyxHQUFHO0lBQ1YsT0FBTyxDQUNMLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3JDLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxPQUFHO1FBQzNCLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFJLENBQ25DLENBQzdCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDcEMsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0tBQzNCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsY0FBYyxFQUFFO1lBQ2QsY0FBYyxFQUFFO2dCQUNkLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtpQkFDeEI7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO2lCQUN4QjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE1BQU07b0JBQ2YsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNELHFCQUFxQixFQUFFO29CQUNyQixLQUFLLEVBQUUsTUFBTTtpQkFDZDtnQkFDRCwyQkFBMkIsRUFBRTtvQkFDM0IsZUFBZSxFQUFFLE1BQU07aUJBQ3hCO2dCQUNELDJCQUEyQixFQUFFO29CQUMzQixlQUFlLEVBQUUsU0FBUztvQkFDMUIsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsWUFBWSxFQUFFLE1BQU07aUJBQ3JCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsQ0FBQztJQUNDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsY0FBYyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDMUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgKiBhcyBtb2J4IGZyb20gJ21vYngnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIHVpIGZyb20gJ3VpJztcbmltcG9ydCB7UnVubmVyfSBmcm9tICcuL1J1bm5lcic7XG5jb25zdCBwYWNrYWdlRGF0YSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UnKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDx1aS5tYXRlcmlhbC5UaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8dWkubWF0ZXJpYWwuQ3NzQmFzZWxpbmUgLz5cbiAgICAgIDx1aS5NYWluVmlldyB2bT17dWkuTWFpblZpZXdNb2RlbC5jcmVhdGUoUnVubmVyLmNyZWF0ZSgpKX0gLz5cbiAgICA8L3VpLm1hdGVyaWFsLlRoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IHRoZW1lID0gdWkubWF0ZXJpYWwuY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2RhcmsnLFxuICAgIHByaW1hcnk6IHttYWluOiAnIzRDQUY1MCd9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlDc3NCYXNlbGluZToge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgaHRtbDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMnXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnLCBcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJ1xuICAgICAgICB9LFxuICAgICAgICAnOjotd2Via2l0LXNjcm9sbGJhcic6IHtcbiAgICAgICAgICB3aWR0aDogJzEycHgnXG4gICAgICAgIH0sXG4gICAgICAgICc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMnXG4gICAgICAgIH0sXG4gICAgICAgICc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLFxuICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCAjMzMzJyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMnB4J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuKGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC50aXRsZSA9IGAke3BhY2thZ2VEYXRhLm5hbWV9ICgke3BhY2thZ2VEYXRhLnZlcnNpb259KWA7XG4gIG1vYnguY29uZmlndXJlKHtlbmZvcmNlQWN0aW9uczogJ25ldmVyJ30pO1xuICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcbn0pKCk7XG4iXX0=
