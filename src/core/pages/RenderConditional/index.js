const RenderConditional = (props) => {
    const { condition, children } = props;
    
    if (condition) {
        return children;
    }

    return null;
}

export default RenderConditional;