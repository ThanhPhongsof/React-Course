import React from 'react';

const AccordionContent = ({value}) => {
    return (
        {value && <div className="content">Accordion content</div>}
    );
};

export default AccordionContent;