//Create the Welcome Component

const DisplayFooter = () => {
  let copyrightYear = new Date().getFullYear();
  return (
    <div id="footer" className="footer">
      <br />
      <div id="copyright">
        &copy;{copyrightYear}{" "}
        <a href="https://www.linkedin.com/in/stevefrostuk/">Steve Frost</a>
      </div>
    </div>
  );
};
export default DisplayFooter;
