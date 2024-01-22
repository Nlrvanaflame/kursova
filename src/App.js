import "./global.css"

import LandingPage from "./components/LandingPage";
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <hr />
          <Outlet />
        </div>
      ),
      children: [
        { path: '/', element: <LandingPage />, index: true },
        { path: '/page1', element: <Page1/> },
        { path: '/page2', element: <Page2 /> },
        { path: '/page3', element: <Page3 /> },
        { path: '/page4', element: <Page4 /> },
        { path: '/page5', element: <Page5 /> },
        { path: '/page6', element: <Page6/> },
        { path: '/page7', element: <Page7 /> },
        { path: '/page8', element: <Page8 /> },
        { path: '/page9', element: <Page9 /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
