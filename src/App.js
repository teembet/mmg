import { Route, Routes } from "react-router-dom";
import Loans from "./views/loans";

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Loans/>}/>
    </Routes>
    </div>
  );
}

export default App;
