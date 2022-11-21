export function addNotification(parameters, time = 7, position = "tr") {
  const options = parameters;
  const notification = parameters.notifisystem.current;
  notification &&
    notification.addNotification({
      message: (
        <>
          <div>
            <i className={options.icon}></i>
            <span className="graytext">{options.msg}</span>
            {options && options.button}
          </div>
          <i className="fal fa-times"></i>
        </>
      ),
      level: "warning",
      position: position,
      autoDismiss: time,
    });
}
