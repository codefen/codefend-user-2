import scss from './orders.module.scss';
import {orders} from "../data/globalData"


export default function Orders() {

  return (
    <div className='container-main'>
      <div className={scss.card}>
        <div className={scss.header}>
          <img src="/images/bitcoin.png" alt="icon-coin"/>
          <div>
            <h2>Ordenes de compra</h2>
            <p>Visualice y administre sus ordenes de compra. Compre nuevos planes para su empresa.</p>
            <button className='btn'>Realizar una nueva compra</button>
          </div>
        </div>

        <div className={scss.purchaseOrdersTableContainer}>
          <table className={scss.purchaseOrdersTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Orden</th>
                <th>Renovación</th>
                <th>Price</th>
                <th>Condición</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.date}</td>
                  <td>{order.description} <strong>{order.level}</strong></td>
                  <td>{order.renewal}</td>
                  <td>{order.price}</td>
                  <td className={order.status.toLowerCase()}>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

