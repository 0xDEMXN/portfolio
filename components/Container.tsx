const Container = (
  {children}: 
  {children: React.ReactNode}
) => {
  return <div className="p-5 md:container md:mx-auto">{children}</div>;
};

export default Container;
