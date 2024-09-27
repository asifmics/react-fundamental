import Randering from "./Randering";

function Title({ name, age, student, amounts }) {
  const persons = [
    { name: "abc", age: 30 },
    { name: "efg", age: 32 },
    { name: "ijk", age: 33 },
    { name: "mno", age: 34 },
  ];

  return (
    <>
      <h1>
        Hello {name} , his age {age}{" "}
      </h1>

      <p>
        studet name is {student?.name}. his age is {student?.age} and he come
        from {student?.division} division
      </p>

      <Randering numbers={[1, 2, 3, 4, 5]} persons={persons} />
    </>
  );
}

export default Title;
