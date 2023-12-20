import { AppRoutes } from '../app.routes/app.routes';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function App() {
  return (
    <main>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </main>
  );
}
