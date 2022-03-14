
export default function ShowDate() {
    var showdate = new Date();
    var dt = showdate.toDateString();
  return (
    <div>{dt}</div>
  )
}