import React from 'react'

const Accordion = ({items}) => {
    const renderedItems = items.map(item => {
        return <div>
            <div className="title-active">
                <i className="dropdown icon"></i>
                {item.title}
            </div>
        </div>
    });

return <h1>{renderedItems}</h1>
    
}

export default Accordion

