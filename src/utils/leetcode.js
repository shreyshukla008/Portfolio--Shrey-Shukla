export function extractUnixDates(dataString) {
  const matches = dataString.match(/"(\d+)":/g);
  return matches ? matches.map((match) => match.replace(/[:"]/g, "")) : [];
}

export function getMaxConsecutiveStreak(data) {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  let maxStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < sortedData.length; i++) {
    if (
      i === 0 ||
      new Date(sortedData[i].date) - new Date(sortedData[i - 1].date) ===
        24 * 60 * 60 * 1000
    ) {
      currentStreak++;
    } else {
      maxStreak = Math.max(maxStreak, currentStreak);
      currentStreak = 1;
    }
  }

  return Math.max(maxStreak, currentStreak);
}
