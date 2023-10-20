import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyled from "./styles/GlobalStyles";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
