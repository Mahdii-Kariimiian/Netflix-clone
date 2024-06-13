import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import NotFound from "./pages/not-found/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
