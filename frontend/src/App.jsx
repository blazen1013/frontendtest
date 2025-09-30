import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens/Screen";

const Placeholder = ({ title }) => (
  <div style={{ padding: 32 }}>
    <h2>{title}</h2>
    <p>임시 페이지입니다. 실제 화면이 준비되면 이 라우트의 element를 교체하세요.</p>
  </div>
);

const router = createBrowserRouter([
  // 메인
  { path: "/", element: <Screen /> },
  { path: "/mainScreen", element: <Screen /> },

  // 임시 페이지 라우트들
  { path: "/dashboard", element: <Placeholder title="대시보드" /> },
  { path: "/calendar", element: <Placeholder title="캘린더" /> },
  { path: "/my-tasks", element: <Placeholder title="내 업무" /> },
  { path: "/notices", element: <Placeholder title="공지사항" /> },
  { path: "/search", element: <Placeholder title="검색" /> },
  { path: "/org-chart", element: <Placeholder title="조직도" /> },
  { path: "/trash", element: <Placeholder title="휴지통" /> },
  { path: "/alerts", element: <Placeholder title="알람" /> },
  { path: "/settings", element: <Placeholder title="설정" /> },
  { path: "/employees", element: <Placeholder title="직원관리" /> },

  // 기타 경로는 메인으로
  { path: "/*", element: <Screen /> },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
