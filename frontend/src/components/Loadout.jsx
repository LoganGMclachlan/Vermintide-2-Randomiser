export default function Loadout({loadout}){
    return(
    <div className="loadout">
        {loadout && <>
        <h1>{loadout.career.hero} - {loadout.career.title}</h1>
        <h2>{loadout.weapon1}</h2>
        <h2>{loadout.weapon2}</h2>
        <div className="talents" style={{"padding":"0px"}}>
            <h1>Talents</h1>
            {loadout.talents.map(talent => <div key={talent.id}>
                {talent.title}
            </div>)}
        </div>
        </>}
    </div>
    )
}