import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import VideoDetail from "./components/VideoDetail";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default App;
