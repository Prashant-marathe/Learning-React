import styles from './ButtonsDiv.module.css'

function ButtonsDiv({onButtonClick}) {
    let keys = ['C', '1', , '2', , '+', , '3', '4', '-', '5', '6', '*', '7', '8', '/',, '=', '9', '0', '.']


    return <div className={styles.ButtonsDiv}>
        {keys.map((key) => (
            <button key={key} type="button" onClick={() => onButtonClick(key)} className={styles.Button}>{key}</button>
        ))}
      </div>
}

export default ButtonsDiv