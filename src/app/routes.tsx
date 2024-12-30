import { Route, Routes } from "react-router-dom";
import { Register } from "../component/register/Register";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import DetailsCharacter from "../pages/characters/DetailsCharacter";
import Comics from "../pages/comics/Comics";
import DetailsComic from "../pages/comics/DetailsComics";
import Home from "../pages/home/Home";
import Login from "../pages/login";
import DetailsSeries from "../pages/series/DetailsSerie";
import SeriesLayout from "../pages/series/Series";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/character/:id" element={<DetailsCharacter />} />
      <Route path="/comics/:title" element={<DetailsSeries />} />
      <Route path="/comics/:id" element={<DetailsComic />} />
      <Route path="/series" element={<SeriesLayout />} />
      <Route path="/comics" element={<Comics />} />
    </Routes>
  );
}

export default AppRoutes;
