import { useCallback, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState("");
  const [characterAllowed, setCharacterAllowed] = useState("");
  const [length, setLength] = useState("12");

  // We use Callback function when we have to render the
  const generatePassword = useCallback(() => {
    let generatedPassword = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+";
    let allowedCharacters = characters;
    if (characterAllowed) {
      allowedCharacters += specialCharacters;
    }
    if (numberAllowed) {
      allowedCharacters += numbers;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      generatedPassword += allowedCharacters[randomIndex];
    }

    setPassword(generatedPassword);
  }, [password, numberAllowed, characterAllowed, length]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className="text-white text-center my-3">Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
            />
            <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" id="numberInput" onChange={(prev) => {
                setNumberAllowed(!prev);
              }} />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" onChange={(prev) => setNumberAllowed(!prev)} id="characterInput" />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
