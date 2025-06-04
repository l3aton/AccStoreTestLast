// import { Context } from '../index';
// import '../css/SemiTypesBar.css';


// const SemiTypesBar = () =>{
//     const {device} = useContext(Context)

//     return(
//         <ul className='semi-types'>
//             {device.semiType.map(type => 
//                 <li key={type.id}>{type.name}</li>
//             )}
//         </ul>
//     )
// }

// export default SemiTypesBar;


import { useContext } from 'react';
import { Context } from '../index';
import '../css/SemiTypesBar.css';

const SemiTypesBar = ({ parentId }) => {
  const { device } = useContext(Context);

  const filtered = device.semiTypes.filter(st => st.typeId === parentId);

  return (
    <ul className="semi-types">
      {filtered.map(type => (
        <li key={type.id}>{type.name}</li>
      ))}
    </ul>
  );
};

export default SemiTypesBar;

