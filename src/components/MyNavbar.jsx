import { useBudget } from "../contexts/BudgetProvider";


export default function MyNavbar() {

    const { budgetMode, setBudgetMode } = useBudget();

    return (
        <header>
            <nav>
                <h2>E-commerce</h2>
                <button onClick={() => setBudgetMode(!budgetMode)}>
                    {budgetMode ? "Disattiva modalità budget" : "Attiva modalità budget"}
                </button>
            </nav>
        </header>
    )

}