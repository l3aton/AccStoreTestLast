import DeviceTypeBar from '../components/DeviceTypeBar.js'
import DeviceList from '../components/DeviceList.js';
import '../css/devicepage.css'

const DevicePage = () => {
    return(
        <div className='container-devicepage'>
            <DeviceTypeBar/>
            <DeviceList/>
        </div>
    )
}

export default DevicePage;