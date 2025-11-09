export function generateInitialDataset(count: number) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: `Employee ${i + 1}`,
      performance: Math.floor(Math.random() * 100),
      attendance: Math.floor(Math.random() * 100),
      satisfaction: Math.floor(Math.random() * 100),
    });
  }
  return data;
}
