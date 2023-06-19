import fetch from "isomorphic-fetch";
import { showNotification } from "./utility";
import sanitizeHtml from "sanitize-html";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8300"; // old api

export default function callApi(
  endpoint,
  method = "get",
  body,
  isErrorSuppressed = false,
) {
  let headers = {};
  headers["content-type"] = "application/json";
  return fetch(`${API_URL}/${endpoint}`, {
    headers: headers,
    method,
    body: JSON.stringify(body),
  })
    .then((response) => response.json().then((json) => ({ json, response })))
    .then(({ json, response }) => {
      let responseStatus = parseInt(response.status);
      if (responseStatus >= 400) {
        if (responseStatus !== 404 || responseStatus !== 405) {
          if (responseStatus < 500) {
            if (json.message) {
              if (!isErrorSuppressed) {
                showNotification(
                  "error",
                  sanitizeHtml(json.message, {
                    allowedTags: ["b", "i"],
                  }),
                );
              }
            } else if (
              json &&
              json.non_field_errors &&
              json.non_field_errors.length > 0
            ) {
              if (!isErrorSuppressed) {
                showNotification("error", json.non_field_errors[0]);
              }
            } else {
              if (!isErrorSuppressed) {
                showNotification("error", JSON.stringify(json));
              }
            }
          } else {
            if (!isErrorSuppressed) {
              showNotification("error", "Server Error, Please try again!");
            }
          }
        }
      }
      if (!response.ok) {
        let data = { ...json, status_code: response.status };
        return Promise.reject(data);
      }
      return { ...json, status_code: response.status };
    })
    .then(
      (response) => response,
      (error) => error,
    );
}
