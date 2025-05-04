import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import TimeSlot from "../components/Common/TimeSlot";

const AppointmentBooking = () => {
  const [t] = useTranslation("appointmentBooking");

  const [date, setDate] = useState<Date | null>(new Date());
  const fileterPassedDate = (date: Date) => new Date() < date;
  const [selectedSlot, setSelectedSlot] = useState<number | undefined>();

  var dummySlot = [
    {
      id: 1,
      time: "09.00 AM",
      isDisabled: false,
    },
    {
      id: 2,
      time: "10.00 AM",
      isDisabled: true,
    },
    {
      id: 3,
      time: "10.30 AM",
      isDisabled: false,
    },
    {
      id: 4,
      time: "12.00 Noon",
      isDisabled: false,
    },
    {
      id: 5,
      time: "3.00 PM",
      isDisabled: false,
    },
    {
      id: 6,
      time: "3.00 PM",
      isDisabled: false,
    },
    {
      id: 7,
      time: "3.00 PM",
      isDisabled: false,
    },
  ];

  const setSlot = (id: number) => {
    setSelectedSlot(id);
  };

  return (
    <>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="hidden md:col-span-3 md:grid"></div>
        <div className="col-span-12 md:col-span-6 p-3">
          <h3 className="font-bold text-2xl m-2 mb-5">{t("header")}</h3>
          <div className="flex flex-row gap-1.5 m-2 items-center">
            <SlCalender style={{ color: "blue" }}></SlCalender>
            <p className="text-xl font-medium">{t("datePlaceHolder")}</p>
          </div>
          <div className="m-2">
            <DatePicker
              selected={date}
              className="border-1 border-gray rounded focus:outline-none focus:border-darkblue p-1 text-lg"
              onChange={(date) => setDate(date)}
              dateFormat="MMMM d, yyyy"
              filterDate={fileterPassedDate}
            ></DatePicker>
          </div>
          <div className="m-2 mb-5 text-xl font-medium">
            {t("timeSlotheader")}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-2">
            {dummySlot.map((data, index) => {
              return (
                <div key={index}>
                  <TimeSlot
                    time={data.time}
                    isDisabled={data.isDisabled}
                    setSelectedTime={setSlot}
                    id={data.id}
                    selectedSlot={selectedSlot}
                  ></TimeSlot>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden md:col-span-3 md:grid"></div>
      </div>
    </>
  );
};

export default AppointmentBooking;
