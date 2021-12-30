import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import GameBases from "./pages/GameBases/GameBases";
import React from "react";
import "./app.css"
function App() {
  
  return (
    <BrowserRouter>
        
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<GameBases />} /> 
        {/* <Route path="/market" element={<Market />} />  */}
           {/* <Route exact strict path="/auctions" component={Auctions} />
        <Route exact strict path="/market" component={Market} /> */}
      </Routes>
        
     </BrowserRouter>
  );
}

export default App;
