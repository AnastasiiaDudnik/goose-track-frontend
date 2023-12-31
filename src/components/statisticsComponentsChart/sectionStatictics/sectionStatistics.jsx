import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatisticsChart } from '../statisticsChart/statisticsChart';
import Spinner from 'components/spinner/spinner';
import { BsFillCircleFill } from 'react-icons/bs';
import moment from 'moment';
import {
  HeadContainer,
  PeriodTime,
  Period,
  ChartContainer,
} from '../../../pages/statisticsPage/statisticsPage.styled';
import CalendarBar from '../statisticsDateBar/calendarBar';
import { getTasksStatistics } from 'redux/tasks/operations';
import { selectTasksStatistics } from 'redux/tasks/selectors';

export const SectionStatistics = ({ mode }) => {
  const currentDate = moment();
  const data = useSelector(selectTasksStatistics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasksStatistics(currentDate.format('YYYY-MM-DD')));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <HeadContainer>
        <CalendarBar mode={mode} data={data} />

        <PeriodTime>
          <Period
            style={{
              color: mode === 'dark' ? '#000' : '#fff',
            }}
          >
            <BsFillCircleFill fill="#FFD2DD" size={8} /> By Day
          </Period>
          <Period
            style={{
              color: mode === 'dark' ? '#000' : '#fff',
            }}
          >
            <BsFillCircleFill fill="#3E85F3" size={8} /> By Month
          </Period>
        </PeriodTime>
      </HeadContainer>
      <ChartContainer>
        {!data ? <Spinner /> : <StatisticsChart data={data} mode={mode} />}
      </ChartContainer>
    </>
  );
};
