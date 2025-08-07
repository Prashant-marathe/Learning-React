import styles from './inputBox.module.css'

function InputBox({calVal}) {
    return (
         <input type="text" placeholder="0" value={calVal} className={styles.inputBox} readOnly />
    )
}

export default InputBox