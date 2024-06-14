import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Signin from "./pages/signin/index";
import NotFound from "./pages/not-found/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
