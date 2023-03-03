import Countdown, { CountdownRendererFn } from "react-countdown";
import CountDownRenderer from "./CountDown/CountDownRenderer";

export default function CountDown() {

    // Renderer callback with condition
    const countDown : CountdownRendererFn = ({ 
        days,
        hours,
        minutes,
        seconds,
    }) => {
        return (
            <CountDownRenderer days={days} hours={hours} minutes={minutes} seconds={seconds} />
        )
    }
    return (
        <div className="text-center">
            <p className="text-4xl font-extrabold">
                Voting will begin at :
            </p>
            <Countdown date={Date.now() + 100000000} renderer={countDown} />
        </div>
    )
};
