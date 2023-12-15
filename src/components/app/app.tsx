import { Footer } from '../footer/footer';
import { Header } from '../header/header';
// import { Login } from '../login/login';
// import { Register } from '../register/register';
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
