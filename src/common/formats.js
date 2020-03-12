export function toQaId({ parentId, componentId, useId }: TestIdType = {}): string {
  return [parentId, componentId, useId].filter(Boolean).join('_')
}
