
import { App } from "./App"
import './index.css'
import React from "react"
import ReactDom from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from "./Context/jwtContext";




const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
          <App />
      </UserProvider>
    </BrowserRouter>
</React.StrictMode>,
)