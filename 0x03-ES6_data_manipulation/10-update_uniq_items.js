export default function updateUniqueItems(mapedItem) {
  try {
    mapedItem.forEach((i, j) => {
      if (i === 1) {
      mapedItem.set(j, 100);
      }
    });
  }
  catch(err) {
    throw new Error('Cannot process');
  }
}
