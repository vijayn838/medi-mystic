"use client";

import React, { useState } from "react";
import list from "../public/symptoms.json";
import Loading from "./Loading";

const symptoms = list.list as Array<string>;

function formatSymptom(symptom: string) {
  return symptom
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const Selector = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<string[]>([""]);
  const [suggestions, setSuggestions] = useState<string[][]>([[""]]);
  const [result, setResult] = useState<string>("hidden");
  const [prediction, setPrediction] = useState<string>("");

  const closeModal = () => {
    setResult("hidden");
  }

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.toLowerCase();
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value === "") {
      setSuggestions([[""]]);
    } else {
      const filteredSymptoms = symptoms.filter((symptom) =>
        symptom.toLowerCase().includes(value)
      );

      setSuggestions((prev) => {
        const updatedSuggestions = [...prev];
        updatedSuggestions[index] = filteredSymptoms.slice(0, 9);
        return updatedSuggestions;
      });
    }
  };

  const handleSuggestionClick = (suggestion: string, index: number, suggestionIndex:number) => {
    const newInputs = [...inputs];
    newInputs[index] = suggestion;
    setInputs(newInputs);

    setSuggestions((prev) => {
      const updatedSuggestions = [...prev];
      updatedSuggestions[index] = []; // Clear suggestions for this input
      return updatedSuggestions;
    });
  };

  const handleInputRemove = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);

    setSuggestions((prev) => {
      const updatedSuggestions = [...prev];
      updatedSuggestions.splice(index, 1);
      return updatedSuggestions;
    });
  };

  const addInput = () => {
    setInputs([...inputs, ""]);
    setSuggestions((prev) => [...prev, []]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptoms: inputs }),
    });

    const prediction = await response.json();
    setResult("flex");
    setPrediction(prediction.prediction);
    setLoading(false);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col justify-center items-center h-screen">
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            className="bg-transparent outline-none border-b-2 text-lg md:text-xl my-6"
            type="text"
            placeholder="Enter a symptom..."
            value={input}
            onChange={(e) => handleInputChange(e, index)}
          />
          {suggestions[index].length > 0 && (
            <ul className="absolute bg-white flex flex-col gap-4 pl-6 w-[75vw]">
              {suggestions[index].map((suggestion, suggestionIndex) => (
                <li
                  className="text-xl cursor-pointer"
                  key={suggestion}
                  onClick={() =>
                    handleSuggestionClick(suggestion, index, suggestionIndex)
                  }
                >
                  {formatSymptom(suggestion)}
                </li>
              ))}
            </ul>
          )}
          <button
            className="px-4 py-2 bg-[#f2e94e] rounded-xl"
            onClick={() => handleInputRemove(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex flex-col p-8 gap-4">
        <button
          className="px-4 py-2 bg-[#a3d9ff] rounded-xl text-lg font-semibold"
          onClick={addInput}
        >
          ADD NEW
        </button>
        <button
          className="px-4 py-2 bg-[#96e6b3] rounded-xl text-lg font-semibold"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
      <div
        className={`${result} flex-col justify-center absolute gap-6 p-8 m-2 bg-purple-300 h-[50vh] rounded-xl shadow-xl`}
      >
        <div>
          <h4 className="text-3xl font-bold">
            You are diagonosed with {prediction}
          </h4>
        </div>
        <button
          onClick={closeModal}
          className="bg-blue-500 py-4 px-4 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Selector;
