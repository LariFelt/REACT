import React from "react";

export default function Laskin() {
    const [laskuri, setLaskuri] = React.useState(0);


function lisaa()
{
    setLaskuri(laskuri + 1)
}
function vahenna()
{
    setLaskuri(laskuri - 1)
}

return (
    <div className="counter">
        <button className="counter--minus" onClick={vahenna}></button>
        -
    <div className="counter--count">
        <h1>{laskuri}</h1>
    </div>
    <button className="counter--plus" onClick={lisaa}>
        +
    </button>
    </div>
)
}