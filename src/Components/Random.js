export function Random( {max, min}) {
    const randomValue = Math.floor(Math.random() * (max - min) + min);

    return(
        <div className="greetingBox">
            Random value between {min} and {max} -> {randomValue}
        </div>
    )
}