import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("onExpire called")
    });

    return (
        <div>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
            <span>{seconds}</span>
        </div>
    );
}

export default function Timer() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5184000); // 10 minutes timer
    return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
    );
}
