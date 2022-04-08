import styles from './StatisticList.module.css';
import Statistica from 'components/Statistica/Statistica';
import propTypes from 'prop-types';
import randCol from '../../helpers/helpers'

const StatisticList = ({ data, title }) => {

  return (
    <section className={styles.statistics}>
      {title  && <h2 className="title">{title}</h2>}
      <ul className={styles.statisticsBox}>
        {data.map(elem => {
          return (
            <li style={{ backgroundColor: randCol() }} key={elem.id}>
              <Statistica percentage={elem.percentage} label={elem.label} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
StatisticList.propTypes = {
  percentage: propTypes.string,
  label: propTypes.number,
  title: propTypes.string,
};

export default StatisticList;
