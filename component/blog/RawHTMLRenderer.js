const RawHTMLRenderer = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
  
  export default RawHTMLRenderer;