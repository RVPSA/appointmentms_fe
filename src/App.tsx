import { useState } from "react";
import TimeSlot from "./components/TimeSlot";
import LoginPage from "./pages/LoginPage";

function App() {

  const[selectedSlot,setSelectedSlot] = useState<number | undefined>();

  const setTime = (id:number)=>{
    setSelectedSlot(id);
  }

  return (
    <>
      <div className="flex justify-center items-center bg-bgcolor w-full min-h-screen">
        {/* <LoginPage></LoginPage> */}
        <TimeSlot time="05.00 AM" isDisabled={false} setSelectedTime={setTime} id = {0} selectedSlot = {selectedSlot}></TimeSlot>
        <TimeSlot time="05.00 AM" isDisabled={true} setSelectedTime={setTime} id = {1} selectedSlot = {selectedSlot}></TimeSlot>
        <TimeSlot time="05.00 AM" isDisabled={false} setSelectedTime={setTime} id = {2} selectedSlot = {selectedSlot}></TimeSlot>
      </div>
    </>
  );
}

export default App;
