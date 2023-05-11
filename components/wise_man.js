import React from 'react';


function useColor(status) {
    if (status === 'yes')
        return '#52e691';

    if (status === 'no')
        return '#a41413';

    if (status === 'info')
        return '#3caee0';

    throw new Error(`Invalid status: ${status}`);
}

export default function WiseMan(props) {
    const { setProps, name, order_number, status } = props;
    const fullName = `${name} • ${order_number}`;
    const color = useColor(status);

    return React.createElement('div', { className: 'wise-man', style: { background: color } }, [
        fullName
    ])
}