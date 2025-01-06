import ChartBox from '../../Components/chartBox/ChartBox';
import TopBox from '../../Components/topBox/TopBox';
import './AdminUser/admin.css';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';
import BarChartBox from '../../Components/barChartBox/BarChartBox';
import PieChartBox from '../../Components/pieChartBox/PieChartBox';
import BigChartBox from '../../Components/bigChartBox/BigChartBox';
const Admin = () => {
  // xs: "320px",
  //       sm: "375px",
  //       sml: "500px",
  //       md: "667px",
  //       mdl: "768px",
  //       lg: "960px",
  //       lgl: "1024px",
  //       xl: "1280px",
  return (
    <div className="home grid lgl:grid-cols-4 mdl:grid-cols-2 sml:grid-cols-1 xs:grid-cols-1 auto-rows-fr grid-flow-dense gap-5">
      <div className="box1 p-5 rounded-xl border-2 border-softBg"><TopBox /></div>
      <div className="box p-5 rounded-xl border-2 border-softBg"><ChartBox {...chartBoxUser} /></div>
      <div className="box p-5 rounded-xl border-2 border-softBg"><ChartBox {...chartBoxProduct} /></div>
      <div className="box4 p-5 rounded-xl border-2 border-softBg"><PieChartBox /></div>
      <div className="box p-5 rounded-xl border-2 border-softBg"><ChartBox {...chartBoxRevenue} /></div>
      <div className="box p-5 rounded-xl border-2 border-softBg"><ChartBox {...chartBoxConversion} /></div>
      <div className="box7 p-5 rounded-xl border-2 border-softBg lgl:block mdl:block sml:hidden xs:hidden"><BigChartBox /></div>
      <div className="box p-5 rounded-xl border-2 border-softBg"><BarChartBox {...barChartBoxVisit} /></div>
      <div className="box p-5 rounded-xl border-2 border-softBg"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Admin