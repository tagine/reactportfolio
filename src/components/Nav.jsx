import React from 'react'
import { Menu } from 'semantic-ui-react'


export default function Nav() {
    return (
        
<Menu items={items} />

)
};

const items = [
    { key: 'editorials', active: true, name: 'Editorials' },
    { key: 'review', name: 'Reviews' },
    { key: 'events', name: 'Upcoming Events' },
]