export default function Fact({
  text,
  onChoose,
}: {
  text: string;
  onChoose: () => void;
}) {
  return (
    <li onClick={onChoose} className="text-lg">
      <input type="radio" name="answer" value="1" />
      {text}
    </li>
  );
}
