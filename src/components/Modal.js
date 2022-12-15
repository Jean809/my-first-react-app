function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.cancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.confirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
