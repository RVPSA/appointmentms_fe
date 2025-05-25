import Button from "../components/Common/Button";
import InputField from "../components/Common/InputField";
import { CiUser, CiFileOn, CiClock1 } from "react-icons/ci";
import Status from "../components/Common/Status";
import { useTranslation } from "react-i18next";

const PatientMedicalHistory = () => {
  const [t] = useTranslation("patientMedicalHistory");
  return (
    <>
      <div className="min-h-screen p-1 md:p-5">
        <h1 className="font-bold text-xl mb-4">{t("header")}</h1>
        <div className="grid grid-cols-12 gap-y-8">
          {/* Search Field Area Start*/}
          <div className="bg-white col-span-12 grid grid-cols-12 gap-y-1 sm:gap-2 sm:p-3 rounded shadow-md">
            <div className="col-span-12 sm:col-span-9">
              <InputField
                type="text"
                id="patientSearch"
                label={t("inputFieldLabel")}
                onChange={() => {}}
              ></InputField>
            </div>
            <div className="col-span-12 sm:col-span-3">
              <Button title={t("searchButton")} onClick={() => {}}></Button>
            </div>
          </div>
          {/* Search Field Area End*/}
          {/*  Patient General Information Area Start*/}
          <div className="bg-white col-span-12 grid grid-cols-12 p-3 rounded shadow-md">
            <div className="col-span-12 flex flex-row gap-2 items-center text-lg font-medium">
              <CiUser style={{ color: "blue" }}></CiUser>
              <h3>{t("patientInformation.header")}</h3>
            </div>
            <div className="col-span-6 flex flex-row gap-1.5 mt-4 text-fontColor2">
              <div>{t("patientInformation.patientID")}</div>
              <div>P12345</div>
            </div>
            <div className="col-span-6 flex flex-row gap-1.5 mt-4 text-fontColor2">
              <div>{t("patientInformation.age")}</div>
              <div>45</div>
            </div>
            <div className="col-span-6 flex flex-row gap-1.5 mt-2 text-fontColor2">
              <div>{t("patientInformation.name")}</div>
              <div>John Smith</div>
            </div>
            <div className="col-span-6 flex flex-row gap-1.5 mt-2 text-fontColor2">
              <div>{t("patientInformation.gender")}</div>
              <div>Male</div>
            </div>
          </div>
          {/*  Patient General Information Area End*/}
          {/*  Medical Conditions Area Start*/}
          <div className="bg-white col-span-12 grid grid-cols-12 p-3 rounded shadow-md">
            <div className="col-span-12 flex flex-row gap-2 items-center text-lg font-medium">
              <CiFileOn style={{ color: "blue" }}></CiFileOn>
              <h3>{t("medicalCondition.header")}</h3>
            </div>
            <div className="col-span-12 flex flex-row justify-between items-center mt-4 text-fontColor2">
              <div className="flex flex-col">
                <p>Hypertension</p>
                <p className="text-xs">
                  {t("medicalCondition.diagnosed")}
                  {"25-10-2025"}
                </p>
              </div>
              <Status statusNumber={5}></Status>
            </div>
            <div className="col-span-12 flex flex-row justify-between items-center mt-4 text-fontColor2">
              <div className="flex flex-col">
                <p>Type 2 Diabetes</p>
                <p className="text-xs">
                  {t("medicalCondition.diagnosed")}
                  {"25-10-2025"}
                </p>
              </div>
              <Status statusNumber={6}></Status>
            </div>
          </div>
          {/*  Medical Conditions Area End*/}
          {/*  Prescription History Area Start*/}
          <div className="bg-white col-span-12 grid grid-cols-12 p-3 rounded shadow-md">
            <div className="col-span-12 flex flex-row gap-2 items-center text-lg font-medium">
              <CiClock1 style={{ color: "blue" }}></CiClock1>
              <h3>{t("prescriptionHistory.header")}</h3>
            </div>
            <div className="col-span-12 flex flex-row justify-between items-center mt-4 text-fontColor2">
              <div className="flex flex-col">
                <p>Lisinopril</p>
                <p className="text-xs">
                  {t("prescriptionHistory.dosage")}
                  {"10mg"}
                </p>
              </div>
              <div className="flex flex-col">
                <p>
                  {t("prescriptionHistory.prescibed")}
                  {"25-10-2025"}
                </p>
                <p className="text-xs">
                  {t("prescriptionHistory.duration")}
                  {"3"}
                  {t("prescriptionHistory.months")}
                </p>
              </div>
            </div>
            <div className="col-span-12 flex flex-row justify-between items-center mt-4 text-fontColor2">
              <div className="flex flex-col">
                <p>Metformin</p>
                <p className="text-xs">
                  {t("prescriptionHistory.dosage")}
                  {"10mg"}
                </p>
              </div>
              <div className="flex flex-col">
                <p>
                  {t("prescriptionHistory.prescibed")}
                  {"25-10-2025"}
                </p>
                <p className="text-xs">
                  {t("prescriptionHistory.duration")}
                  {"1"}
                  {t("prescriptionHistory.months")}
                </p>
              </div>
            </div>
          </div>
          {/*  Prescription History Area End*/}
        </div>
      </div>
    </>
  );
};

export default PatientMedicalHistory;
