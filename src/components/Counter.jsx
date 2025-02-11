import { useContext } from "react";
import { Button } from "react-daisyui";
import counterContext from "../context/counterContext";

const Counter = () => {
    const useCounter = useContext(counterContext);
    const { count, setCount } = useCounter;

    return (
        <>
            <div>
                <h1 className="text-xl text-white">Counter: {count || 0}</h1>

                <div className="buttons space-x-4 mt-8">
                    <Button
                        onClick={() => {
                            setCount((val) => val + 1);
                        }}
                        color="success"
                    >
                        Increment
                    </Button>
                    <Button
                        onClick={() => {
                            if (count > 0) {
                                setCount((val) => val - 1);
                            }
                        }}
                        color="error"
                    >
                        Decrement
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Counter;
