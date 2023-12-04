import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import isoWeekInYear from "dayjs/plugin/isoWeeksInYear";
import isoLeapInYear from "dayjs/plugin/isLeapYear";
dayjs.extend(isoWeek);
dayjs.extend(isoWeekInYear);
dayjs.extend(isoLeapInYear);

const Iniciosemana = dayjs().startOf("week");
const Finalsemana = dayjs().endOf("week");
const semanasdoAno = dayjs().isoWeek();

console.log(Iniciosemana.format("YYYY-MM-DD"));
console.log(Finalsemana.format("YYYY-MM-DD"));
console.log(semanasdoAno);
