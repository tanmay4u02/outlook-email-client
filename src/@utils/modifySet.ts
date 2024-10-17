export default function modifySet(set: Set<any>, operation: 'ADD' | 'DELETE', value: any) {
  const newSet = new Set(set);
  if (operation === 'ADD') {
    newSet.add(value);
  }
  if (operation === 'DELETE') {
    newSet.delete(value);
  }
  return newSet;
}
