import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./components"

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0] //si la data tiene valores, entonces toma el 0

    // !null => true
    // !!null => false

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                isLoading ? 
                    <LoadingQuote/> : 
                    <Quote author={author} quote={quote}/>
            }

            <button 
                className="btn btn-primary" 
                disabled={isLoading}
                onClick={() => increment(1)}>
                Next quote
            </button>
            
        </>
    )
}
