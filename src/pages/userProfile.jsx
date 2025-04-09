import scss from './userProfile.module.scss';
import { useState } from "react"

export default function Profile() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const handlePasswordChange = (e) => {
    e.preventDefault()
    console.log("Password change requested")
  }

  const handleTwoFactorVerification = (e) => {
    e.preventDefault()
    console.log("2FA verification requested")
  }

  return (
    <div className='container-main'>
      <div className={scss.profileSection}>
        <img src="/images/user-icon.png" alt="user-icon"/>
        <div className={scss.profileInfo}>
          <h2>User profile</h2>
          <p>
            Añada colaboradores y miembros de su empresa para resolver las vulnerabilidades localizadas con mayor
            facilidad. <strong>No hay un máximo de colaboradores!</strong>
          </p>
        </div>
      </div>

      <div className={scss.contentFlex}>
        <div className={scss.passwordSection}>
          <h3>Cambio de password</h3>
          <p>Cambie la contraseña de su usuario. Su contraseña necesita un mínimo de 12 caracteres.</p>
          <form onSubmit={handlePasswordChange} className={scss.formProfile}>
              <input
                className='input-primary'
                //type={showCurrentPassword ? "text" : "password"}
                placeholder="Contraseña actual"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />             
              <input
                className='input-primary'
                // type={showNewPassword ? "text" : "password"}
                placeholder="Nueva contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              /> 
            <button type="submit" className='btn'>
              Cambiar el password
            </button>
          </form>
        </div>

        <div className={scss.twoFactorSection}>
          <h3>Autenticación de 2 factores</h3>
          <p>
            Active la verificación de dos factores para añadir una capa extra de protección a su cuenta. Primero use su
            teléfono para escanear el QR usando <a className={scss.highlight} href='#'>Authenticator</a>.
          </p>
          <div className={scss.qrContain}>
            <img src="/images/qr-demo.png" alt="QR Code for 2FA" />
            <form onSubmit={handleTwoFactorVerification}>
              <p>Complete con el número indicado:</p>
              <input className='input-primary' type="text" />
              <button type="submit" className='btn'>
                Validar y confirmar doble fase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}