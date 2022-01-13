//rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

//auth
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
function Auth(auth: any, Auth: any) {
  throw new Error("Function not implemented.");
}
