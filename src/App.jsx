import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";

function App() {

  return (
    <BrowserRouter>
     <div className={`flex min-h-screen w-full bg-[#FAFAFA]`}>
         <Routes>
             <Route path={'/'} Component={Auth} />
             <Route path={'/repo'} Component={Home} />
         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
