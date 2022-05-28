import {useUiRepository} from "../../infrastructure/repositories/ui-repository";

export function useLoadingService() {
  const {startLoading: startLoadingRepository, finishLoading: finishLoadingRepository} = useUiRepository();

  function start() {
    startLoadingRepository();
  }

  function finish() {
    finishLoadingRepository()
  }

  return {start, finish};
}