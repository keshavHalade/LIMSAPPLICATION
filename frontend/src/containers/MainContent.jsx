import React from 'react';
import { 
  Users, 
  TestTube, 
  FileText, 
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MainContent = () => {
  const stats = [
    { name: 'Total Patients', value: '2,543', icon: Users },
    { name: 'Pending Tests', value: '45', icon: TestTube },
    { name: 'Reports Generated', value: '1,287', icon: FileText },
    { name: 'Critical Results', value: '3', icon: AlertTriangle },
  ];

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Tests Performed',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container my-4">
      <div className="row g-4">
        {stats.map((item) => (
          <div key={item.name} className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-body d-flex align-items-center">
                <div className="me-3">
                  <item.icon className="text-muted" size={24} />
                </div>
                <div>
                  <h5 className="card-title mb-0">{item.name}</h5>
                  <p className="card-text h5 fw-bold">{item.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4 mt-4">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Test Volume Trend</h5>
                <TrendingUp className="text-muted" size={20} />
              </div>
              <Line data={chartData} />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Activities</h5>
              <ul className="list-unstyled">
                {[1, 2, 3, 4].map((item, itemIdx) => (
                  <li key={item} className="mb-3">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <span className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" style={{ width: '32px', height: '32px' }}>
                          <FileText size={16} />
                        </span>
                      </div>
                      <div>
                        <p className="mb-0 small">New test result for Patient #12345</p>
                        <small className="text-muted">1h ago</small>
                      </div>
                    </div>
                    {itemIdx !== 3 && <hr className="mt-2 mb-0" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
    
    // In the code above, we have created a  Dashboard  component that displays some statistics and a line chart. The statistics are displayed using cards with icons and values. The line chart is displayed using the  Line  component from  react-chartjs-2 . 
    // The  stats  array contains objects with the name of the statistic, the value, and the icon to display. The  chartData  object contains the data for the line chart. 
    // Now, let's create a new component that will display the list of patients. 
 
