Another implementation includes a `useMemo` in order to `memoize` the filtering result.

This way, when the UI is complex and data keep changing, causing re-renders, the filtering
result does not have to be re-calculated on every render.

This case makes sense when having to filter a big list of data, and the filtering is expensive.