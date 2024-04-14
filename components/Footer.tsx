const Footer: React.FC<{ data: any }> = ({ data }) => {
    const { text } = data;
    return <div className="flex w-full flex-col items-center justify-center text-center pt-10 mt-5 mb-10">{text}</div>;
};

export default Footer;
