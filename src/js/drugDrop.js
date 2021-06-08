const img = document.querySelector(`.image-draggable`);

img.addEventListener('mousedown', (evt) => {
    evt.preventDefault();

    let startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };

    const mousemoveHandler = (moveEvt) => {
        moveEvt.preventDefault();

        const shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };

        img.style.top = img.offsetTop - shift.y + 'px';
        img.style.left = img.offsetLeft - shift.x + 'px';


    }

    const mouseupHandler = () => {
        document.removeEventListener('mousemove', mousemoveHandler);
        document.removeEventListener('mouseup', mouseupHandler);
    }

    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('mouseup', mouseupHandler);
})
