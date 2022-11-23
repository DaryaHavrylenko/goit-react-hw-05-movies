import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from './Container.styled';
import { Header } from './Header/Header.styled';
// import { Home } from '../pages/Home';
// import { Movies } from '../pages/Movies';
// import { MoviesDetails } from 'pages/MoviesDetails';

// import { Navigation } from './Navigation/Navigation';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Suspense fallback={<>Page is loading...</>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
