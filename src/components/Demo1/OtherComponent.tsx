
const OtherComponent = () => {
  console.log('🔴 OtherComponent bị re-render không cần thiết');
  
  return (
    <div className="other-component">
      <h3>Other Component</h3>
      <p>Component này không liên quan đến modal  {Date.now()}</p>
    </div>
  );
};

export default OtherComponent;