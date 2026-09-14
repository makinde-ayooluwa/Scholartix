
import './App.css'
import AppRouter from './config/appRouter'
import "bootstrap-icons/font/bootstrap-icons.css"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
function App() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
  ];

  return (
    <>
       <AppRouter />
      {/*<LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
      <BarChart width={600} height={300} data={data}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Legend /><Bar dataKey="sales" fill="#8884d8" /><Bar dataKey="profit" fill="#82ca9d" /></BarChart> */}
    </>
  )
}

export default App
