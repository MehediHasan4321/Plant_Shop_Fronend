import React from 'react';

const Nav_bar_Button = ({handler,value='Click Me',color}) => {
    return (
        <button onClick={handler} className='px-6 py-2 bg-black text-white hover:bg-green-800'>{value}</button>
    );
};

export default Nav_bar_Button;