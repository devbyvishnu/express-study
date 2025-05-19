const userLogin = (req, res) => {
    res.send("This is Login Page");
  };

  const userSignin = (req, res) => {
    res.send("This is Signin Page");
  };

  const userVerify = (req, res) => {
    res.send("This is Verify Page");
  };
  const useError = (req, res) => {
    res.send("This is Error Page");
  };
  export { userLogin, userSignin, userVerify, useError };
  