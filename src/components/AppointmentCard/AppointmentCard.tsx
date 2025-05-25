import { useTranslation } from "react-i18next";
import { CiClock2, CiUser } from "react-icons/ci";
import Status from "../Common/Status";

type AppointmentCardProps = {
  status: number;
  patientName: string;
  time: string;
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  status,
  patientName,
  time,
}) => {
  return (
    <>
      <div className=" w-full border-2 border-gray rounded-xl px-3 py-4">
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-2">
            <CiClock2></CiClock2>
            <h4 className="font-bold">{time}</h4>
          </div>
          <Status statusNumber={status}></Status>
        </div>
        <div className="flex items-center gap-2">
          <CiUser></CiUser>
          <h3>{patientName}</h3>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
