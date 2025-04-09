import scss from './dashboard.module.scss';
export default function Dashboard() {
    return (
      <div className={scss.dashboardContainer}>
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
            <div className={scss.statCard}>
              <h2 className={scss.statNumber}>23</h2>
              <p className={scss.statLabel}>WEB & EXTERNAL</p>
            </div>
            <div className={scss.statCard}>
              <h2 className={scss.statNumber}>3</h2>
              <p className={scss.statLabel}>MOBLE APPS</p>
            </div>
            <div className={scss.statCard}>
              <h2 className={scss.statNumber}>23</h2>
              <p className={scss.statLabel}>INTERNAL</p>
            </div>
            <div className={scss.statCard}>
              <h2 className={scss.statNumber}>10</h2>
              <p className={scss.statLabel}>CLOUD ASSETS</p>
            </div>
            <div className={scss.statCard}>
              <h2 className={scss.statNumber}>10</h2>
              <p className={scss.statLabel}>SOURCE CODE</p>
            </div>
            <div className={scss.statCard}>
              <h2 className={scss.statNumber}>62</h2>
              <p className={scss.statLabel}>SOCIAL ENGINEERING</p>
            </div>
          </div>
  
          <div className={scss.recommendedPlan}>
            <h2 className={scss.planTitle}>Plan recomendado</h2>
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
              <div className={scss.iconUsers}></div>
              <h2 className={scss.sectionTitle}>Colaboradores</h2>
            </div>
            <ul className={scss.collaboratorsList}>
              <li>- Añada colaboradores a su equipo</li>
              <li>- Resuelva las vulnerabilidades más fácil.</li>
              <li>- No hay un máximo de colaboradores.</li>
              <li className={scss.addCollaborator}>- Añadir un colaborador.</li>
            </ul>
          </div>
  
          <div className={scss.collaboratorsTable}>
            <div className={scss.tableHeader}>
              <div className={scss.tableCell}>Email</div>
              <div className={scss.tableCell}>Member role</div>
            </div>
            <div className={scss.tableRow}>
              <div className={scss.tableCell}>chris@codefend.com</div>
              <div className={scss.tableCell}>Founder</div>
            </div>
            <div className={scss.tableRow}>
              <div className={scss.tableCell}>edd@codefend.com</div>
              <div className={scss.tableCell}>Collaborator</div>
            </div>
            <div className={scss.tableRow}>
              <div className={scss.tableCell}>hernan@codefend.com</div>
              <div className={scss.tableCell}>Collaborator</div>
            </div>
            <div className={scss.tableRow}>
              <div className={scss.tableCell}>nacho@codefend.com</div>
              <div className={scss.tableCell}>Collaborator</div>
            </div>
          </div>
        </div>
      </div>
    )
  }