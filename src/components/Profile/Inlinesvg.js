const Inlinesvg = (props)=>{
    return <div dangerouslySetInnerHTML={{ __html: props.svgCode }} aria-hidden="true" alt={props.alt} />;
}
export default Inlinesvg;