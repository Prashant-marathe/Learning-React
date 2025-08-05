import styles from './App.module.css'
import InputBox from './components/InputBox'
import ButtonsDiv from './components/ButtonsDiv'
function App() {
  return <div>
    <div className={styles.calculator}>
      <InputBox></InputBox>
      <ButtonsDiv></ButtonsDiv>
    </div>

  </div>
}

export default App