function Random() {
    let number = Math.random() * 100
    return <h1 style={{"backgroundColor":"red"}}>Random Number is {Math.floor(number)}</h1>
}

export default Random;