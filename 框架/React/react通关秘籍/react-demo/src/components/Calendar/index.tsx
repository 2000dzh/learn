import { CSSProperties, ReactNode, useState } from 'react'
import cs from 'classnames'
import dayjs from 'dayjs'
import { Dayjs } from 'dayjs'
import './index.scss'
import LocaleContext from './LocaleContext'
import MonthCalendar from './components/MonthCalendar'
import Header from './components/Header'
import { isFunction } from '@/utils/general'

export interface CalendarProps {
  value: Dayjs
  style?: CSSProperties
  className?: string | Array<string>
  // 定制日期显示,会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode
  // 定制日期单元格,内容会被添加到单元格内,只在全屏日历模式下生效
  dateInnerContent?: (currentDate: Dayjs) => ReactNode
  // 国际话相关
  locale?: string
  onChange?: (date: Dayjs) => void
}

function Calendar(props: CalendarProps) {
  const { value, style, className, locale, onChange } = props

  const [curValue, setCurValue] = useState<Dayjs>(value)

  const [curMonth, setCurMonth] = useState<Dayjs>(value)

  const classNames = cs('calendar', className)

  function selectHandler(date: Dayjs) {
    setCurValue(date)
    setCurMonth(date)
    if (isFunction(onChange)) {
      onChange(date)
    }
  }

  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'))
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'))
  }

  function todayHandler() {
    const date = dayjs(Date.now())

    setCurValue(date)
    setCurMonth(date)
    if (isFunction(onChange)) {
      onChange(date)
    }
  }

  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  )
}

export default Calendar
