export const useValidate = () => {
  function phoneMask(phone) {
    let phoneNumber = phone.replace(/\D/g, "");
    const spacePositions = [2, 6, 9, 12];

    // Insert spaces at specified positions
    for (var i = 0; i < spacePositions.length; i++) {
      if (phoneNumber.length > spacePositions[i]) {
        phoneNumber =
          phoneNumber.slice(0, spacePositions[i]) +
          " " +
          phoneNumber.slice(spacePositions[i]);
      }
    }

    // Update the input value
    return phoneNumber.slice(0, 12);
  }

  return { phoneMask };
};
