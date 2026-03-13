import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Explorer from "./pages/explorer/Explorer";
import { EditorProvider } from "./context/EditorContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Bot from "./pages/bot/Bot";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <EditorProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Explorer />} />
              <Route path="bot" element={<Bot />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </EditorProvider>
    </QueryClientProvider>
  );
};

export default App;
