const newId = (): string => {
  return Math.random().toString(36).slice(2, 16);
};

export default newId;
