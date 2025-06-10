import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
