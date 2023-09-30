export const unsubscribeUser = () => {
  fetch("http://localhost:3000/unsubscribe", { method: "POST" }).then(
    (response) => {
      console.log(response.status);
    }
  );
};
