import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Container,Row,Col } from 'react-bootstrap';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


export default function ClientHistoryChartAnalysis({data}) {

   const chartData = {
  labels: ['cleared on time', 'loans overdued'],
  datasets: [
    {
      label: '# of Votes',
      data: data,
      backgroundColor: [
        'hsla(0, 71%, 49%, 0.96)',
        'hsla(120, 50%, 62%, 0.50)',
       
      ],
      borderWidth: 1,
    },
  ],
};

  return(
    <Container>
    
     
         <h6 ><u> chart showing an anlysis of loans paid in time and overdued</u> </h6>

  <PolarArea data={chartData} />;
      
    </Container>
         
  )
}
