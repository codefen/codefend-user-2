import scss from './dashboard.module.scss';

const statsData = [
  { label: 'WEB & EXTERNAL', value: 23 },
  { label: 'MOBILE APPS', value: 3 },
  { label: 'INTERNAL', value: 23 },
  { label: 'CLOUD ASSETS', value: 10 },
  { label: 'SOURCE CODE', value: 10 },
  { label: 'SOCIAL ENGINEERING', value: 62 }
];


export default function Dashboard() {
    return ( 
      //header
      <div className='container-main'>
        <div className={scss.scanSection}>
          <img src="/images/virus.png" alt="scanner-virus" />
          <div className={scss.scanInfo}>
            <h2 className={scss.scanTitle}>Exploración de superficie en curso</h2>
            <p className={scss.scanDescription}>
              Aún no hemos detectado vulnerabilidades ni amenazas en sus sistemas, pero hay un scanneo automático
              procesando información, apenas se localice una, vos y tu equipo serán notificados.{" "}
              <span className={scss.highlight}>En la espera, añadamos recursos.</span>
            </p>
            <button className='btn'>Añadir recursos para calcular precios</button>
          </div>
        </div>
  
        <div className={scss.statsSection}>
          <div className={scss.statsGrid}>
            {statsData.map((data, i)=>(
                <div key={i} className={scss.statCard}>
                  <h2 className={scss.statNumber}>{data.value}</h2>
                  <span className={scss.statLabel}>{data.label}</span>
                </div>
              ))}
          </div>
  
          <div className={scss.recommendedPlan}>
            <h2>Plan recomendado</h2>
            <p className={scss.planDescription}>
              Considerando la cantidad de recursos que has dado de alta en la superficie de ataque, hemos creado una
              recomendación que se adapte a tus necesidades.
            </p>
            <button className='btn'>Ver planes recomendados</button>
          </div>
        </div>
  
        <div className={scss.collaboratorsSection}>
          <div className={scss.collaboratorsInfo}>
            <div className={scss.sectionHeader}>
              <img className='imgColaborators' src='/images/user-icon.png' alt="icon-user" />
              <h2>Colaboradores</h2>
            </div>
            <ul className={scss.collaboratorsList}>
              <li>- Añada colaboradores a su equipo</li>
              <li>- Resuelva las vulnerabilidades más fácil.</li>
              <li>- No hay un máximo de colaboradores.</li>
              <li><a className={scss.addCollaborator} href="#">- Añadir un colaborador.</a></li>
            </ul>
          </div>
  
          <div className={scss.collaboratorsTable}>
            <div className={scss.tableHeader}>
              <h2 className={scss.tableCell}>Email</h2>
              <h2 className={scss.tableCell}>Member role</h2>
            </div>
            <div className={scss.tableRow}>
              <p className={scss.tableCell}>chris@codefend.com</p>
              <p className={scss.tableCell}>Founder</p>
            </div>
            <div className={scss.tableRow}>
              <p className={scss.tableCell}>edd@codefend.com</p>
              <p className={scss.tableCell}>Collaborator</p>
            </div>
            <div className={scss.tableRow}>
              <p className={scss.tableCell}>hernan@codefend.com</p>
              <p className={scss.tableCell}>Collaborator</p>
            </div>
            <div className={scss.tableRow}>
              <p className={scss.tableCell}>nacho@codefend.com</p>
              <p className={scss.tableCell}>Collaborator</p>
            </div>
          </div>
        </div>
      </div>
    )
  }