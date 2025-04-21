import scss from './teamMembers.module.scss';
import {members} from "../data/globalData";

export default function Team() {

  return (
    <div className='container-main'>
      <div className={scss.card}>
        <div className={scss.header}>
          <img className={scss.imgTeam} src="/images/user-icon.png" alt="icon-user"/>
          <div className={scss.headerContent}>
            <h2>Colaboradores y miembros</h2>
            <p>Añada colaboradores y miembros de su empresa para resolver las vulnerabilidades localizadas con mayor facilidad. <strong>No hay un máximo de colaboradores!</strong></p>
            <button className='btn'>Añadir un colaborador a la empresa</button>
          </div>
        </div>

        <div className={scss.tableContainer}>
          <table className={scss.ordersTable}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Full name</th>
                <th>Member role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.email}</td>
                  <td>{member.fullName}</td>
                  <td>{member.role}</td>
                  <td className={member.status.toLowerCase()}><a href="#">revoke access</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}