export type TimeType = {
  hrs:number;
  min:number;
  sec:number;
}

export function timeFromSeconds(seconds: number):TimeType {
  const hrs:number = Math.floor(seconds / 3600);
  const min:number = Math.floor((seconds - (hrs * 3600)) / 60);
  const sec:number = seconds - (hrs * 3600) - (min * 60);

  return {
    hrs,
    min,
    sec
  };
}