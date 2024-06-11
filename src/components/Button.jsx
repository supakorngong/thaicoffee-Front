const bgMap = {
  blue: "bg-blue-500 hover:bg-blue-600",
  red: "bg-red-500 hover:bg-red-600",
  green: "bg-green-500 hover:bg-green-600",
  gray: "bg-gray-200 hover:bg-gray-600",
};
const colorMap = {
  white: "text-white",
  black: "text-black",
};
const widthMap = {
  full: "w-full",
  20: "w-40",
};
export default function Button(props) {
  const { children, bg = "blue", color = "white", width, onClick, display } = props;
  return (
    <button className={`${display} px-3 py-1.5 mt-5 rounded ${bgMap[bg]} ${colorMap[color]} ${widthMap[width]}`} onClick={onClick}>
      {children}
    </button>
  );
}
