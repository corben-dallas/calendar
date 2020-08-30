import React from 'react';

const DateRows = ({ date }) => {
	const { dates } = date;

	return (
		<tr>
			{
				dates.map(item => (
					<td 
						key={date.id++}
						className={item.className}
					>
						{item.date}
					</td>
				))
			}
		</tr>
	)
}

export default DateRows;
