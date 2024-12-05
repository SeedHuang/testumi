import { GlobalRegistry, IDesignerRegistry } from '@dn/core'
import { globalThisPolyfill } from '@dn/shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
