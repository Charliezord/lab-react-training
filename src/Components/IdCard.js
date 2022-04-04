export function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div className="idCard">
            <div>
                <img src={picture} alt={firstName} />
            </div>
            <div className="bio">
                <p><b>First Name:</b> {firstName}</p>
                <p><b>Last Name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {birth.toDateString()}</p>
            </div>
        </div>
    )
}