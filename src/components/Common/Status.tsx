import { useTranslation } from "react-i18next";
import { StatusEnum } from "../../utilities/enums/enums";

type StatusProps = {
  statusNumber: number;
};
const Status: React.FC<StatusProps> = ({ statusNumber }) => {
  const [t] = useTranslation("status");

  var statusBGColor: string = "";
  var statusTextColor: string = "";
  var statusName: string = "";

  switch (statusNumber) {
    case StatusEnum.completed:
      statusBGColor = "bg-gray";
      statusTextColor = "text-completedText";
      statusName = t("status.completed");
      break;
    case StatusEnum.inprogress:
      statusBGColor = "bg-inprogressBackGround";
      statusTextColor = "text-inprogressText";
      statusName = t("status.inProgress");
      break;
    case StatusEnum.scheduled:
      statusBGColor = "bg-scheduledBackGround";
      statusTextColor = "text-scheduledText";
      statusName = t("status.scheduled");
      break;
    case StatusEnum.cancelled:
      statusBGColor = "bg-cancelledBackground";
      statusTextColor = "text-cancelledText";
      statusName = t("status.cancelled");
      break;
    case StatusEnum.managed:
      statusBGColor = "bg-gray";
      statusTextColor = "text-completedText";
      statusName = t("status.managed");
      break;
    case StatusEnum.onGoing:
      statusBGColor = "bg-inprogressBackGround";
      statusTextColor = "text-inprogressText";
      statusName = t("status.onGoing");
      break;
    case StatusEnum.normal:
      statusBGColor = "bg-inprogressBackGround";
      statusTextColor = "text-inprogressText";
      statusName = t("status.normal");
      break;
    case StatusEnum.attention:
      statusBGColor = "bg-attentionBackground";
      statusTextColor = "text-attentionText";
      statusName = t("status.attention");
      break;
    case StatusEnum.critical:
      statusBGColor = "bg-cancelledBackground";
      statusTextColor = "text-cancelledText";
      statusName = t("status.critical");
      break;
    default:
      break;
  }
  return (
    <>
      <div className={`rounded-2xl ${statusBGColor} px-2 `}>
        <h5 className="text-sm ">{statusName}</h5>
      </div>
    </>
  );
};

export default Status;
