import React from "react";
import ModalComponent from "../Modal/ModalComponent";

export function ReminderFormComponent() {
  return (
    <div>
      <ModalComponent modalTitle={"Reminder Form"} modalId={"ReminderForm"}>
        ModalComponent
      </ModalComponent>
      <button
        type="button"
        className="fancy-btn"
        data-bs-toggle="modal"
        data-bs-target="#ReminderForm"
      >
        Add Reminder
      </button>
    </div>
  );
}
