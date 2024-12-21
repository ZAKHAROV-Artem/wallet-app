import { differenceInDays } from "date-fns";

export function calculateDailyPoints(
  seasonStartDate = new Date(),
  currentDate = new Date(),
) {
  const start = new Date(seasonStartDate);
  const current = new Date(currentDate);

  const dayOfSeason = differenceInDays(current, start) + 1;

  if (dayOfSeason <= 0) {
    throw new Error("Current date must be on or after the season start date.");
  }

  const points = [];

  if (dayOfSeason === 1) {
    points.push(2);
    return "2";
  }

  if (dayOfSeason === 2) {
    points.push(3);
    return "3";
  }

  points[0] = 2;
  points[1] = 3;

  for (let i = 2; i < dayOfSeason; i++) {
    const newPoints = Math.round(points[i - 2] + points[i - 1] * 0.6);
    points.push(newPoints);
  }

  const dailyPoints = points[dayOfSeason - 1];

  return dailyPoints > 1000
    ? `${Math.round(dailyPoints / 1000)}K`
    : `${dailyPoints}`;
}
