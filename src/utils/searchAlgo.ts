export default function <T extends Record<any, any>>(
  data: T[],
  userText: string,
  searchKey: string
): T[] {
  let res: T[] = [];
  for (let i = 0; i < data.length; i++) {
    let name = data[i][searchKey];
    if (name.toLowerCase().indexOf(userText.toLowerCase()) !== -1) {
      res = [...res, data[i]];
    }
  }
  return res;
}
