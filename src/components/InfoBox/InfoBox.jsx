function InfoBox(){
    const name = "Dawid Kalinowski"
    let date = new Date().toUTCString()
    var time = ""

     return <div className="infobox">
        <p>{name}</p>
        <p>{date}</p>
        <p>13:30</p>
     </div>
}

export default InfoBox