import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booklist from "./Components/Booklist";
import Bookdetails from "./Components/Bookdetails";
import Login from "./Components/Login";
import Reg from "./Components/Reg";
import Logout from "./Components/Logout";
import Review from "./Components/Review";
import Bookmarkpage from "./Components/Bookmarkpage";
import Profile from "./Components/Profile";
import Error from "./Components/Error";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booklist" element={<Booklist/>} />
        <Route path="/book/:id" element={<Bookdetails />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Reg/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/reviews" element={<Review/>} />
        <Route path="/bookmarks" element={<Bookmarkpage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </Router>
  );
};

export default App;
