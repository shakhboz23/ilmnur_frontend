class Input {
  preventE(event) {
    if (event.key === "e" || event.key === "E") {
      event.preventDefault();
    }
  }

  limitVerify(event) {
    let inputValue = event.target.value;
    if (inputValue.length > 6) {
      event.preventDefault();
      inputValue = inputValue.slice(0, 6);
      event.target.value = inputValue;
    }
  }
}

export default new Input();
