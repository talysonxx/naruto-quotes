export const Quotes = ({ quote, speaker, onUpdate = () => {} }) => {
  return (
    <>
      <p>"{quote}"</p>
      <p>- {speaker}</p>
      <button>Quote No Jutsu</button>
    </>
  );
}
