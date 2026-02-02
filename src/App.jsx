import './App.css'
import MyNavbar from './components/MyNavbar'
import ProductPage from './components/ProductPage'
import { BudgetProvider } from './contexts/BudgetProvider'

function App() {

    return (
        <BudgetProvider>
            <MyNavbar />
            <ProductPage />
        </BudgetProvider>
    )
}

export default App
