import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MoviesDetails } from 'pages/MoviesDetails';
// import { NotFound } from '../pages/NotFound';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
