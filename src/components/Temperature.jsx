
const Temperature = ({temperature}) => {
    const degree=temperature-273.15;
    return ((degree).toFixed(1));
}
export default Temperature