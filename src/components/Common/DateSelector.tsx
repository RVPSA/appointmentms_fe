import DatePicker from "react-datepicker";

type DateSelectorProps = {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  dateFormat: string;
  filterDate: (date: Date) => boolean;
};

const DateSelector: React.FC<DateSelectorProps> = ({
  selected,
  onChange,
  dateFormat,
  filterDate,
}) => {
  const handleChage = (date: Date | null) => {
    onChange(date);
  };
  return (
    <>
      <DatePicker
        selected={selected}
        onChange={(date) => handleChage(date)}
        dateFormat={dateFormat}
        filterDate={filterDate}
        className="border-1 border-gray rounded focus:outline-none focus:border-darkblue p-1 text-lg"
      ></DatePicker>
    </>
  );
};

export default DateSelector;
