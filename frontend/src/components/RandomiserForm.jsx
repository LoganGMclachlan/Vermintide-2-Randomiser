import { useState } from "react"

export default function RandomiserForm({setLoadout}){
    const [career,setCareer] = useState(1)// stores id of desired career loadout, 0 = random

    const randomise = async e => {
        e.preventDefault()
        // get random number if 0 selected

        // get career, weapon & talent info form db
        const careerData = getData("getCareer")
        const talents = await getData("getTalents")
        const weapons = getData("getWeapons")

        // select random talent options
        let randomTalents = []
        for (let i=0; i<18; i+=3){
            // generate random num between 0 and 2
            let num = Math.floor(Math.random() * 3)
            randomTalents.push(talents[i+num])
        }

        // select random weapons

        // set loadout
    }

    const getData = async route => {
        return await fetch(`http://localhost:8080/${route}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({id:career})
        })
        .then(res => res.json())
        .catch(err => console.error(err))
    }

    return(
    <form className="randomiser-form" onSubmit={e => randomise(e)}>
        <hr/>
        <h2>Select Career</h2>
        <select onSelect={e => setCareer(e.target.value)}>
            <option default value={1}>Random</option>
            <option value={1}>Mercanery</option>
            <option value={2}>Huntsman</option>
            <option value={3}>Footknight</option>
            <option value={4}>Grail Knight</option>
        </select>
        <button type="submit">GENERATE!</button>
        <hr/>
    </form>
    )
}