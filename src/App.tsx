import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { ExplorerPage, GitPage } from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<ExplorerPage />} />
          <Route path="git" element={<GitPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
