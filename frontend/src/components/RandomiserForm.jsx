import { useState } from "react"

export default function RandomiserForm({setLoadout}){
    const [career,setCareer] = useState(0)// stores id of desired career loadout, 0 = random

    const randomise = async e => {
        e.preventDefault()
        let id = career
        // get random career id if 0 selected
        if(career == 0){id = Math.floor(Math.random() * 9)+1}
        
        const careerData = await getData("getCareer",id)
        const talents = await getData("getTalents",id)
        const weapons = await getData("getWeapons",id)

        // select random talent options
        let randomTalents = []
        for (let i=0; i<18; i+=3){
            // generate random num between 0 and 2
            let num = Math.floor(Math.random() * 3)
            randomTalents.push(talents[i+num])
        }

        const chooseRandomWeapon = type => {
            const filtered = weapons.filter(weapon => weapon.weapon_type == type)
            return filtered[Math.floor(Math.random() * filtered.length)].weapon_name
        }

        setLoadout({"career":careerData[0],
            "weapon1":chooseRandomWeapon("melee"),
            "weapon2":chooseRandomWeapon(careerData[0].second_weapon_type),
            "talents":randomTalents})
    }    

    const getData = async (route,id) => {
        return await fetch(`http://localhost:8080/${route}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({id:id})
        })
        .then(res => res.json())
        .catch(err => console.error(err))
    }

    return(
    <form className="randomiser-form" onSubmit={e => randomise(e)}>
        <hr/>
        <h2>Select Career</h2>
        <select onChange={e => setCareer(e.target.value)}>
            <option default value={0}>Random Career</option>
            <option value={1}>Mercanery</option>
            <option value={2}>Huntsman</option>
            <option value={3}>Footknight</option>
            <option value={4}>Grail Knight</option>
            <option value={5}>Ranger Vetaren</option>
            <option value={6}>Iron Breaker</option>
            <option value={7}>Slayer</option>
            <option value={8}>Outcast Engineer</option>
            <option value={9}>Waystalker</option>
        </select>
        <button type="submit">GENERATE!</button>
        <hr/>
    </form>
    )
}