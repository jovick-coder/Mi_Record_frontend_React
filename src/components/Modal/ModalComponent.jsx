import React from "react";

function ModalComponent({ btnText, modalTitle, children, modalId }) {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        className="button"
        data-bs-toggle="modal"
        data-bs-target="#modelId"
      >
        {btnText}
      </button> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade mt-5"
        id={`${modalId}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalTitle}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id={`close${modalId}`}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            {/* 
            // Removed footer
            <div className="modal-footer">
              <button type="button" className="button" data-bs-dismiss="modal">
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalComponent;
