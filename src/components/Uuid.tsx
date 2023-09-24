import { useState } from "react";
// import { uuid } from "uuid";
import { validate as uuidValidate } from "uuid";
import { version as uuidVersion } from "uuid";

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

  return (
    <div className="container my-4">
      <div className="row">
        <div>
          <h4>UUID Tools</h4>
          <input
            onChange={onChangeHandler}
            placeholder="Enter UUID string"
            className="form-control"
          ></input>
          <p className="mt-4">
            <b>Valid:</b>
            {valid ? (
              <span className="text-success"> {valid.toString()} </span>
            ) : (
              <span className="text-danger"> {valid.toString()} </span>
            )}
            <br />
            {valid && (
              <>
                <b>UUID version:</b> {version} <br />
              </>
            )}
            <b>UUID:</b> {uuid} <br />
            <b>Hyphen Removed UpperCase:</b> {hyphenRemoved} <br />
            <b>LowerCase:</b> {lowercase} <br />
            <b>UpperCase:</b> {uppercaseUuid} <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
