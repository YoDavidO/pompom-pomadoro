import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  clockwise?: boolean;
  current: number;
  dangerColor?: string;
  dangerThreshold?: number;
  onComplete?: Function;
  onDanger?: Function;
  onWarning?: Function;
  size?: number;
  total: number;
  toZero: boolean;
  warningColor?: string;
  warningThreshold?: number;
}

export function CircleProgress ({
  className,
  color,
  clockwise,
  current,
  dangerColor = "pomRed",
  dangerThreshold,
  onComplete,
  onDanger,
  onWarning,
  size = 100,
  total,
  toZero = false,
  warningColor = "pomYellow",
  warningThreshold
}: Props) {
  const center = size / 2;
  const radius = size / 2 - 20 / 2;
  const circumference = 2 * Math.PI * radius;

  const [currentColor, setCurrentColor] = useState(color);
  const [offset, setOffset] = useState(circumference - ((current / total) * circumference));

  useEffect(() => {
    const currentOffset = circumference - ((current / total) * circumference);
    const isComplete = (toZero && current === 0) || (!toZero && current === total);

    setOffset(currentOffset);
    setCurrentColor(color);

    if (!!warningThreshold) {
      if ((total > current && current >= warningThreshold) || (total < current && current <= warningThreshold)) {
        setCurrentColor(warningColor);
        !!onWarning && onWarning();
      }
    }

    if (!!dangerThreshold) {
      if((total > current && current >= dangerThreshold) || (total < current && current <= dangerThreshold)) {
        setCurrentColor(dangerColor);
        !!onDanger && onDanger();
      }
    }

    if (isComplete && !!onComplete) onComplete(); 
  }, [
    circumference, 
    color, 
    current, 
    offset, 
    dangerColor, 
    dangerThreshold, 
    onComplete,
    onDanger,
    onWarning,
    setOffset, 
    setCurrentColor, 
    total, 
    toZero,
    warningColor, 
    warningThreshold
  ]);

  return (
    <div className={clsx("circle-progress", className)} style={{ width: size, height: size }}>
      <svg className={
        clsx("circles", "text-" + currentColor)} 
        width={size} 
        height={size} 
        style={{
          width: size, 
          height: size
        }}>
        <circle	
          cx={center} 
          cy={center}
          r={radius} 
          fill="transparent" 
          stroke="currentColor" 
          strokeWidth={20} 
          className="text-pomGrayDark" />
        <path 
          className="circle" 
          d={`
            M ${center} ${center}
            m ${-1 * radius}, 0
            a ${radius},${radius} 0 1,0 ${radius * 2},0
            a ${radius},${radius} 0 1,0 -${radius * 2},0
          `}
          fill="transparent" 
          stroke="currentColor"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={clockwise ? offset : -1 * offset}
          strokeWidth="20"
          transform={`rotate(90, ${center}, ${center})`} />
      </svg>
    </div>
  )
}