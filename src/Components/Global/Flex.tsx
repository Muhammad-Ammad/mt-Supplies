interface flexProps {
    children: any,
    className: string,
}
const Flex: React.FC<flexProps> = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

export default Flex;
