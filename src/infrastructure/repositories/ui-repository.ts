import {useDispatch} from "react-redux";
import {finishLoading as finishLoadingRedux, startLoading as startLoadingRedux} from "../components/redux/actions/ui";

export function useUiRepository() {

  const dispatch = useDispatch();

  function startLoading() {
    dispatch(startLoadingRedux());
  }

  function finishLoading() {
    dispatch(finishLoadingRedux());
  }

  return {startLoading, finishLoading}
}