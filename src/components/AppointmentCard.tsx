import { useTranslation } from "react-i18next";
import { CiClock2, CiUser } from "react-icons/ci";

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
  var statusBGColor: string = "";
  var statusTextColor: string = "";
  var statusName: string = "";

  const [t] = useTranslation("appointmentCard");

  switch (status) {
    case 1:
      //Completed
      statusBGColor = "bg-gray";
      statusTextColor = "text-completedText";
      statusName = t("appointmentCard.completed");
      break;
    case 2:
      //Inprogress
      statusBGColor = "bg-inprogressBackGround";
      statusTextColor = "text-inprogressText";
      statusName = t("appointmentCard.inProgress");
      break;
    case 3:
      //Scheduled
      statusBGColor = "bg-scheduledBackGround";
      statusTextColor = "text-scheduledText";
      statusName = t("appointmentCard.scheduled");
      break;
    case 4:
      //Cancelled
      statusBGColor = "bg-cancelledBackground";
      statusTextColor = "text-cancelledText";
      statusName = t("appointmentCard.cancelled");
      break;
    default:
      break;
  }

  return (
    <>
      <div className=" w-full md:w-1/2 border-2 border-gray rounded-xl px-3 py-4">
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-2">
            <CiClock2></CiClock2>
            <h4 className="font-bold">{time}</h4>
          </div>
          <div className={`rounded-2xl ${statusBGColor} px-2 `}>
            <h5 className="text-sm ">{statusName}</h5>
          </div>
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
