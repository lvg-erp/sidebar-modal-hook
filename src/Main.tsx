import { useAlert } from "./alert/AlertContext";

export default function Main(){

    const {toggle} = useAlert()
    
    return(
        <>
            <h1>Welcome context RectJSX</h1>
            <button className="btn btn-success" onClick={toggle}>View alert!</button>         
        </>
    )
}