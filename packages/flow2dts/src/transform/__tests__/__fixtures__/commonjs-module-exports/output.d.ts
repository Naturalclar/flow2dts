declare const $f2t_someKey: string
declare const $f2t_anotherKey: () => boolean
export { $f2t_someKey as someKey, $f2t_anotherKey as anotherKey }
declare const $f2tExportDefault: /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  someKey: string
  anotherKey: () => boolean
}
export default $f2tExportDefault
