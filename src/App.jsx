import './App.css'
import MyNavbar from './components/MyNavbar'
import { BudgetProvider } from './contexts/BudgetProvider'

function App() {

    return (
        <BudgetProvider>
            <MyNavbar />
        </BudgetProvider>
    )
}

export default App
