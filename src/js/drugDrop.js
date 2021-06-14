const img = document.querySelector('.image-draggable');
const container = document.querySelector('.container-draggable');

img.addEventListener('mousedown', (evt) => {
    evt.preventDefault();
    const imgSize = img.getBoundingClientRect();
    const containerSize = container.getBoundingClientRect();

    const shift = {
        x: evt.clientX - imgSize.left,
        y: evt.clientY - imgSize.top
    };

    const mousemoveHandler = (moveEvt) => {
        moveEvt.preventDefault();

        img.style.left = moveEvt.pageX - containerSize.left - shift.x + 'px';
        img.style.top = moveEvt.pageY - containerSize.top - shift.y + 'px';

        if (moveEvt.pageX < containerSize.left || moveEvt.pageX > containerSize.right ||
            moveEvt.pageY < containerSize.top || moveEvt.pageY > containerSize.bottom) {
                mouseupHandler();
            }
    };

    const mouseupHandler = () => {
        document.removeEventListener('mousemove', mousemoveHandler);
        document.removeEventListener('mouseup', mouseupHandler);
    };

    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('mouseup', mouseupHandler);
});
