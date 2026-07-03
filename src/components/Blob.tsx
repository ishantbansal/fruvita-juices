type Props = {
  color: string;
  className?: string;
};

export default function Blob({ color, className = "" }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path
        fill={color}
        d="M45.3,-58.5C58.6,-49.8,69.2,-35.8,73.6,-19.9C78,-4,76.2,13.9,68.6,28.8C61,43.7,47.6,55.6,32.3,63.1C17,70.5,-0.2,73.5,-16.9,70.2C-33.6,66.9,-49.8,57.3,-59.8,43.4C-69.8,29.5,-73.6,11.3,-71.4,-5.9C-69.2,-23.1,-61,-39.3,-48.4,-48.4C-35.8,-57.5,-17.9,-59.5,-0.5,-58.8C17,-58.1,34,-67.2,45.3,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
