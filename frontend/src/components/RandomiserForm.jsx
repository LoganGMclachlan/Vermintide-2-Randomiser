

export default function RandomiserForm(){
    return(
    <form className="randomiser-form">
        <h2>Select Career</h2>
        <select>
            <option default>Random</option>
            <option>Mercanery</option>
            <option>Huntsman</option>
            <option>Footknight</option>
            <option>Grail Knight</option>
        </select>
        <button type="submit">GENERATE!</button>
    </form>
    )
}