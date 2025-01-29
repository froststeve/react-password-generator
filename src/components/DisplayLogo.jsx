//Create the Welcome Component
function DisplayLogo(width) {
  return (
    <div>
      <img
        id="logo"
        width={width.width}
        // src="/src/assets/images/favicon.ico"
        src="/src/assets/images/logo.png"
        alt="logo"
      />
    </div>
  );
}
export default DisplayLogo;
