import { useContext } from 'react';
import { Context } from '../index.js';
import '../css/TypeBar.css'

const HouseholdTypeBar = () => {
    const {device} = useContext(Context);
    return(
        <ul className='types'>  
            {device.types.map(typeId =>
                <li key={typeId.id} style={{cursor: 'pointer'}}>{typeId.name}</li>
            )}
        </ul>
    )
}

export default HouseholdTypeBar;    