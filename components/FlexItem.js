function FlexItem({ name, className }) {
	return <div className={`flex-initial py-2 px-4 m-2 text-center text-gray-light border-4 ${className}`}>{name}</div>;
}

export default FlexItem;
