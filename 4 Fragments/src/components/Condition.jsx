function Condition({items}) {

    let emptyMessage = items.length === 0 ? <h3>There is no food</h3> : null

    return emptyMessage;
}

export default Condition;