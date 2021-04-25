import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch
} from 'react-redux'

import type { State, Dispatch } from '../store'

export const useSelector: TypedUseSelectorHook<State> = useReduxSelector
export const useDispatch = () => useReduxDispatch<Dispatch>()
