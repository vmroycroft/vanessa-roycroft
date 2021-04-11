function FlexItem({ name, className }) {
	return <div className={`flex-initial font-mono text-sm text-center bg-pink-500 py-2 px-4 m-2 ${className}`}>{name}</div>;
}

export default FlexItem;
