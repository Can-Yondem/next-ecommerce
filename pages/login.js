import Login from "../components/Login"
import moment from 'moment';
var check = moment("2021-10-01T12:41:44.003423+00:00", 'YYYY/MM/DD HH:mm:ss');

var month = check.format('M');
var day   = check.format('D');
var year  = check.format('YYYY');
var hour = check.format('HH');
var minute = check.format('mm');
var second = check.format('ss');
console.log(second)


export default function Home() {
  return (
    <>
        <Login />
    </>
  )
}
