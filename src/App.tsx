import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Explorer from "./pages/explorer/Explorer";
import Git from "./pages/git/Git";
import { EditorProvider } from "./context/EditorContext";

const App = () => {
  return (
    <EditorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Explorer />} />
            <Route path="git" element={<Git />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EditorProvider>
  );
};

export default App;
