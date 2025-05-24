'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

interface CountdownProps {
    targetTime: number;
    isHiddenBtn?: boolean;
}

const Auction: React.FC<CountdownProps> = ({ targetTime, isHiddenBtn = false }) => {
    const calculateTimeLeft = () => {
        const difference = targetTime - Date.now();
        if (difference > 0) {
            return {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 60),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const isExpired = timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetTime]);
    return (
        <div
            className="NFT-info__wrap-auction-timer-and-button p-[30px] md:w-[295px] flex flex-col gap-7 rounded-[20px]"
            style={{background: `rgba(59, 59, 59, 0.5)`}}
            >
            <div className="NFT-info__wrap-auction-timer flex flex-col gap-2.5">
                <p className="NFT-info__auction-timer-title text-[12px] font-normal leading-[110%] font-space-mono">
                    Auction ends in:
                </p>
                <div className="NFT-info__timer flex flex-col gap-[5px]">
                    <div className="NFT-info__timer-top flex justify-between items-center font-space-mono">
                        <h3 className="text-[38px] font-bold leading-[120%] capitalize">{String(timeLeft.hours).padStart(2, "0")}</h3>
                        <h4 className="text-[28px] font-bold leading-[140%] capitalize">:</h4>
                        <h3 className="text-[38px] font-bold leading-[120%] capitalize">{String(timeLeft.minutes).padStart(2, "0")}</h3>
                        <h4 className="text-[28px] font-bold leading-[140%] capitalize">:</h4>
                        <h3 className="text-[38px] font-bold leading-[120%] capitalize">{String(timeLeft.seconds).padStart(2, "0")}</h3>
                    </div>
                    <div className="NFT-info__timer-bottom flex justify-between items-center">
                        <span>Hours</span>
                        <span>Minutes</span>
                        <span>Seconds</span>
                    </div>
                </div>
            </div>
            {!isHiddenBtn && <Link href='/bid' className={`button trans text-[16px] font-semibold leading-[140%]`} style={{
                cursor: isExpired ? "not-allowed" : "pointer",
                pointerEvents: isExpired ? "none" : "auto",
                background: isExpired ? '#6B7280' : '#A259FF' 
            }}>Place Bid</Link>}
        </div>
    )
};

export default Auction;
