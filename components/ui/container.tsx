interface IContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
    return <div className="container mx-auto w-full max-w-7xl px-4">{children}</div>;
};

export default Container;
