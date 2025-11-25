import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Detail, NotFound } from "@/pages";
import MainLayout from "@/components/layout/MainLayout.jsx";
import { ROUTE_PATHS } from "@/constants/url.js";

// 라우트 정의
const APP_ROUTES = [
  { element: <Home />, path: ROUTE_PATHS.HOME },
  { element: <Detail />, path: ROUTE_PATHS.DETAIL },
  { element: <NotFound />, path: ROUTE_PATHS.NOT_FOUND },
];

// 라우트 컴포넌트 생성 및 맵핑
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {APP_ROUTES.map((route) => (
              <Route
                element={route.element}
                key={route.path}
                path={route.path}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
