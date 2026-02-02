import { useBudget } from "../contexts/BudgetProvider";


export default function MyNavbar() {

    const { budgetMode, setBudgetMode } = useBudget();

    return (
        <header>
            <nav className="d-flex bg-info justify-content-between">
                <h4 className="bg-primary-subtle text-center m-0 border border-1 border-warning">E-commerce</h4>
                <button className="btn btn-danger btn-lg" onClick={() => setBudgetMode(!budgetMode)}>
                    {budgetMode ? "Disattiva modalità budget" : "Attiva modalità budget"}
                </button>
            </nav>
        </header>
    )

}