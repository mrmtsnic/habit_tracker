import { forwardRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
// カスタム入力コンポーネント
const CustomInput = forwardRef(({ value, onClick, error }, ref) => (
  <div
    className={`custom-input-container ${error.date ? "input-error" : ""}`}
    onClick={onClick}
    ref={ref}
  >
    <FaCalendarAlt className="calendar-icon" /> {/* カレンダーアイコン */}
    <span>{value || "日付を選択"}</span>
  </div>
));

export default CustomInput;
