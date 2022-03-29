import React, { useState } from 'react';
import './styles.scss';

BaiTap2.propTypes = {};

function BaiTap2(props) {
    const [dataMonth, setDataMonth] = useState(() => {
        return new Date().getMonth();
    });

    const [dataYear, setDataYear] = useState(() => {
        return new Date().getFullYear();
    });

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const [dataPrevDay, setDataPrevDay] = useState(() => {
        const prevCurrentDate = new Date(dataYear, dataMonth, 1); // get fist day current month
        const prevDay = prevCurrentDate.getDay();

        const prevDays = [];
        if (prevDay !== 1) {
            const prevDate = new Date(dataYear, dataMonth, 0);
            const newPrevDay = prevDay === 0 ? 7 : prevDay;
            const prevMonth = dataMonth === 0 ? 11 : dataMonth - 1;

            const prevNumDate = new Date(
                dataYear,
                prevMonth,
                prevDate.getDate() - newPrevDay + 2
            );

            while (prevNumDate.getMonth() === prevMonth) {
                prevDays.push(new Date(prevNumDate));
                prevNumDate.setDate(prevNumDate.getDate() + 1);
            }
        }

        return prevDays;
    });

    const [dataListDay, setDataListDay] = useState(() => {
        const currentDate = new Date(dataYear, dataMonth, 1);
        const days = [];

        while (currentDate.getMonth() === dataMonth) {
            days.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return days;
    });

    const [dataNextDay, setDataNextDay] = useState(() => {
        const nextMonths = dataMonth === 11 ? 0 : dataMonth + 1;
        const nextYear = dataMonth === 11 ? dataYear + 1 : dataYear;
        const nextCurrentDate = new Date(dataYear, dataMonth + 1, 0); // get last day current month
        const nextDay = nextCurrentDate.getDay();

        const nextDate = new Date(nextYear, nextMonths, 1);

        const nextDays = [];
        if (nextDay !== 0) {
            while (nextDate.getMonth() === nextMonths) {
                if (nextDate.getDay() === 1) break;

                nextDays.push(new Date(nextDate));
                nextDate.setDate(nextDate.getDate() + 1);
            }
        }

        return nextDays;
    });

    const handlePrevYear = () => {
        const month = dataMonth;
        const year = dataYear - 1;

        // prev days
        const prevCurrentDate = new Date(year, month, 1); // get fist day current month
        const prevDay = prevCurrentDate.getDay();

        const prevDays = [];
        if (prevDay !== 1) {
            const prevDate = new Date(year, month, 0);
            const newPrevDay = prevDay === 0 ? 7 : prevDay;
            const prevMonth = month === 0 ? 11 : month - 1;

            const prevNumDate = new Date(
                year,
                prevMonth,
                prevDate.getDate() - newPrevDay + 2
            );

            while (prevNumDate.getMonth() === prevMonth) {
                prevDays.push(new Date(prevNumDate));
                prevNumDate.setDate(prevNumDate.getDate() + 1);
            }
        }

        // current days
        const currentDate = new Date(year, month, 1);
        const days = [];

        while (currentDate.getMonth() === month) {
            days.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // next days
        const nextMonths = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        const nextCurrentDate = new Date(year, month + 1, 0); // get last day current month
        const nextDay = nextCurrentDate.getDay();

        const nextDate = new Date(nextYear, nextMonths, 1);

        const nextDays = [];
        if (nextDay !== 0) {
            while (nextDate.getMonth() === nextMonths) {
                if (nextDate.getDay() === 1) break;

                nextDays.push(new Date(nextDate));
                nextDate.setDate(nextDate.getDate() + 1);
            }
        }

        setDataMonth(month);
        setDataYear(year);
        setDataPrevDay(prevDays);
        setDataListDay(days);
        setDataNextDay(nextDays);
    };

    const handlePrevMonth = () => {
        const month = dataMonth === 0 ? 11 : dataMonth - 1;
        const year = month === 11 ? dataYear - 1 : dataYear;

        // prev days
        const prevCurrentDate = new Date(year, month, 1); // get fist day current month
        const prevDay = prevCurrentDate.getDay();

        const prevDays = [];
        if (prevDay !== 1) {
            const prevDate = new Date(year, month, 0);
            const newPrevDay = prevDay === 0 ? 7 : prevDay;
            const prevMonth = month === 0 ? 11 : month - 1;

            const prevNumDate = new Date(
                year,
                prevMonth,
                prevDate.getDate() - newPrevDay + 2
            );

            while (prevNumDate.getMonth() === prevMonth) {
                prevDays.push(new Date(prevNumDate));
                prevNumDate.setDate(prevNumDate.getDate() + 1);
            }
        }

        // current days
        const currentDate = new Date(year, month, 1);
        const days = [];

        while (currentDate.getMonth() === month) {
            days.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // next days
        const nextMonths = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        const nextCurrentDate = new Date(year, month + 1, 0); // get last day current month
        const nextDay = nextCurrentDate.getDay();

        const nextDate = new Date(nextYear, nextMonths, 1);

        const nextDays = [];
        if (nextDay !== 0) {
            while (nextDate.getMonth() === nextMonths) {
                if (nextDate.getDay() === 1) break;

                nextDays.push(new Date(nextDate));
                nextDate.setDate(nextDate.getDate() + 1);
            }
        }

        setDataMonth(month);
        setDataYear(year);
        setDataPrevDay(prevDays);
        setDataListDay(days);
        setDataNextDay(nextDays);
    };

    const handleNextMonth = () => {
        const month = dataMonth === 11 ? 0 : dataMonth + 1;
        const year = month === 0 ? dataYear + 1 : dataYear;

        // prev days
        const prevCurrentDate = new Date(year, month, 1); // get fist day current month
        const prevDay = prevCurrentDate.getDay();

        const prevDays = [];
        if (prevDay !== 1) {
            const prevDate = new Date(year, month, 0);
            const newPrevDay = prevDay === 0 ? 7 : prevDay;
            const prevMonth = month === 0 ? 11 : month - 1;

            const prevNumDate = new Date(
                year,
                prevMonth,
                prevDate.getDate() - newPrevDay + 2
            );

            while (prevNumDate.getMonth() === prevMonth) {
                prevDays.push(new Date(prevNumDate));
                prevNumDate.setDate(prevNumDate.getDate() + 1);
            }
        }

        // current days
        const currentDate = new Date(year, month, 1);
        const days = [];

        while (currentDate.getMonth() === month) {
            days.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // next days
        const nextMonths = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        const nextCurrentDate = new Date(year, month + 1, 0); // get last day current month
        const nextDay = nextCurrentDate.getDay();

        const nextDate = new Date(nextYear, nextMonths, 1);

        const nextDays = [];
        if (nextDay !== 0) {
            while (nextDate.getMonth() === nextMonths) {
                if (nextDate.getDay() === 1) break;

                nextDays.push(new Date(nextDate));
                nextDate.setDate(nextDate.getDate() + 1);
            }
        }

        setDataMonth(month);
        setDataYear(year);
        setDataPrevDay(prevDays);
        setDataListDay(days);
        setDataNextDay(nextDays);
    };

    const handleNextYear = () => {
        const month = dataMonth;
        const year = dataYear + 1;

        // prev days
        const prevCurrentDate = new Date(year, month, 1); // get fist day current month
        const prevDay = prevCurrentDate.getDay();

        const prevDays = [];
        if (prevDay !== 1) {
            const prevDate = new Date(year, month, 0);
            const newPrevDay = prevDay === 0 ? 7 : prevDay;
            const prevMonth = month === 0 ? 11 : month - 1;

            const prevNumDate = new Date(
                year,
                prevMonth,
                prevDate.getDate() - newPrevDay + 2
            );

            while (prevNumDate.getMonth() === prevMonth) {
                prevDays.push(new Date(prevNumDate));
                prevNumDate.setDate(prevNumDate.getDate() + 1);
            }
        }

        // current days
        const currentDate = new Date(year, month, 1);
        const days = [];

        while (currentDate.getMonth() === month) {
            days.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // next days
        const nextMonths = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;
        const nextCurrentDate = new Date(year, month + 1, 0); // get last day current month
        const nextDay = nextCurrentDate.getDay();

        const nextDate = new Date(nextYear, nextMonths, 1);

        const nextDays = [];
        if (nextDay !== 0) {
            while (nextDate.getMonth() === nextMonths) {
                if (nextDate.getDay() === 1) break;

                nextDays.push(new Date(nextDate));
                nextDate.setDate(nextDate.getDate() + 1);
            }
        }

        setDataMonth(month);
        setDataYear(year);
        setDataPrevDay(prevDays);
        setDataListDay(days);
        setDataNextDay(nextDays);
    };

    return (
        <div className='calendar'>
            <h2>Calendar</h2>
            <div className='calendar-container'>
                <div className='calendar-header'>
                    <button onClick={handlePrevYear}>Prev Year</button>
                    <button onClick={handlePrevMonth}>Prev Month</button>
                    <div className='data-date'>
                        <p className='month'>{monthNames[dataMonth]}</p>
                        <p className='year'>Year: {dataYear}</p>
                    </div>
                    <button onClick={handleNextMonth}>Next Month</button>
                    <button onClick={handleNextYear}>Next Year</button>
                </div>
                <ul className='calendar-days'>
                    <li className='calendar-days-item'>Mon</li>
                    <li className='calendar-days-item'>Tue</li>
                    <li className='calendar-days-item'>Wed</li>
                    <li className='calendar-days-item'>Thu</li>
                    <li className='calendar-days-item'>Fri</li>
                    <li className='calendar-days-item'>Sat</li>
                    <li className='calendar-days-item'>Sun</li>
                </ul>
                <ul className='calendar-day-of-month'>
                    {dataPrevDay.map((item, idx) => (
                        <li
                            key={idx}
                            className={`date out-of-month ${
                                item.getDay() === 6 || item.getDay() === 0
                                    ? 'end-week'
                                    : ''
                            }`}
                        >
                            {item.getDate()}
                        </li>
                    ))}
                    {dataListDay.map((item, idx) => (
                        <li
                            key={idx}
                            className={`date ${
                                item.getDay() === 6 || item.getDay() === 0
                                    ? 'end-week'
                                    : ''
                            }`}
                        >
                            {item.getDate()}
                        </li>
                    ))}
                    {dataNextDay.map((item, idx) => (
                        <li
                            key={idx}
                            className={`date out-of-month ${
                                item.getDay() === 6 || item.getDay() === 0
                                    ? 'end-week'
                                    : ''
                            }`}
                        >
                            {item.getDate()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BaiTap2;
