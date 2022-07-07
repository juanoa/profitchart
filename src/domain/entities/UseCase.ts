export interface UseCase<T> {
  (...args: any): T
}