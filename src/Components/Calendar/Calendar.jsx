import React from "react";
import "./calendar.css";

const CalendarHeader = () => (
  <div className="calendar-header">
    <h1>RICE CRITICAL HUMANITIES COLLECTIVE</h1>
    <h2>Fall 2025 Calendar</h2>
    <h3>Topic: A.I. and Education</h3>
  </div>
);

const TableHeader = () => (
  <thead>
    <tr className="table-header-row">
      <th className="table-header">Date and Time</th>
      <th className="table-header">Location</th>
      <th className="table-header">Topic</th>
    </tr>
  </thead>
);

const CalendarRow = ({
  date,
  time,
  location,
  topic,
  isGuestSession = false,
  facilitator = null,
}) => (
  <tr className="calendar-row">
    <td className="date-time-cell">
      <div className="date">{date}</div>
      <div className="time">{time}</div>
    </td>
    <td className="location-cell">
      <div className="location">{location}</div>
    </td>
    <td className="topic-cell">
      {isGuestSession && facilitator && (
        <div className="guest-facilitator">
          Guest Facilitator:
          <br />
          {facilitator}
        </div>
      )}
      <div className={isGuestSession ? "guest-topic" : "regular-topic"}>
        {topic}
      </div>
    </td>
  </tr>
);

const Calendar = () => {
  const events = [
    {
      date: "Monday, September 8",
      time: "12-1 P.M.",
      location: "Lovett Hall, Room 304",
      topic: "Introduction",
    },
    {
      date: "Monday, September 29",
      time: "12-1 P.M.",
      location: "Lovett Hall, Room 304",
      topic:
        "History and Working Definitions: what is technology? What is A.I.? What is education?",
    },
    {
      date: "Monday, October 20",
      time: "12-1 P.M.",
      location: "Lovett Hall, Room 304",
      topic:
        "Perceptions, Trends, and Public Conversation Surrounding A.I. and Technology",
    },
    {
      date: "Monday, November 3",
      time: "12-1 P.M.",
      location: "Lovett Hall, Room 304",
      topic: "",
      isGuestSession: true,
      facilitator: "Professor Rodrigo Ferreira",
    },
    {
      date: "Monday, November 17",
      time: "12-1 P.M.",
      location: "Lovett Hall, Room 304",
      topic: "Critical Thinking and Literacy in the Age of A.I.",
    },
    {
      date: "Monday, December 1",
      time: "12-1 P.M.",
      location: "Lovett Hall, Room 304",
      topic: "Looking toward the Future with Guest Facilitator: [tbd]",
      isGuestSession: true,
    },
  ];

  return (
      <div className="calendar-container">
        <CalendarHeader />

        <div className="calendar-table-container">
          <table className="calendar-table">
            <TableHeader />
            <tbody>
              {events.map((event, index) => (
                <CalendarRow
                  key={index}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  topic={event.topic}
                  isGuestSession={event.isGuestSession}
                  facilitator={event.facilitator}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ paddingBottom: '100px' }}></div>
      </div>
  );
};

export default Calendar;
