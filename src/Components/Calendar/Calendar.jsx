import React from "react";
import "./calendar.css";

const CalendarHeader = () => (
  <div className="calendar-header">
    <h1>RICE CRITICAL HUMANITIES COLLECTIVE</h1>
    <h2>Spring 2025 Calendar</h2>
    <h3>Topic: Nationalism</h3>
  </div>
);

const MeetingRow = ({
  meetingNumber,
  date,
  time,
  topics,
  facilitator = null,
  readings = [],
}) => (
  <div className="meeting-row">
    <div className="meeting-left">
      <div className="meeting-number">Meeting {meetingNumber}</div>
      <div className="meeting-date">{date}</div>
      <div className="meeting-time">{time}</div>
    </div>
    <div className="meeting-right">
      {facilitator && (
        <div className="meeting-facilitator">[{facilitator}]</div>
      )}
      {topics.map((topic, index) => (
        <div key={index} className="meeting-topic">{topic}</div>
      ))}
      {readings.length > 0 && (
        <div className="meeting-readings">
          {readings.map((reading, index) => (
            <div key={index} className="reading-item">• {reading}</div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Calendar = () => {
  const meetings = [
    {
      meetingNumber: 1,
      date: "February 4",
      time: "12-1 P.M.",
      topics: ["What is Nationalism?", "What is the State?"],
    },
    {
      meetingNumber: 2,
      date: "February 18",
      time: "12-1 P.M.",
      topics: ["Diaspora Nationalism"],
      facilitator: "Vivian Lu",
    },
    {
      meetingNumber: 3,
      date: "March 4",
      time: "12-1 P.M.",
      topics: ["Texas, Borders, and Statecraft"],
      readings: ["Anzaldúa, Mestiza Consciousness", "Balibar, What is a Border?"],
    },
    {
      meetingNumber: 4,
      date: "March 25",
      time: "12-1 P.M.",
      topics: ["Nationalism Online: Division and Identity in the Media"],
    },
    {
      meetingNumber: 5,
      date: "April 8",
      time: "12-1 P.M.",
      topics: ["TBD"],
      facilitator: "Guest Faculty – TBD",
    },
    {
      meetingNumber: 6,
      date: "April 15",
      time: "12-1 P.M.",
      topics: ["The Future of American Nationalism"],
    },
  ];

  return (
    <div className="calendar-container">
      <CalendarHeader />
      <div className="meetings-list">
        {meetings.map((meeting) => (
          <MeetingRow
            key={meeting.meetingNumber}
            meetingNumber={meeting.meetingNumber}
            date={meeting.date}
            time={meeting.time}
            topics={meeting.topics}
            facilitator={meeting.facilitator}
            readings={meeting.readings || []}
          />
        ))}
      </div>
      <div style={{ paddingBottom: '100px' }}></div>
    </div>
  );
};

export default Calendar;
