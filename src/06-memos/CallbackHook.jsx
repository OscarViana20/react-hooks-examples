import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./components/ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback(
      (value) => { setCounter((c) => c + value) },
      [],
    )

    return (
        <>
            <h1>Callback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>
        </>
    )
}
