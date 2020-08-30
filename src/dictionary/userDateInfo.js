class UserDateInfo {
	constructor(userDate) {
		this.userDate = userDate;
	}

	_getDateInfo (userDate) {
		const parsedData = {
			currentYear: userDate.getFullYear(), //год
			currentMonth: userDate.getMonth(), // месяц (от 0 до 11)
			currentDay: userDate.getDay(), // день (0 - вскр до 6 - суббота)
			currentDate: userDate.getDate(), // дата (1 до 21)
		};

		return parsedData;
	}

	_month = {
		0: 'Январь',
		1: 'Февраль',
		2: 'Март',
		3: 'Апрель',
		4: 'Май',
		5: 'Июнь',
		6: 'Июль',
		7: 'Август',
		8: 'Сентябрь',
		9: 'Октябрь',
		10: 'Ноябрь',
		11: 'Декабрь',
	}

	_dayOfWeek = {
		0: 'Воскресение',
		1: 'Понедельник',
		2: 'Вторник',
		3: 'Среда',
		4: 'Четверг',
		5: 'Пятница',
		6: 'Суббота',
	};

	_сaseOfMonths = {
		'Январь': 'Января',
		'Февраль': 'Февраля',
		'Март': 'Марта',
		'Апрель': 'Апреля',
		'Май': 'Мая',
		'Июнь': 'Июня',
		'Июль': 'Июля',
		'Август': 'Августа',
		'Сентябрь': 'Сентября',
		'Октябрь': 'Октября',
		'Ноябрь': 'Ноября',
		'Декабрь': 'Декабря',
	}

	getYear = () => {
		const { currentYear } = this._getDateInfo(this.userDate);

		return currentYear;
	}

	getMonth = () => {
		const { currentMonth } = this._getDateInfo(this.userDate);
		const result = Object.keys(this._month)
			.filter((item) => +item === currentMonth);

		return { 
			withoutCase: this._month[result],
			withCase: this._сaseOfMonths[this._month[result]],
		};
	}

	getDate = () => {
		const { currentDate } = this._getDateInfo(this.userDate);

		return currentDate;
	}

	getDay = () => {
		const { currentDay } = this._getDateInfo(this.userDate);
		const result = Object.keys(this._dayOfWeek)
		.filter((item) => +item === currentDay);

		return this._dayOfWeek[result];
	}

	getCurrentDayInfo = () => {
		return {
			day: this.getDay(),
			date: this.getDate(),
			month: this.getMonth(),
			year: this.getYear(),
		}
	}

	getTotalDays () {
		const data = this._getDateInfo(this.userDate);
		const { currentYear, currentMonth, currentDate } = data;
		const currentMonthLastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
		const currentMonthLastDayName = new Date(currentYear, currentMonth + 1, 0).getDay();
		const prevMonthLastDays = new Date(currentYear, currentMonth, 0).getDate();
		
		let currentFirstWeekDayName = new Date(currentYear,currentMonth,1).getDay();
		let parsedCurrentFirstWeekDayName;
	
		switch(currentFirstWeekDayName) {
			case 0: parsedCurrentFirstWeekDayName = 6; break;
			case 1: parsedCurrentFirstWeekDayName = 0; break;
			case 2: parsedCurrentFirstWeekDayName = 1; break;
			case 3: parsedCurrentFirstWeekDayName = 2; break;
			case 4: parsedCurrentFirstWeekDayName = 3; break;
			case 5: parsedCurrentFirstWeekDayName = 4; break;
			case 6: parsedCurrentFirstWeekDayName = 5; break;
			default: parsedCurrentFirstWeekDayName = 0;
		}

		let currenMonthDays = [];
		let prevMonthDays = [];
		let nextMonthDays = [];
		let counter = prevMonthLastDays;

		for (let i = 1; i <= currentMonthLastDay; i++) {
			currenMonthDays.push({ date: i, className: i === currentDate ? 'ui-datepicker-today' : ''});
		}

		for (let i = 0; i < parsedCurrentFirstWeekDayName; i++) {
			prevMonthDays.push({ date: counter, className: 'ui-datepicker-other-month' });
			counter--;
		}

		for (let i = 0; i < 7; i++) {
			if(i === currentMonthLastDayName) {
				let result = 7 - i;

				if (result === 7) {
					nextMonthDays = [];
				} else {
					for (let j = result; j >= 1; j--) {
						nextMonthDays.push({ date: j, className: 'ui-datepicker-other-month' });
					}
				}
			}
		}

		const totlaDaysArray = prevMonthDays
			.sort((a, b) => a.date - b.date)
			.concat(currenMonthDays, nextMonthDays.sort((a, b) => a.date -b.date))
			.reduce((result, value, index, array) => {
				if (index % 7 === 0)
					result.push({ 
						id: index,
						dates: array.slice(index, index + 7),
					});
				return result;
			}, []);
		
		return totlaDaysArray;
	}
}

export default UserDateInfo;
