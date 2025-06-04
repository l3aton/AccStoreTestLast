// import { useContext } from 'react';
// import { Context } from '../index';
// import '../css/TypeBar.css';
// import SemiTypesBar from './SemiTypesBar';

// const TypesBar = () => {
//     const {device} = useContext(Context)
//     return(
//         <ul className='types'>
//             {device.types.map(type => 
//                 <li key={type.id} onClick={() => device.setSelectedType(type)} active = {type.id === device.selectedType.id} style={{cursor: 'pointer'}} >{type.name}</li>
//             )}
//         </ul>
//     )
// };

// export default TypesBar;

import { useContext, useState } from 'react';
import { Context } from '../index';
import '../css/TypeBar.css';
import SemiTypesBar from './SemiTypesBar';

const TypesBar = () => {
  const { device } = useContext(Context);
  const [openTypeId, setOpenTypeId] = useState(null);

  const handleClick = (type) => {
    device.setSelectedType(type);
    setOpenTypeId(prev => prev === type.id ? null : type.id);
  };

  return (
    <ul className="types">
      {device.types.map(type => (
        <li key={type.id}>
          <div
            className="type-item"
            onClick={() => handleClick(type)}
            style={{
              cursor: 'pointer',
              fontWeight: device.selectedType?.id === type.id ? 'bold' : 'normal',
            }}
          >
            {type.name}
          </div>

          {openTypeId === type.id && (
            <SemiTypesBar parentId={type.id} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TypesBar;

