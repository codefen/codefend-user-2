import scss from "./footer.module.scss"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, scales } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const riskData = [
  { level: "critical", count: 5, percentage: "05%", color: "#ff3a33" },
  { level: "elevated", count: 5, percentage: "05%", color: "#ff7b76" },
  { level: "medium", count: 10, percentage: "10%", color: "#ffb5b2" },
  { level: "low", count: 20, percentage: "20%", color: "#ffd9d7" },
  { level: "intel", count: 60, percentage: "60%", color: "#e6e6e6" },
]
// Data for the dashboard
const issuesData = {
  open: 3,
  fixed: 17,
  total: 20,
}

const findingsData = {
  total: 26,
  parsed: 12,
  estimatedTime: "12:20",
}

const scanData = {
  url: "www.lanacion.com",
  progress: 70, // percentage of completion
}

const data = {
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgb(252, 0, 55)',
        'rgb(255, 89, 89)',
        'rgb(253, 109, 109)',
        'rgb(246, 142, 142)',
      ],
      borderWidth: 2,
    },
  ],
};


export default function Footer() {

  return (
    <div className={scss.dashboard}>
      {/* Issues Stats */}
      <div className={scss.statsRow}>
        <div className={scss.statCard}>
          <div className={scss.statNumber}>
            <span className={scss.highlight}>{issuesData.open}</span>
            <span className={scss.total}>/{issuesData.total}</span>
          </div>
          <span className={scss.statLabel}>OPEN ISSUES</span>
        </div>

        <div className={scss.statCard}>
          <div className={scss.statNumber}>
            <span className={scss.stats}>{issuesData.fixed}</span>
            <span className={scss.total}>/{issuesData.total}</span>
          </div>
          <span className={scss.statLabel}>FIXED ISSUES</span>
        </div>

        <div className={scss.statCard}>
          <div className={scss.statNumber}>
            <span className={scss.stats}>{issuesData.total}</span>
            <span className={scss.total}>/{issuesData.total}</span>
          </div>
          <span className={scss.statLabel}>TOTAL ISSUES</span>
        </div>
      </div>

      {/* Risk Level Chart */}
      <div className={scss.chartCard}>
        <div className={scss.riskTable}>
          <div className={scss.tableHeader}>
            <div>Risk level</div>
            <div>Issues count</div>
          </div>
          {riskData.map((risk) => (
            <div key={risk.level} className={scss.tableRow}>
              <div>{risk.level}</div>
              <div>
                {risk.count} / {risk.percentage}
              </div>
            </div>
          ))}
        </div>
        <div className={scss.chartContainer}>
          <Doughnut data={data}/>
        </div>
      </div>

      {/* Scanning Section */}
      <div className={scss.scanCard}>
        <h3 className={scss.scanTitle}>Scanneo en curso</h3>
        <p className={scss.scanDescription}>
          Los scanners automaticos están analizando uno de sus recursos web: <strong>{scanData.url}</strong>
        </p>
        <div className={scss.progressBar}>
          <div className={scss.progressFill} style={{ width: `${scanData.progress}%` }}></div>
        </div>
      </div>

      {/* Findings Stats */}
      <div className={scss.statsRow}>
        <div className={scss.statCard}>
          <div className={scss.statNumber}>
            <span className={scss.highlight}>{findingsData.total}</span>
          </div>
          <p className={scss.statLabel}>TOTAL FINDINGS</p>
        </div>

        <div className={scss.statCard}>
          <div className={scss.statNumber}>
            <span className={scss.stats}>{findingsData.parsed}</span>
            <span className={scss.total}>/{findingsData.total}</span>
          </div>
          <p className={scss.statLabel}>PARSED FINDINGS</p>
        </div>

        <div className={scss.statCard}>
          <div className={scss.statNumber}>
            <span className={scss.stats}>{findingsData.estimatedTime}</span>
          </div>
          <p className={scss.statLabel}>EST. TIME TO FINISH</p>
        </div>
      </div>
    </div>
  )
}