import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './pages/CartContext';
import Trending from './pages/Trending'; 
import CartPage from './pages/CartPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import { Consoles } from "./components/Consoles";
import { Playstation } from "./pages/Playstation";
import { Xbox } from "./pages/Xbox";
import { Nintendo } from "./pages/Nintendo";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header /> 

        <main>
          <Routes>            
            <Route path="/" element={<><Home /><Trending /><Consoles /></>} />

            <Route path="/playstation" element={<Playstation />} />
            <Route path="/xbox" element={<Xbox />} />
            <Route path="/nintendo" element={<Nintendo />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPage />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer /> 
      </BrowserRouter>
    </CartProvider>
  );
}
