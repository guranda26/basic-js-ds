export const sendSubscribe = async (emailInput) => {
  try {
    const response = await sendHttpRequest(
      "POST",
      "http://localhost:3000/subscribe",
      {
        email: emailInput,
      }
    );

    if (response.message) {
      console.log(response.message);
      return { success: true, message: response.message };
    } else {
      return { success: false, message: "Invalid response from server" };
    }
  } catch (error) {
    console.error("Error subscribing:", error);
    return { success: false, message: error.message };
  }
};

export const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data
      ? {
          "Content-Type": "application/json",
        }
      : {},
  }).then((response) => {
    if (response.status >= 400) {
      return response.json().then((errResData) => {
        const error = new Error("Something went wrong!");
        error.data = errResData;
        throw error;
      });
    }
    return response.json();
  });
};
