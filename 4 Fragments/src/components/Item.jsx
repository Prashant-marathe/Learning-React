import styles from "./Item.module.css"

const Item = ({foodItem, handleOnClick, bought}) => {
    return (
        <>
        <li  className={`${styles['kg-item']} list-group-item ${bought && 'active'}`}>{foodItem}<button type="button" className="btn btn-primary float-end btn-custom" onClick={handleOnClick}>Buy Now</button></li>
        </>
    )
}

export default Item