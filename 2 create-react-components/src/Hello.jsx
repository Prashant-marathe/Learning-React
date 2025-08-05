function Hello() {
    let myName = 'Prashant'
    let fullName = () => {
        return myName + " " + "Marathe"
    }
    return <h3>Hello, This is {fullName()} speaking.</h3>
}

export default Hello;