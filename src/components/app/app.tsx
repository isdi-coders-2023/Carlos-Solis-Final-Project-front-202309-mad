import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { AppRoutes } from '../app.routes/app.routes';

export function App() {
  return (
    <>
      <Header></Header>

      <AppRoutes></AppRoutes>

      <Footer></Footer>
    </>
  );
}
export default App;
