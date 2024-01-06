import React from "react";
import "./leaderboard.css"; // Import your CSS file for styling

const Leaderboard = ({ users }) => {
  const sortedUsers = users
    .map((user) => ({
      ...user,
      averageScore: ((user.highestPushUp / 150) + (user.highestBicepCurl / 50)) * 5, // Assuming push-ups are out of 150 and bicep curls are out of 50
    }))
    .sort((a, b) => b.averageScore - a.averageScore);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Push-up Score</th>
            <th>Bicep Curl Score</th>
            <th>Average Score (out of 10)</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={index} className={index < 3 ? `top-${index + 1}` : ""}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.highestPushUp}</td>
              <td>{user.highestBicepCurl}</td>
              <td>{user.averageScore.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
