function formatDay(dt: number) {
  const date = new Date(dt * 1000);
  return date.toLocaleDateString([], {
    weekday: 'long',
  });
}

export default formatDay;
