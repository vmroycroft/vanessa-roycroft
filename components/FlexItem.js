function FlexItem({ name, className }) {
	return <div className={`flex-initial font-mono text-sm xl:text-lg text-center bg-gray-900 py-2 px-4 m-2 ${className}`}>{name}</div>;
}

export default FlexItem;
