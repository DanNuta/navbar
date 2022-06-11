import * as moment from 'moment';

const PrevMonth = () => {

    const days = moment.weekdaysShort();

    return ( 
        <div>

            {days.map(item => (
                <h6>{item}</h6>
            ))}

        </div>
     );
}
 
export default PrevMonth;