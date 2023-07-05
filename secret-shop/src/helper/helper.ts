const getRatingClassName = (rating: number) => {
  if (rating < 4) {
    return 'card-rating--bad';
  } else if (rating < 7) {
    return 'card-rating--medium';
  } else if (rating < 9) {
    return 'card-rating--good';
  }
  return 'card-rating--excellent';
};

export { getRatingClassName };
