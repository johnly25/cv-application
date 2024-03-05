
function Cv(props) {
    return (
        <div className='cv'>
            <div className='contacts'>
                <div><h3>{props.firstName} {props.lastName}</h3></div>
                <div><h4>{props.email} {props.phone}</h4></div>
            </div>
            <div className='education'>
                <h2>{props.school != '' && 'Education'}</h2>
                <div className='tab'>
                    <h3>{props.school} {(props.school != '' && props.titleOfStudy != '') && '-'} {props.titleOfStudy}</h3>
                    <h3>{props.dateOfStudy != '' && 'Date of Study:'} {props.dateOfStudy}</h3>
                </div>
            </div>
            <div>
                <h2>{(props.position != '' || props.company != '' ) && 'Work Experience'}</h2>
                <div className='tab'>
                    <h3>{props.position} {(props.position != '' && props.company != '' ) && 'at'} {props.company}</h3>
                    <div>
                        <h3>{props.main != '' && 'Main Responsibilities'}</h3>
                        <div className='responsibilities'>
                            <h4>{props.main}</h4>
                        </div>
                    </div>
                    <h5>{props.dateFrom} {(props.dateFrom != '' && props.dateUntil != '') && '-'} {props.dateUntil}</h5>
                </div>
            </div>
        </div>
    );
}

export default Cv;
