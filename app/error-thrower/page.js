const ErrorThrower = () => {
    return <div>{JSON.parse('{im not json!')}</div>
};

export default ErrorThrower;