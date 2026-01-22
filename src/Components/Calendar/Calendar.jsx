import React from "react";
import "./calendar.css";

const CalendarHeader = () => (
  <div className="calendar-header">
    <h1>RICE CRITICAL HUMANITIES COLLECTIVE</h1>
    <h2>Spring 2025 Calendar</h2>
    <h3>Topic: Nationalism and Authority</h3>
  </div>
);

const MeetingRow = ({
  meetingNumber,
  date,
  time,
  location,
  topics,
  facilitator = null,
  readings = [],
}) => (
  <div className="meeting-row">
    <div className="meeting-left">
      <div className="meeting-number">Meeting {meetingNumber}</div>
      <div className="meeting-date">{date}</div>
      <div className="meeting-time">{time}</div>
      <div className="meeting-location">{location}</div>
    </div>
    <div className="meeting-right">
      {topics.map((topic, index) => (
        <div key={index} className="meeting-topic">{topic}</div>
      ))}
      {facilitator && (
        <div className="meeting-facilitator">{facilitator}</div>
      )}
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
      location: "Lovett Hall, 304",
      topics: ["What is Nationalism? What is the State?"],
    },
    {
      meetingNumber: 2,
      date: "February 18",
      time: "12-1 P.M.",
      location: "Lovett Hall, 304",
      topics: ["Empire, Race, Capitalism: the Nation-State and Unequal Global Order"],
      facilitator: "Guest Facilitator: Prof. Vivian Lu",
    },
    {
      meetingNumber: 3,
      date: "March 4",
      time: "12-1 P.M.",
      location: "Lovett Hall, 304",
      topics: ["Borders, Territory, and Texas"],
    },
    {
      meetingNumber: 4,
      date: "March 25",
      time: "12-1 P.M.",
      location: "Lovett Hall, 304",
      topics: ["Nationalism Online: From Media Cultures to Identity Politics"],
    },
    {
      meetingNumber: 5,
      date: "April 8",
      time: "12-1 P.M.",
      location: "Lovett Hall, 304",
      topics: ["The Ambiguities of Nationalism"],
      facilitator: "Guest Facilitator: Prof. Christian Emden",
    },
    {
      meetingNumber: 6,
      date: "April 15",
      time: "12-1 P.M.",
      location: "Lovett Hall, 304",
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
            location={meeting.location}
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
