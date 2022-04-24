const withLoading = (Component) => {
  return (props) => {
    return <Component {...props}></Component>;
  };
};
