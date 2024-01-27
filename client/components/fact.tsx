export default function Fact({
  index,
  text,
  onChoose,
  isDisabled,
}: {
  index: number;
  text: string;
  onChoose: () => void;
  isDisabled: boolean;
}) {
  return (
    <li
      onClick={onChoose}
      className={`checkbox-wrapper-15 text-lg ${
        isDisabled ? "cursor-default" : ""
      } `}
    >
      <input
        className="inp-cbx"
        id={`cbx-${index}`}
        type="radio"
        name="answer"
        disabled={isDisabled}
        style={{ display: "none" }}
      />
      <label className="cbx" htmlFor={`cbx-${index}`}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
        <span>{text}</span>
      </label>
    </li>
  );
}
