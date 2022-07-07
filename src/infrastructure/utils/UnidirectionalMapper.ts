export interface UnidirectionalMapper<T, S> {
  map: (dto: T) => S
}