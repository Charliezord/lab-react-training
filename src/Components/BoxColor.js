export function BoxColor({r,g,b}) {
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);

    return(
        <div className="greetingBox" style={{backgroundColor: `${rgbColor}`}}>
            rgb({r}, {g}, {b})
        </div>
    )
}