type TimeSlotProps = {
    time: string; //Time, that required to Show
    isDisabled: boolean; //Handle disable time slots
    setSelectedTime: (id: number) => void; //If particular time slot was selected this method perform 
    id: number; // Relevant Time slot ID
    selectedSlot: number | undefined; //Selected Slot, to compare with other slots
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, isDisabled = false, setSelectedTime, id, selectedSlot }) => {
    const handleOnClick = () => {
        if (!isDisabled) setSelectedTime(id);
    }
    const isSelected = selectedSlot === id;

    return (
        <>
            <div className={`py-5 px-7 rounded-xl border-2 
                border-gray font-bold text-xl 
                ${isSelected ? 'border-lightblue' : 'border-gray'}
                ${!isDisabled ? 'text-fontColor2 cursor-pointer' : 'text-fontColor2Disable cursor-not-allowed'}
                 `}
                onClick={handleOnClick}
            >
                <p>{time}</p>
            </div>
        </>
    )
}

export default TimeSlot;