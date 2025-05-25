import { useTranslation } from "react-i18next";
import { SlCalender } from "react-icons/sl";
import AppointmentCard from "../components/AppointmentCard/AppointmentCard";

const AppointmentVisible = () => {
  const [t] = useTranslation("appointmentVisible");
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="min-h-screen">
        <div className="h-20 bg-white pl-5 py-5 mb-4">
          <div className="flex flex-row items-center gap-3">
            <SlCalender style={{ color: "blue" }}></SlCalender>
            <h1 className="font-bold text-xl">{t("header")}</h1>
          </div>
          <div>{todayDate}</div>
        </div>
        <div className="grid grid-cols-12">
          <div className="hidden md:grid md:col-span-3"></div>
          <div className="col-span-12 md:col-span-6 grid gap-y-3">
            <AppointmentCard
              status={1}
              patientName="John Smith"
              time="9.00 AM"
            ></AppointmentCard>
            <AppointmentCard
              status={2}
              patientName="John Smith"
              time="9.00 AM"
            ></AppointmentCard>
            <AppointmentCard
              status={3}
              patientName="John Smith"
              time="9.00 AM"
            ></AppointmentCard>
            <AppointmentCard
              status={4}
              patientName="John Smith"
              time="9.00 AM"
            ></AppointmentCard>
          </div>
          <div className="hidden md:grid md:col-span-3"></div>
        </div>
      </div>
    </>
  );
};
export default AppointmentVisible;
