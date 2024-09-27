const name = "mics";

function message(text) {
  return "Say " + text;
}

function Hello() {
  return (
    <>
      <h1>
        {" "}
        {message("hello")} ,{name.toUpperCase()} from comments , his age{" "}
        {10 + 20}!
      </h1>
    </>
  );
}

export default Hello;
