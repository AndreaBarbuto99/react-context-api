import { useBudget } from "../contexts/BudgetProvider";
import { useState, useEffect } from "react";
import axios from "axios";

const endpoint = "https://fakestoreapi.com/products"

export default function ProductPage() {

    const { budgetMode } = useBudget();
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(endpoint)
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Non è stato possibile eseguire la tua richiesta", err))
    }, [])

    const budgetProducts = products.filter((product) => product.price <= 30);
    const contxValue = budgetMode ? budgetProducts : products;


    return (
        <>
            <div className="container row">
                {contxValue.map((product) => (

                    < div key={product.id} className="card border border-3 border-primary-subtle col-2 bg-secondary-subtle" >
                        <figure className="my-figure">
                            <img className="img-fluid" src={product.image} alt={product.title} />
                        </figure>
                        <figcaption>
                            <h2>{product.title}</h2>
                            <div className="text-end"><i>{product.category}</i></div>
                            <h4>Description</h4>
                            <p>{product.description}</p>
                            <span className="text-danger fw-bold">{product.price} €</span>
                        </figcaption>
                    </div >

                ))

                }
            </div>

        </>
    )
}