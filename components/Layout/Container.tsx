const Container = (
  {children}: 
  {children: React.ReactNode}
) => {
  return <div className="px-5 md:container md:mx-auto">{children}</div>;
};

export default Container;
