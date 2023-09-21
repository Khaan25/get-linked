type DateTimeDisplayProps = {
  value: number
  type: 'Hours' | 'Minutes' | 'Seconds'
}

export default function DateTimeDisplay({ value, type }: DateTimeDisplayProps) {
  return (
    <div className="">
      <span className="font-unica-one text-6xl">{value}</span>
      <span>{type.slice(0, 1)}</span>
    </div>
  )
}
