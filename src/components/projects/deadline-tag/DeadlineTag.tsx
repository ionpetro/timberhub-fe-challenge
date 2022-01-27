import React, { useMemo, useState } from 'react';
import ClockIcon from '@assets/svgs/clock.svg';
import { Tag } from 'antd';
import styles from './DealineTag.module.less';

type DeadlineTagProps = {
  deadline: number;
};

const DeadlineTag: React.FC<DeadlineTagProps> = ({ deadline }) => {
  const [time, setTime] = useState({ days: 0, weeks: 0 });

  const calculateWeeks = () => {
    const weeks = Math.floor(deadline / 7);
    const days = deadline - weeks * 7;
    setTime({ days, weeks });
  };

  useMemo(() => calculateWeeks(), ['deadline']);

  /**
   * Render deadline text
   * - If deadline is equal or below 0, expired is returned
   * - If deadline is below 7 days, n day(s) is returned
   * - If deadline is above 7 days, n week(s) and x day(s) is returned
   * @constructor
   */
  const DeadlineText = () => {
    const { weeks, days } = time;

    const weeksLabel = weeks > 1 ? 'weeks' : 'week';
    const daysLabel = days > 1 ? 'days' : 'day';

    if (weeks === 0 && days === 0) {
      return <span>Expired</span>;
    }
    if (weeks === 0) {
      return <span>{`${days} ${daysLabel} left`}</span>;
    }
    if (days === 0) {
      return <span>{`${weeks} ${weeksLabel} left`}</span>;
    }
    if (weeks > 0 && days > 0) {
      return (
        <span>{`${weeks} ${weeksLabel} and ${days} ${daysLabel} left`}</span>
      );
    }
    return <span>Expired</span>;
  };

  return (
    <Tag
      icon={<ClockIcon />}
      className={`${styles.compWrap} ${
        time.weeks === 0 ? styles.orange : styles.grey
      }`}
    >
      <DeadlineText />
    </Tag>
  );
};

export default DeadlineTag;
