import React from 'react';

import DateRows from './DateRows/DateRows';
import UserDateInfo from '../dictionary/userDateInfo';

const Calendar = ({ now }) => {

	const dates = new UserDateInfo(now).getTotalDays();
	const currentDayInfo = new UserDateInfo(now).getCurrentDayInfo()

	return (
		<div className="ui-datepicker">
			<div className="ui-datepicker-material-header">
				<div className="ui-datepicker-material-day">{currentDayInfo.day}</div>
				<div className="ui-datepicker-material-date">
				<div className="ui-datepicker-material-day-num">{currentDayInfo.date}</div>
				<div className="ui-datepicker-material-month">{currentDayInfo.month.withCase}</div>
				<div className="ui-datepicker-material-year">{currentDayInfo.year}</div>
				</div>
			</div>
			<div className="ui-datepicker-header">
				<div className="ui-datepicker-title">
				<span className="ui-datepicker-month">{currentDayInfo.month.withoutCase}</span>&nbsp;<span className="ui-datepicker-year">{currentDayInfo.year}</span>
				</div>
			</div>
			<table className="ui-datepicker-calendar">
				<colgroup>
					<col/>
					<col/>
					<col/>
					<col/>
					<col/>
					<col className="ui-datepicker-week-end" />
					<col className="ui-datepicker-week-end" />
				</colgroup>
				<thead>
					<tr>
						<th scope="col" title="Понедельник">Пн</th>
						<th scope="col" title="Вторник">Вт</th>
						<th scope="col" title="Среда">Ср</th>
						<th scope="col" title="Четверг">Чт</th>
						<th scope="col" title="Пятница">Пт</th>
						<th scope="col" title="Суббота">Сб</th>
						<th scope="col" title="Воскресенье">Вс</th>
					</tr>
				</thead>
				<tbody>
					{
						dates.map(date => 
							<DateRows 
								key={date.id} 
								date={date} 
							/>)
					}
				</tbody>
			</table>
		</div>
	);
}

export default Calendar
