function Button(){
    function handleClick(){
        console.log("Przycisk zostak kliknięty")
    }

    return <button onClick={handleClick}>
        Naciśnij mnie
    </button>
}

export default Button