import styles from './App.module.css'
import InputBox from './components/InputBox'
import ButtonsDiv from './components/ButtonsDiv'
import { useState } from 'react'
function App() {

  let [calVal, setcalVal] = useState("");
  const onButtonClick = (key) => {
    if(key === "C") {
      setcalVal("")
    }else if(key === "=") {
      const result = eval(calVal)
      setcalVal(result)
    }else{
      const newDisplayValue = calVal + key;
      setcalVal(newDisplayValue)
    }
  }

  return <div>
    <div className={styles.calculator}>
      <InputBox calVal={calVal}></InputBox>
      <ButtonsDiv onButtonClick={onButtonClick}></ButtonsDiv>
    </div>

  </div>
}

export default App