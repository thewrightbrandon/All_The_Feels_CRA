import React from 'react'
import { Pie } from 'react-chartjs-2'

const object1 = {
  "Happy": 1,
  "Sad": 2,
  "Angry": 3,
  "Scared": 4,
  "Excited": 5,
  "Moody": 6,
  "Depressed": 7,
  "Gleeful": 8
}

class MoodChart extends React.Component {

  checkMoodChart = (chart) => {
    // Need conditionals; "If {this.prop.emotion} = Happy, add 1 to chart, else nothing"
    // return ({this.props.mood.emotion} = "Happy" ? data.datasets.data[0] += 1 : null)
  }

  render = () => {
    return (
      <div>
        <h1>Your MoodChart</h1>
        <Pie
          data={{
            labels: ['Happy', 'Sad', 'Angry', 'Scared', 'Excited', 'Moody', 'Depressed', 'Gleeful'],
            // labels: [/*Object.keys(object1.1)*/ 'Eating cheetos in bed', 'Fish out of water', 'Shark eating my face', 'Shitting Rainbows', 'Basket of Kittens', 'Staring into the abyss'],
            datasets: [{
              label: 'Moods',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'red',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
          }]
        }}
        options={{
          // legend: {
          //   display: true,
          //   postion: 'right'
          // },
          radius: '60%'
        }}
        />
     </div>
    )
  }
}

export default MoodChart

///////////////////////////////////////////////
///////////// NOTES & ATTEMPTS ////////////////
///////////////////////////////////////////////

// this.props.mood.emotion
// We need a function that keeps track of how many times an emotion has been logged in a single day.
// Need conditionals; "If {this.prop.emotion} = Happy, add 1 to chart, else nothing"
