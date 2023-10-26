export default function TopicSelection({
  onChoose,
}: {
  onChoose: (state: string) => void;
}) {
  return (
    <div>
      <h1 className="font-bold mb-3 text-2xl">Please choose a topic.</h1>
      <ul className="flex flex-col justify-center items-center">
        <li className="mb-3 text-2xl">
          <button
            onClick={() => {
              onChoose("history");
            }}
          >
            History
          </button>
        </li>
        <li className="mb-3 text-2xl">
          <button>Anime</button>
        </li>
      </ul>
    </div>
  );
}
