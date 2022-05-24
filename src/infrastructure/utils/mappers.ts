export interface BidirectionalMapper<E, D> {
  convert: (entity: E) => D,
  reverse: (dto: D) => E,
}

export interface OneWayMapper<E, D> {
  convert: (entity: E) => D,
}