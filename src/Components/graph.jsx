// import React, { useRef, useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const Graph = ({ data }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (data.length > 0) {
//       const ctx = chartRef.current.getContext('2d');
//       new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: Array.from({ length: data.length }, (_, i) => i + 1), // Generating labels as 1, 2, 3, ...
//           datasets: [{
//             label: 'Analytics Data',
//             data: data,
//             borderColor: 'rgba(75, 192, 192, 1)',
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });
//     }
//   }, [data]);

//   return (
//     <div>
//       <h4>Analytics Graph</h4>
//       <div style={{ border: '1px solid #ccc', padding: '10px' }}>
//         <canvas ref={chartRef} width="400" height="200"></canvas>
//       </div>
//     </div>
//   );
// };

// export default Graph;
















import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (data.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: data.length }, (_, i) => i + 1),
          datasets: [{
            label: 'Analytics Data',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  return (
    <div>
      {/* <h4>Analytics Graph</h4> */}
      <div style={{ border: '1px solid #FFF', padding: '10px' }}>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default Graph;
