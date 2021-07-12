const smallKey = (length) => {
  return Math.random().toString(36).substr(2, length);
};

export default smallKey;
