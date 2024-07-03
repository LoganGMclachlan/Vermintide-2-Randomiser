import title from "../assets/logo.png"
import RandomiserForm from "./RandomiserForm"

export default function Menu({setLoadout}){

    return(
    <div className="menu">
        <img src={title} className="title-img"/>
        <h1>Randomiser</h1>
        <RandomiserForm setLoadout={setLoadout}/>
        <p>Welcome to the Vermintide 2 randomiser. 
            Use this tool to generate random weapons 
            and career talent selections.
        </p>
        <p>
            If you find a bug or just want to give some 
            feedback, you can email me at:<br/>
            <u>logan.g.mclachlan@gmail.com</u>
        </p>
        <p>
            This is a fan made site.
        </p>
    </div>
    )
}