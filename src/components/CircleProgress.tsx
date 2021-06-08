import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  color?: string;
  counterClockwise?: boolean;
  current: number;
  dangerColor?: string;
  dangerThreshold?: number;
  size?: number;
  total: number;
  warningColor?: string;
  warningThreshold?: number;
}

export function CircleProgress ({
  className,
  color,
  counterClockwise,
  current,
  dangerColor = "pomRed",
  dangerThreshold,
  size = 100,
  total,
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
    setOffset(currentOffset);
    setCurrentColor(color);

    if (!!dangerThreshold) {
      if(current <= dangerThreshold) setCurrentColor(dangerColor);
    }

  }, [circumference, color, current, offset, dangerColor, dangerThreshold, setOffset, setCurrentColor, total])

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
          strokeDashoffset={counterClockwise ? offset : -1 * offset}
          strokeWidth="20"
          transform={`rotate(90, ${center}, ${center})`} />
      </svg>
    </div>
  )
}