'use client';
import React from 'react';
import format from 'date-fns/format';

function Clock() {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
  if (time === null) {
    return (<p>loading....</p>);
  }

  return (
    <p className="clock">{format(time , 'hh:mm:ss.S a')}</p>
  );
}

export default Clock;
