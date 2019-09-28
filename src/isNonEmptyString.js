module.exports = value =>
  (typeof value === "string" || value instanceof String) && value.length > 0;
