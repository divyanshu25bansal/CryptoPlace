import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CoinApp from "./context.jsx";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import CryptoPage from "./Components/CryptoPage/CryptoPage.jsx";


const routes = createBrowserRouter([
  {path:"/",element:<App/>,
    children:[
      {path:"/" , element:<Home/>},
      {path:"/coin/:coinId" , element:<CryptoPage/>}
    ]}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <CoinApp>
     <RouterProvider router={routes}/>
     </CoinApp>


         {/* <coinApp>
         <BrowserRouter>
         <App/>
         </BrowserRouter>
         </coinApp> */}
  </React.StrictMode>
);
