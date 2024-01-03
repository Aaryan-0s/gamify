import React from "react";
import { Bar } from "react-chartjs-2";

const HighScoreChart = ({ pushUpHighest, bicepHighest }) => {
  const data = {
    labels: ["Push-ups", "Bicep Curls"],
    datasets: [
      {
        label: "High Scores",
        data: [pushUpHighest, bicepHighest],
        backgroundColor: ["rgba(75,192,192,0.6)", "rgba(255,99,132,0.6)"],
        borderColor: ["rgba(75,192,192,1)", "rgba(255,99,132,1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      duration: 2000, // Set the animation duration (in milliseconds)
      easing: "easeInOutQuart", // Set the easing function
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 150, // Set your maximum score
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "High Score Chart",
        font: {
          size: 20,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HighScoreChart;
