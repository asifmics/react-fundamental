function Randering({ numbers, persons }) {
  return (
    <>
      <p> array randering:</p>

      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>

      <p> Object randering list:</p>

      <ul>
        {persons.map((person) => (
          <li>
            {person.name} and his age is {person.age}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Randering;
