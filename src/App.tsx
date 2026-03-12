import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaddingContainer from "./components/containers/PaddingContainer";
import SectionContainer from "./components/containers/SectionContainer";
import RootLayout from "./components/layouts/RootLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <PaddingContainer>
                <SectionContainer>
                  <div className="text-red-500">Hello World</div>
                </SectionContainer>
              </PaddingContainer>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
