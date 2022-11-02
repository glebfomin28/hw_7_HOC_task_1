import React, {useEffect, useState} from 'react';
import moment from "moment";



const withDate = (Component) => {
  const fanc = (props) => {
    const newData = moment()

    const dataOld = moment(props.date).format("YYYY MM DD HH:mm:ss")

    let newPrintData;

    const diffDays = newData.diff(dataOld, 'days')
    const diffHours = newData.diff(dataOld, 'hour')
    const diffMinutes = newData.diff(dataOld, 'minutes')

    if (diffDays !== 0) newPrintData = `${diffDays} дней назад`
    else if(diffHours !== 0) newPrintData = `${diffHours} часов назад`
    else newPrintData =`${diffMinutes} минут назад`

    return <Component date={newPrintData}/>
  }
  return fanc
}

function DateTime({date}) {
  return (
      <p className="date">{date}</p>
  )
}

const DateTimePretty = withDate(DateTime)

function Video(props) {
  return (
      <div className="video">
        <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <DateTimePretty {...props} />
      </div>
  )
}

function VideoList({list}) {
  return list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-11-02 17:09:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-11-02 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-11-02 13:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2022-11-02 12:33:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
      <VideoList list={list} />
  );
}