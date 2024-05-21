import { useContext } from 'react'
import { Dayjs } from 'dayjs'
import cs from 'classnames'
import { CalendarProps } from '../index'
import LocaleContext from '../LocaleContext'
import allLocales from '../locale'
import { isFunction } from '@/utils/general'

const weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

interface MonthCalendar extends CalendarProps {
  selectHandler?: (date: Dayjs) => void
  curMonth: Dayjs
}

type DaysInfo = Array<{ date: Dayjs; currentMonth: boolean }>

function getAllDays(date: Dayjs) {
  // 这个月的天数
  // const daysInMonth = date.daysInMonth()
  // 这个月的第一天
  const startDate = date.startOf('month')
  // 星期几
  const day = startDate.day()

  const daysInfo: DaysInfo = Array.from({ length: 6 * 7 })

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, 'day'),
      currentMonth: false,
    }
  }

  // 获取上个月天数
  // for (let i = day - 1; i >= 0; i--) {
  //   const year = new Date(startDate.valueOf()).getFullYear()
  //   const month = new Date(startDate.valueOf()).getMonth()
  //   daysInfo.push({
  //     date: new Date(year, month, -i).toLocaleString(),
  //   })
  // }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, 'day')

    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    }
  }

  return daysInfo
}

function renderDays(
  days: DaysInfo,
  dateRender: MonthCalendar['dateRender'],
  dateInnerContent: MonthCalendar['dateInnerContent'],
  value: Dayjs,
  selectHandler: MonthCalendar['selectHandler']
) {
  const rows = []
  const valueStr = value.format('YYYY-MM-DD')

  for (let i = 0; i < 6; i++) {
    const row = []
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j]
      const dateClass = item.currentMonth ? 'calendar-month-body-cell-current' : ''
      row.push(
        <div
          className={'calendar-month-body-cell ' + dateClass}
          onClick={() => isFunction(selectHandler) && selectHandler(item.date)}
        >
          {dateRender ? (
            dateRender(item.date)
          ) : (
            <div className="calendar-month-body-cell-date">
              <div
                className={cs(
                  'calendar-month-body-cell-date-value',
                  valueStr === item.date.format('YYYY-MM-DD')
                    ? 'calendar-month-body-cell-date-selected'
                    : ''
                )}
              >
                {item.date.date()}
              </div>
              {dateInnerContent ? (
                <div className="calendar-month-body-cell-date-content">
                  {dateInnerContent(item.date)}
                </div>
              ) : null}
            </div>
          )}
        </div>
      )
    }
    rows.push(row)
  }

  return rows.map((row) => <div className="calendar-month-body-row">{row}</div>)
}

function MonthCalendar(props: MonthCalendar) {
  const { value, curMonth, dateRender, dateInnerContent, selectHandler } = props

  const localeContext = useContext(LocaleContext)
  const CalendarLocale = allLocales[localeContext.locale]

  const allDays = getAllDays(curMonth)

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">
        {renderDays(allDays, dateRender, dateInnerContent, value, selectHandler)}
      </div>
    </div>
  )
}

export default MonthCalendar
