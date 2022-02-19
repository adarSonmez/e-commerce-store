export const convertCollectionsSnapshotToMap = async (collections) => {
  const transformedCollection = await collections.docs.map((doc) => {
    const { title, items, routeName } = doc.data();

    return {
      id: doc.id,
      title,
      routeName,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
