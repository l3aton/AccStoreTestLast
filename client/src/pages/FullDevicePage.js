import { useLocation } from "react-router-dom";
import '../css/fullDevicePage.css';
import DeviceSlider from '../components/DeviceSlider.js'

const FullDevicePage = () => {
  const location = useLocation();
  const device = location['state'];

  return (
    <div className="device-page">
      <h1 className="device-page-title">{device['g:title']}</h1>
        <div className="device-page-content">
          <DeviceSlider device={device} className='device-slider'/>
            <div className="device-page-short-description">
              <h2>{device['g:price']}</h2>
              <div className="device-page-buttons">
                <button className="device-page-buy-button">Купити</button>
                <button className="device-page-basket-button">В кошик</button>
              </div>
              <p className="device-page-description">{device['g:description']}</p>
            </div>
        </div>
        <div className="product-detail">
          <table>
            <tbody>
              {device['g:product_detail'].map((attr, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px' }}><strong>{attr["g:attribute_name"]}:</strong></td>
                  <td style={{ padding: '10px' }}>{attr["g:attribute_value"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default FullDevicePage;