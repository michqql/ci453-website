const left = document.querySelector("#left-side");

const handleOnMove = e => {
    const percentage = (e.clientX / window.innerWidth) * 100;

    left.style.width = `${percentage}%`;
}

document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);