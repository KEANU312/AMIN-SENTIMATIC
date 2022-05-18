import "./paragraph.syles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Paragraph = () => {
  const [paragraph, setParagraph] = useState("");
  const [resultsJson, setResultsJson] = useState({});
  const [loadingFetch, setLoadingFetch] = useState(false);

  const onChangeHandler = (event) => {
    // const sentParagraph = event.target.value.toLowerCase();
    const sentParagraph = event.target.value;
    setParagraph(sentParagraph);
  };

  const API_URL = "http://localhost:8080";

  const postParagraph = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/sendparagraph`, {
      method: "POST",
      body: paragraph,
    });
  };

  const getNLTKResutls = async () => {
    // const responsees
    setLoadingFetch(true);
    await fetch(
      `https://nlp-sentiment-python.herokuapp.com/?sentence_q=${paragraph}&API_KEY=fthqwusernotme`
    )
      .then((response) => response.json())
      .then((response) => {
        setLoadingFetch(false);
        setResultsJson(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="para-container">
        <div className="para-text-container">
          <button className="nlp-button para-buttons">NLTK</button>
          <button className="nlp-text-vader para-buttons">Vader</button>
          <button className="nlp-text-blob para-buttons">Text Blob</button>
        </div>
        <div className="para-form-container">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="para-text-area"
            onChange={onChangeHandler}
            value={paragraph}
            placeholder=" Enter text to calculate sentiment 🙂☹️ "
            disabled={loadingFetch ? true : false}
          ></textarea>

          <button className="para-calculate" onClick={getNLTKResutls}>
            CALCULATE
            <FontAwesomeIcon
              icon={loadingFetch ? faSpinner : faCalculator}
              className={loadingFetch ? "loader cal-para" : "cal-para"}
            />
            {/* <FontAwesomeIcon icon={faCalculator} className="cal-para" /> */}
          </button>
        </div>
        <div className="results-container">
          <div className="results ">RESULTS</div>
          <div className="sen-containers">
            <div className="nlp-container sent-border">
              <div>
                <button className="resutls-title sen-button nltk-button">
                  NLTK
                </button>
                <br />
                <div className="p-sents">
                  {`Positive: ${
                    typeof resultsJson.pos !== "undefined"
                      ? resultsJson.pos + "%"
                      : " "
                  }`}
                  <br />
                  {`Neautral: ${
                    typeof resultsJson.pos !== "undefined"
                      ? resultsJson.neu + "%"
                      : " "
                  }`}{" "}
                  <br />
                  {`Negative: ${
                    typeof resultsJson.pos !== "undefined"
                      ? resultsJson.neg + "%"
                      : " "
                  }`}
                </div>
              </div>
            </div>
            {/* <div className="vader-container sent-border">
              <div>
                <button className="resutls-title sen-button">Vader</button>
                <br />
                {`Positive: `} <br />
                {`Neautral: `} <br />
                {`Negative: `}
              </div>
            </div> */}
            <div className="Text-Blob sent-border">
              <div>
                <button className="resutls-title sen-button">Text Blob</button>
                <br />
                <div className="tblob-p">
                  {`Polarity: ${
                    typeof resultsJson["text-blob"] !== "undefined"
                      ? resultsJson["text-blob"]
                      : " "
                  }`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="para-link-button">
          <Link to="/howTo" className="para-link-text">
            Learn How to build Websites like this
          </Link>
        </button>
      </div>
    </div>
  );
};
