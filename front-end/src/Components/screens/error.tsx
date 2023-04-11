export const Error = (reason: any) => {
  if (reason === "page") {
    return (
      <>
        <h1>Sorry that page does not exist!</h1>
      </>
    );
  } else {
    return <></>;
  }
};
