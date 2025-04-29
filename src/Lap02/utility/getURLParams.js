export default url  => {
    const paramString = url.includes("?") ? url.split("?")[1].split("&") : [];
    const params = {};
    paramString.forEach(param => {
        const paramSpit = param.split("=");
        params[paramSpit[0]] = paramSpit[1];
    });
    return params; 
};