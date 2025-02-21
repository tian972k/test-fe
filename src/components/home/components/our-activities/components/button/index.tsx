import React from 'react';

interface Activity {
    id: string | number;
    name: string;
}

interface ButtonActivesProps {
    activity: Activity;
    isSelected: boolean;
    handleActivityClick: (id: string | number) => void;
}

const ButtonActives: React.FC<ButtonActivesProps> = ({
    activity,
    isSelected,
    handleActivityClick
}) => {
    return (
        <button
            onClick={() => handleActivityClick(activity.id)}
            className={`
        flex items-center gap-2 
        px-4 py-[6px] 
        rounded-full 
        border-[1.5px] border-[#F2542D80] 
        text-[14px] leading-[20px] font-medium
        ${isSelected
                    ? 'bg-[#F2542D] text-white'
                    : 'bg-white hover:bg-gray-50 text-[#562C2C]'}
    `}
        >
            <span>{activity.name}</span>
        </button>
    );
};

export default ButtonActives;