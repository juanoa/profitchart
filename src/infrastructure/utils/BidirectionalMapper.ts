export interface BidirectionalMapper<T, S> {
  map: (dto: T) => S
  reverse: (entity: S) => T
}