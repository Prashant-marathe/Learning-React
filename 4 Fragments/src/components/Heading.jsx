import styles from './Heading.module.css';

function Heading() {
    return <h1 className={` ${styles['heading']} text-center`}>Healthy Food</h1>
}

export default Heading;