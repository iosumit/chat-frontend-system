import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export function showNotification(type, msg) {
    switch (type) {
        case "success":
            toast.success(
              ({ closeToast }) => (
                <div style={{ position: "relative" }}>
                    <i
                      style={{
                          position: "absolute",
                          width: "40px",
                          height: "100%",
                          top: "-5px",
                      }}
                    >
                        <img
                          style={{ marginRight: "8px" }}
                          src="/assets/svg/toast_success.svg"
                          alt=""
                        />
                    </i>
                    <div className="toast-font">{msg}</div>
                </div>
              ),
              {
                  className: "toast-width-m",
              },
            );
            return;

        case "warning":
            toast.warning(
              ({ closeToast }) => (
                <div style={{ position: "relative" }}>
                    <i
                      style={{
                          position: "absolute",
                          width: "40px",
                          height: "100%",
                          top: "-5px",
                      }}
                    >
                        <img
                          style={{ marginRight: "8px" }}
                          src="/assets/svg/toast_warning.svg"
                          alt=""
                        />
                    </i>
                    <div className="toast-font" style={{ wordBreak: "unset" }}>
                        {msg}
                    </div>
                </div>
              ),
              {
                  className: "toast-width-m",
              },
            );
            return;

        case "error":
            toast.error(
              ({ closeToast }) => (
                <div style={{ position: "relative" }}>
                    <i
                      style={{
                          position: "absolute",
                          width: "40px",
                          height: "100%",
                          top: "-5px",
                      }}
                    >
                        <img
                          style={{ marginRight: "8px" }}
                          src="/assets/svg/warning_error.svg"
                          alt=""
                        />
                    </i>
                    <div className="toast-font">{msg}</div>
                </div>
              ),
              {
                  className: "toast-width-m",
              },
            );
            return;

        case "socket-offline":
        case "offline":
            toast.error(
              () => (
                <div style={{ position: "relative" }}>
                    <i
                      style={{
                          position: "absolute",
                          width: "180px",
                          height: "100%",
                          top: "-5px",
                      }}
                    >
                        <img
                          style={{ marginRight: "8px" }}
                          src="/assets/svg/toast_error.svg"
                          alt=""
                        />
                    </i>
                    <div className="toast-font">{msg}</div>
                </div>
              ),
              {
                  position: "top-center",
                  autoClose: false,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  progress: undefined,
                  className: "toast-width-m",
              },
            );
            return;

        case "online":
            toast.dismiss();
            toast.success(
              () => (
                <div style={{ position: "relative" }}>
                    <i
                      style={{
                          position: "absolute",
                          width: "180px",
                          height: "100%",
                          top: "-5px",
                      }}
                    >
                        <img
                          style={{ marginRight: "8px" }}
                          src="/assets/svg/toast_success.svg"
                          alt=""
                        />
                    </i>
                    <div className="toast-font">{msg}</div>
                </div>
              ),
              {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  progress: undefined,
                  className: "toast-width-m",
              },
            );
    }
}