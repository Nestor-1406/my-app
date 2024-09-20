function List(){
    const numbers = [12,32,43,323,534,432,32,43]

    const number2 = numbers.map((value) => value*100)

    return <div>
        {number2.map((value, i) => {return <span key={i}>{value}, </span>})}
    </div>

}

export default List