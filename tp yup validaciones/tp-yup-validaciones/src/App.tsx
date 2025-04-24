import styles from "./App.module.css"
import { Form } from "./components/Form/Form.tsx"

function App() {

    return (
        <div className={styles.mainContainer}>
            <Form />
        </div>
    )
}

export default App
