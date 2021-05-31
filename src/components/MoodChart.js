import React from 'react'
import { Bar } from 'react-chartjs-2'

class MoodChart extends React.Component {

  render = () => {
    return (
      <div id="chart">
        <h1>All the Feels Success Chart</h1>
        <Bar
          data={{
            labels: ['# of people we\'ve made smile', '# of people who chose crabiness'],
            datasets: [{
              label: 'Moods Counter',
              data: [99, 1],
              backgroundColor: [
                'rgb(255, 206, 86)',
                'rgb(153, 102, 255)'
            ],
          }]
        }}
        options={{
          legend: {
            display: true,
          }
        }}
        />
     </div>
    )

  }
}

export default MoodChart
