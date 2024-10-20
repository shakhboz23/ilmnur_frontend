export const useFormatter = () => {
  function formatSecondsToHours(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsAfterMinutes = remainingSeconds % 60;

    if (hours) {
      return [hours, "hours"];
    } else if (!hours) {
      if (minutes) {
        return [minutes, "minutes"];
      } else {
        if (seconds) {
          return [seconds, "seconds"];
        }
        return [0, "hour"];
      }
    }
  }

  function formateCreatedAt(date) {
    date = new Date(date); // Note: Months are zero-based, so 3 represents April
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");
    return formattedDate;
  }

  return { formatSecondsToHours, formateCreatedAt };
};
