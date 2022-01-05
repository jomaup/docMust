import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import {Route, Routes} from 'react-router-dom';
import Missing from "./Missing";
import About from "./About";
import Documentation from "./Documentation";
import Jotest from "./Jotest";
import Test from "./Test";
import Login from "./Login";


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}



function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">

     <Header />
     <Routes> 
            <Route path="/" element={<Content />} >
              <Route index element={<Documentation />} />
              <Route path="*" element={<Missing />} />
              <Route path="/about" element ={<About />} />
              <Route path="/jotest" element={<Jotest />} />
              <Route path="/test" element={<Test />} />
            </Route>
      </Routes>

    <Footer />
     

     

    </div>

  );
}

export default App;
