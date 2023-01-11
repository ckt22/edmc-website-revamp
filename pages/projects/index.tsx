import { useState } from 'react';

const selectOptions = [
    {
        name: 'OMG',
        value: 'omg'
    }
];

function Projects() {

    const [galleryImageIndex, setGalleryImageIndex] = useState<number>(0);

    return (
        <>
            <div>
                <select value={''}>
                    {selectOptions.map((op, idx) => (<option key={idx} value={op.value}>{op.name}</option>))}
                </select>
            </div>
        </>
    );
}

export default Projects;
