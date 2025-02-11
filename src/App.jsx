import { useState } from "react";
import DataLayer1 from "./components/dataLayer1";
import counterContext from "./context/counterContext";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <counterContext.Provider value={{ count, setCount }}>
                <DataLayer1 />
            </counterContext.Provider>
        </>
    );
};

export default App;
