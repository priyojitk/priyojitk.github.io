"use client";
import { useState } from "react";
import { validate as uuidValidate } from "uuid";
import { version as uuidVersion } from "uuid";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [valid, setValid] = useState(false);
  const [version, setVersion] = useState(Number);
  const [uuid, setUuid] = useState("");
  const [hyphenRemoved, setHyphenRemoved] = useState("");
  const [lowercase, setLowercase] = useState("");
  const [uppercaseUuid, setUppercaseUuid] = useState("");
  // const [lowercase, setLowercase] = useState("");

  const onChangeHandler = (e: { target: { value: string } }) => {
    const input = e.target.value;

    setValid(uuidValidate(input));
    uuidValidate(input) && setVersion(uuidVersion(input));
    setUuid(addHyphenIfNotPresent(input));
    setHyphenRemoved(removeHyphen(input));
    setLowercase(toLowerCase(input));
    setUppercaseUuid(toUpperCase(input));
  };

  const addHyphenIfNotPresent = (input: string) => {
    return input;
  };
  const removeHyphen = (input: string) => {
    return input.replaceAll("-", "").toUpperCase();
  };

  const toLowerCase = (input: string) => {
    return input.toLowerCase();
  };

  const toUpperCase = (input: string) => {
    return input.toUpperCase();
  };

  const generateUuid = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
    setValid(true);
    setVersion(4);
    setHyphenRemoved(newUuid.replace(/-/g, "").toUpperCase());
    setLowercase(newUuid.toLowerCase());
    setUppercaseUuid(newUuid.toUpperCase());
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h4 className="text-lg font-semibold text-gray-800">UUID Tools</h4>
      <input
        value={uuid}
        onChange={onChangeHandler}
        placeholder="Enter or generate a UUID"
        className="mt-2 w-full border rounded-md p-2 focus:ring focus:ring-blue-300"
      />
      <button
        onClick={generateUuid}
        className="mt-3 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        Generate UUID
      </button>
      <div className="mt-4 text-gray-700">
        <p>
          <b>Valid:</b>{" "}
          {valid ? (
            <span className="text-green-600">{valid.toString()}</span>
          ) : (
            <span className="text-red-600">{valid.toString()}</span>
          )}
        </p>
        {valid && (
          <>
            <p>
              <b>UUID Version:</b> {version}
            </p>
            <p>
              <b>UpperCase w/o hyphen:</b> {hyphenRemoved}
            </p>

            <p>
              <b>UpperCase:</b> {uppercaseUuid}
            </p>
            <p>
              <b>LowerCase:</b> {lowercase}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
