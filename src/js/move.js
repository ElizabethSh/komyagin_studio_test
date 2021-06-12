const container = document.querySelector('.container-moved');
const img = document.querySelector('.image-moved');

img.addEventListener(`mousedown`, function(evt) {
    evt.preventDefault();

    const mousemoveHandler = (moveEvt) => {
        moveEvt.preventDefault();

        const containerSize = container.getBoundingClientRect();
        const imgSize = img.getBoundingClientRect();

        if ((moveEvt.clientX < containerSize.left) || (moveEvt.clientX > containerSize.right)
        || (moveEvt.clientY < containerSize.top) || (moveEvt.clientY > containerSize.bottom)) {
            return;
        }

        const shift = {
            x: moveEvt.clientX - containerSize.left,
            y: moveEvt.clientY - containerSize.top
        };

        const ratio = {
            x: shift.x / containerSize.width,
            y: shift.y / containerSize.height
        };

        let translateX = imgSize.width * ratio.x - containerSize.width;
        translateX = translateX < 0 ? 0 : translateX;

        let translateY = imgSize.height * ratio.y - containerSize.height;
        translateY = translateY < 0 ? 0 : translateY;

        img.style.transform = `translate(${-translateX}px, ${-translateY}px)`
    };

    const mouseupHandler = () => {
        document.removeEventListener(`mousemove`, mousemoveHandler);
        document.removeEventListener(`mouseup`, mouseupHandler);
    };

    document.addEventListener(`mousemove`, mousemoveHandler);
    document.addEventListener(`mouseup`, mouseupHandler);
});
