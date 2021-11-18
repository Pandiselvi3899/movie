export function Msg({ name, pic }) {
    return (
      <div>
        <img src={pic} alt={name} />
        <h1>{name} 5 </h1>
      </div>
    );
  }