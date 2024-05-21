import dayjs from 'dayjs'
import { Dayjs } from 'dayjs'
import Calendar from './index'

function CalendarDemo() {
  return (
    <>
      <Calendar
        value={dayjs('2023-11-08')}
        className={'aaa'}
        style={{ background: 'yellow' }}
      ></Calendar>

      <Calendar
        value={dayjs('2023-11-08')}
        dateRender={(value: Dayjs) => {
          return (
            <div>
              <p style={{ background: 'yellowgreen', height: '300px' }}>
                {value.format('YYYY/MM/DD')}
              </p>
            </div>
          )
        }}
      ></Calendar>

      <Calendar
        locale={'en'}
        value={dayjs('2023-11-08')}
        dateInnerContent={(value: Dayjs) => {
          return (
            <div>
              <p style={{ background: 'yellowgreen', height: '30px' }}>
                {value.format('YYYY/MM/DD')}
              </p>
            </div>
          )
        }}
      ></Calendar>
    </>
  )
}

export default CalendarDemo
