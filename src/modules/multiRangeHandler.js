const multiRangeHandler = () => {
  const rangeLeft = document.getElementById("range-left");
  const rangeRight = document.getElementById("range-right");
  const counterLeft = document.getElementById("counter-left");
  const counterRight = document.getElementById("counter-right");
  const thumbLeft = document.getElementById("thumb-left");
  const thumbRight = document.getElementById("thumb-right");
  const range = document.getElementById("range-bar");

  function setLeftValue({ target }) {
    let percent;
    const min = parseInt(target.min);
    const max = parseInt(target.max);

    target.value = Math.min(parseInt(target.value), parseInt(rangeRight.value) - 1);
    counterLeft.value = target.value;
    rangeLeft.value = target.value;
    percent = ((target.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
  }
  setLeftValue({ target: rangeLeft });

  function setRightValue({ target }) {
    let percent;
    const min = parseInt(target.min);
    const max = parseInt(target.max);

    target.value = Math.max(parseInt(target.value), parseInt(rangeLeft.value) + 1);
    counterRight.value = target.value;
    counterRight.value = target.value;
    percent = ((target.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
  }
  setRightValue({ target: rangeRight });

  rangeLeft.addEventListener("input", setLeftValue);
  counterLeft.addEventListener("input", setLeftValue);
  rangeRight.addEventListener("input", setRightValue);
  counterRight.addEventListener("input", setRightValue);
};

export default multiRangeHandler;