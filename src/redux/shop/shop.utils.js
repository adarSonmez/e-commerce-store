export const convertCollectionsSnapshotToMap = (collections) =>
  collections.docs
    .map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    })
    .reduce((accumulator, collection) => {
      accumulator[collection.routeName] = collection;
      return accumulator;
    }, {});
