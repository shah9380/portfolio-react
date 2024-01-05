const MyComponent = ({ svgCode }) => {
    return (
      <div>
        {/* Render the SVG using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
      </div>
    );
};
export default MyComponent;