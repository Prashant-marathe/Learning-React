import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Container.module.css'

const Container = (props) => {
    return <div className={`${styles.container} container`}>{props.children}</div>
} 

export default Container