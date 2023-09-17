const ErrorThrower = () => {
    return <div>{JSON.parse(fetch('non-existing-url'))}</div>
};

export default ErrorThrower;