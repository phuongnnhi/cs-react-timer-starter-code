export const formatTime = (time) => {
  const getSeconds = time%60;
  const getMinutes = Math.floor((time%3600)/60);
  const getHours = Math.floor(time/3600);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
