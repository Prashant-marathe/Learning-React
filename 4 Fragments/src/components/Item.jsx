import styles from "./Item.module.css"

const Item = ({foodItem, handleOnClick}) => {
    return (
        <>
        <li  className={`${styles['kg-item']} list-group-item`}>{foodItem}<button type="button" className="btn btn-primary float-end" onClick={handleOnClick}>Buy Now</button></li>
        </>
    )
}

export default Item