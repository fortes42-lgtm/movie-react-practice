import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home.jsx";
import Detail from "@/pages/Detail.jsx";
import NotFound from "@/pages/NotFound.jsx";

// 라우트 정의
const APP_ROUTES = [
  { element: <Home />, path: "/" },
  { element: <Detail />, path: "/detail/:id" },
  { element: <NotFound />, path: "*" },
];

// 라우트 컴포넌트 생성 및 맵핑
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {APP_ROUTES.map((route) => (
            <Route element={route.element} key={route.path} path={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );

function App() {
  return <>
    Hello World!
\  </>;
}

export default App;
