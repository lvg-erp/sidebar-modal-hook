import React from "react";
import Alert from "./alert/Alert";
import Main from "./Main";
import { AlertProvider } from "./alert/AlertContext";

// export const AlertContext = React.createContext<any>(null)

export default function App() {
    // const [alert, setAlert] = useState(false)
    // const toggleAlert = () => setAlert(!alert)
    
    return(
        <AlertProvider>
          <div className="container pt-3">
            <Alert />
            <Main />
          </div>   
        </AlertProvider>     
    )
}