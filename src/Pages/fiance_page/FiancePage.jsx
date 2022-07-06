import React, { useEffect, useState } from "react";
import "./FiancePage.css";
import {
  FaFileInvoiceDollar,
  FaHistory,
  FaInfo,
  FaPiggyBank,
  FaRegSave,
  FaSave,
  FaUserTag,
} from "react-icons/fa";
import { FinanceReportChat } from "../../components/anyChat/AnyChat";

function FiancePage() {
  const [recordName, setRecordName] = useState("");
  const [recordCategory, setRecordCategory] = useState("");
  const [recordAmount, setRecordAmount] = useState("");
  const [recordTithe, setRecordTithe] = useState("");
  const [recordSavings, setRecordSavings] = useState("");
  const [calculatedRecordAmount, setCalculatedRecordAmount] = useState(null);

  const [error, setError] = useState({ ok: true, message: "" });
  const [defaultFinanceName, setDefaultFinanceName] = useState(false);
  const [calculateTitheCheck, setCalculateTitheCheck] = useState(false);

  const [historyListRecordObject, setHistoryListRecordObject] = useState([
    {
      Category: "Income",
      Name: "New Income",
      Amount: "2000",
      Tithe: "200",
      Savings: "200",
    },
    {
      Category: "Expenses",
      Name: "New Income",
      Amount: "2000",
      Tithe: "200",
      Savings: "200",
    },
    {
      Category: "Budget",
      Name: "New Income",
      Amount: "2000",
      Tithe: "200",
      Savings: "200",
    },
    {
      Category: "Budget",
      Name: "New Income",
      Amount: "2000",
      Tithe: "200",
      Savings: "200",
    },
    {
      Category: "Income",
      Name: "New Income",
      Amount: "2000",
      Tithe: "200",
      Savings: "200",
    },
    {
      Category: "Expenses",
      Name: "New Income",
      Amount: "2000",
      Tithe: "200",
      Savings: "200",
    },
  ]);

  function resetFianceForm() {
    setCalculateTitheCheck(false);
    setDefaultFinanceName(false);
    setRecordAmount("");
    setRecordCategory("");
    setRecordSavings("");
    setRecordName("");
    setRecordTithe("");
    setCalculatedRecordAmount("");
    setError({ ok: true, message: "" });
  }

  function checkIfEmpty(item) {
    if (item === "") return null;
    return item;
  }

  function saveRecord() {
    if (recordName === "")
      return setError({ ok: false, message: "Record Name Not Set" });
    if (recordCategory === "")
      return setError({ ok: false, message: "Record Category Not Set" });
    if (recordAmount === "")
      return setError({ ok: false, message: "Record Amount Not Set" });

    const newRecord = {
      Category: recordCategory,
      Name: recordName,
      Amount: recordAmount,
      Tithe: checkIfEmpty(recordTithe),
      Savings: checkIfEmpty(recordSavings),
      Record: checkIfEmpty(calculatedRecordAmount),
    };
    setHistoryListRecordObject([...historyListRecordObject, newRecord]);
  }
  return (
    <>
      <div className="main-card full-main-card">
        <b>Finance Report Form</b>

        <div className="row w-100">
          <div className="col-md-8 col-12">
            <FianceFormComponent
              recordName={recordName}
              setRecordName={setRecordName}
              recordCategory={recordCategory}
              setRecordCategory={setRecordCategory}
              recordAmount={recordAmount}
              setRecordAmount={setRecordAmount}
              recordTithe={recordTithe}
              setRecordTithe={setRecordTithe}
              recordSavings={recordSavings}
              setRecordSavings={setRecordSavings}
              calculatedRecordAmount={calculatedRecordAmount}
              setCalculatedRecordAmount={setCalculatedRecordAmount}
              resetFianceForm={resetFianceForm}
              error={error}
              setError={setError}
              defaultFinanceName={defaultFinanceName}
              setDefaultFinanceName={setDefaultFinanceName}
              calculateTitheCheck={calculateTitheCheck}
              setCalculateTitheCheck={setCalculateTitheCheck}
            />
          </div>
          <div className="col-md-4 pt-3 col-12">
            <b>
              <i class="fa fa-calculator" aria-hidden="true"></i> Calculated
              Figure
            </b>

            <ul id="list-ul">
              {recordCategory === "" ? null : (
                <li>
                  <b>Category:</b> {recordCategory}
                </li>
              )}
              {recordName === "" ? null : (
                <li>
                  <b>Name:</b> {recordName}
                </li>
              )}
              {recordAmount === "" ? null : (
                <li>
                  <b>Amount:</b> {recordAmount}
                </li>
              )}
              {recordSavings === "" ? null : (
                <li>
                  <b>Save:</b> {recordSavings}
                </li>
              )}
              {recordTithe === "" ? null : (
                <li>
                  <b>Tithe:</b> {recordTithe}
                </li>
              )}
              {calculatedRecordAmount === "" ||
              calculatedRecordAmount === "null" ? null : (
                <li>
                  <b>Record Amount:</b> {calculatedRecordAmount}
                </li>
              )}
            </ul>
            <p className="note-message">
              {recordCategory === "Income" || recordCategory === "" ? (
                <>
                  {recordCategory === "Income" && recordSavings === "" ? (
                    <p>
                      <FaInfo /> Savings is not calculated because no figure was
                      given
                    </p>
                  ) : null}
                  {recordCategory === "Income" && recordTithe === "" ? (
                    <p>
                      <FaInfo /> Tithe is not calculated because the tithe
                      checkbox is not checked.
                    </p>
                  ) : null}
                </>
              ) : (
                <>
                  <FaInfo /> Tithe and savings are disabled in {recordCategory}
                </>
              )}
            </p>
            {recordCategory !== "" &&
            recordName !== "" &&
            recordAmount !== "" ? (
              <button
                id="submit-finance"
                className="finance-submit-button"
                onClick={() => saveRecord()}
              >
                <FaRegSave />
                Save Record
              </button>
            ) : (
              <>
                {" "}
                <FaInfo />
                FIll form To Submit
              </>
            )}
          </div>
        </div>
      </div>

      <div class="main-card full-main-card">
        <div className="my-2 d-flex justify-content-between">
          <b>
            <FaHistory /> Finance History
          </b>
          <span className="badge-count">{historyListRecordObject.length}</span>
        </div>
        <div class="history-list">
          {historyListRecordObject.map((record, index) => (
            <div className="d-flex">
              <div className={`count ${record.Category}`}> {index + 1}</div>
              <FinanceHistoryListRecord record={record} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* <!-- chat --> */}
      <div class="row chat-row">
        <div class="col-12">
          <div class="" style={{ height: "300px" }}>
            <FinanceReportChat
              type="pie3d"
              data={[
                ["budget", 5000],
                ["Income", 10000],
                ["Expenses", 4000],
              ]}
              title="Finance Report"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FiancePage;

export function FianceFormComponent({
  recordName,
  setRecordName,
  recordCategory,
  setRecordCategory,
  recordAmount,
  setRecordAmount,
  recordTithe,
  setRecordTithe,
  recordSavings,
  setRecordSavings,
  calculatedRecordAmount,
  setCalculatedRecordAmount,
  resetFianceForm,
  error,
  setError,
  defaultFinanceName,
  setDefaultFinanceName,
  calculateTitheCheck,
  setCalculateTitheCheck,
}) {
  // remove error message in 3s
  useEffect(() => {
    if (error) {
      const interval = setInterval(() => {
        setError({ ok: true, message: "" });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  const recordNameFunction = (e) => {
    if (defaultFinanceName) {
      setRecordName(`New ${recordCategory}`);
      return;
    }

    setRecordName(e.currentTarget.value);
  };

  // change the record name if the category changes
  useEffect(() => {
    if (defaultFinanceName === true) {
      setRecordName(`New ${recordCategory}`);
    }
    // if category is not income turn off tithe
    if (recordCategory !== "Income") {
      setCalculateTitheCheck(false);
      // setRecordSavings("");
      calculateSavingsFunction();
      calculateTitheFunction();
    }
  }, [recordCategory]);

  // Auto calculate recode amount figure on change
  useEffect(() => {
    setCalculatedRecordAmount(recordAmount);
    if (calculateTitheCheck === true) {
      setRecordTithe(recordAmount * 0.1);
    }
  }, [recordAmount]);
  // auto calculate record savings when saving change
  useEffect(() => {
    // set record to record amount when record savings is empty and tithe check box ix checked
    if (recordSavings === "" && calculateTitheCheck === false) {
      setCalculatedRecordAmount(recordAmount);
      return;
    }
    // calculate tithe when record savings not empty and calculate tithe check box is checked
    if (recordSavings === "" && calculateTitheCheck === true) {
      calculateTitheFunction();
      return;
    }
    // calculate savings when record savings is not empty and calculate tithe check box is not checked
    if (recordSavings !== "" && calculateTitheCheck === false) {
      calculateSavingsFunction();
      return;
    }
    // calculate savings when category is income else set calculated amount to record amount
    if (recordCategory === "Income") {
      calculateSavingsFunction();
    } else {
      setCalculatedRecordAmount(recordAmount);
    }
  }, [recordSavings, recordCategory]);
  // calculate savings when savings amount change and when record amount change
  useEffect(() => {
    calculateSavingsFunction();
  }, [recordAmount, recordSavings]);

  // Auto calculate tithe figures on change
  useEffect(() => {
    if (calculateTitheCheck) {
      calculateTitheFunction();
    } else {
      setCalculatedRecordAmount(calculatedRecordAmount + recordTithe);
      setRecordTithe("");
    }
  }, [recordTithe, calculateTitheCheck]);

  // calculate tithe function
  function calculateTitheFunction() {
    if (recordCategory !== "Income") return;
    setRecordTithe(recordAmount * 0.1);
    let result = calculatedRecordAmount - recordTithe;
    setCalculatedRecordAmount(result);
  }
  // calculate savings function
  function calculateSavingsFunction() {
    // if category is not income empty savings recode
    if (recordCategory !== "Income") {
      setRecordSavings("");
      return;
    }
    if (recordSavings === "") return;

    setCalculatedRecordAmount(recordAmount - recordSavings);
  }

  function defaultFinanceNameFunction(e) {
    // if category is not set return error
    if (recordCategory === "")
      return setError({ ok: false, message: "Category Not Set" });
    // if category is true toggle default finance name hooks
    setDefaultFinanceName(!defaultFinanceName);
    // if defaultName is false empty the record name else give it a default name
    if (defaultFinanceName) {
      setRecordName("");
    } else {
      setRecordName(`New ${recordCategory}`);
    }
  }

  function RecordSavingsFunction(e) {
    if (recordAmount === "")
      return setError({ ok: false, message: "Amount is not set" });
    setRecordSavings(e.currentTarget.value);
  }
  function toggleCalculateTitheCheck() {
    if (recordAmount === "")
      return setError({ ok: false, message: "Amount is not set" });
    setCalculateTitheCheck(!calculateTitheCheck);
  }

  return (
    <div className="form-div dashboard-form finance-form">
      <div id="finance-message">
        {!error.ok ? (
          <div class="alert alert-danger"> {error.message}</div>
        ) : null}
      </div>
      <form action="">
        <div className="input-div category-div">
          <label>
            <input
              type="radio"
              name="Category"
              onClick={() => setRecordCategory("Income")}
            />
            Income
          </label>
          <label>
            <input
              type="radio"
              name="Category"
              onClick={() => setRecordCategory("Expenses")}
            />
            Expenses
          </label>
          <label>
            <input
              type="radio"
              name="Category"
              onClick={() => setRecordCategory("Budget")}
            />
            Budget
          </label>
        </div>
        <div className="input-div">
          <label htmlFor="finance-name">
            <FaUserTag />
          </label>
          <input
            type="text"
            id="finance-name"
            value={recordName}
            placeholder="Record Name"
            onChange={(e) => {
              recordNameFunction(e);
            }}
            // disable when the default name checkbox is checked
            disabled={defaultFinanceName}
          />
        </div>

        <div className="my-3">
          {" "}
          <label className="done-check">
            <input
              type="checkbox"
              className="checkbox"
              checked={defaultFinanceName}
              onClick={(e) => defaultFinanceNameFunction(e)}
            />
            <span className="checkmark"></span>
            Default : {recordCategory !== "" ? `New ${recordCategory}` : "None"}
          </label>
        </div>

        <div className="input-div">
          <label htmlFor="finance-amount">
            <FaFileInvoiceDollar />
          </label>
          <input
            type="number"
            id="finance-amount"
            placeholder="Amount"
            value={recordAmount}
            onChange={(e) => setRecordAmount(e.currentTarget.value)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="save">
            <i>
              <FaPiggyBank />
            </i>
          </label>
          <input
            type="number"
            id="save"
            placeholder="Savings"
            value={recordSavings}
            // disable if category is not income
            disabled={
              recordCategory !== "Income" || recordCategory === ""
                ? true
                : false
            }
            onChange={(e) => RecordSavingsFunction(e)}
          />
        </div>
        <div className="my-3">
          <label className="done-check">
            <input
              type="checkbox"
              className="checkbox"
              // auto check if category is income
              checked={calculateTitheCheck && recordCategory === "Income"}
              onClick={() => toggleCalculateTitheCheck()}
            />
            <span
              className={
                recordCategory !== "Income" || recordAmount === ""
                  ? "checkmark disable"
                  : "checkmark"
              }
            ></span>
            Calculate Tithe
          </label>
        </div>
        <div>
          <button
            id="finance-calculator"
            className="form-btn"
            onClick={() => resetFianceForm()}
            type="reset"
          >
            <i className="fas fa-calculator"></i>
            Reset Form
          </button>
          <sup>Click to Reset Finance Form</sup>
        </div>
      </form>
    </div>
  );
}

export function FinanceHistoryListRecord({ record, index }) {
  const [showFull, setShowFull] = useState(false);
  const { Category, Name, Amount, Tithe, Savings, Record } = record;

  return (
    <div
      class="record"
      key={index}
      style={
        showFull !== true
          ? { height: "50px", overflow: "hidden" }
          : { height: "auto", overFlow: "none" }
      }
      onClick={() => {
        setShowFull(!showFull);
      }}
    >
      <b>Category: </b> {Category}
      <br />
      <b> Name: </b> {Name}
      <br />
      <b> Amount: </b> {Amount}
      <br />
      <b> Tithe : </b> {Tithe}
      <br />
      <b> Savings : </b> {Savings}
      <br />
      <b> Record : </b> {Record}
      <br />
    </div>
    // </div>
  );
}
