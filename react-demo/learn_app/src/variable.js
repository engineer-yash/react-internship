const data = "hi";
function Display() {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
const alldata = [1, 4, 5, 7, 8, 9, 9];
function DiplayAll() {
  return (
    <div>
      {alldata.map((data) => {
        return <h1>{data}</h1>;
      })}
    </div>
  );
}
const data2 = { Key1: "value1", Key2: "value2" };
function KeyValue() {
  return (
    <div>
      <table border='1px' width={200}>
        <th>Keys</th>
        <th>Values</th>
        {Object.keys(data2).map((data) => {
          return (
            <tr>
              <td>{data}</td>
              <td>{data2[data]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Display;
export { DiplayAll, KeyValue };
