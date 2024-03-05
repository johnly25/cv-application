
function Cv(props) {
    return (
        <div className='cv'>
        <h2>{props.firstName}</h2>
        <h2>{props.lastName}</h2>
        <h2>{props.email}</h2>
        <h2>{props.phone}</h2>
        <h2>{props.school}</h2>
        <h2>{props.titleOfStudy}</h2>
        <h2>{props.dateOfStudy}</h2>
        <h2>{props.company}</h2>
        <h2>{props.position}</h2>
        <h2>{props.main}</h2>
        <h2>{props.dateFrom}</h2>
        <h2>{props.dateUntil}</h2>
        </div>
    );
}

export default Cv;
