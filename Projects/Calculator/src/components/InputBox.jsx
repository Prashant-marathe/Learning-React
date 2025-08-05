import styles from './inputBox.module.css'

function InputBox() {
    return (
         <input type="text" placeholder="0" className={styles.inputBox} />
    )
}

export default InputBox