
// import Google from "../img/google.png";
// import Facebook from "../img/facebook.png";
// import Github from "../img/github.png";

export default function Login() {
  return (
    <div className="login">
    <h1 className="loginTitle">Choose a Login Method</h1>
    <div className="wrapper">
    
      <div className="left">
        <div className="loginButton google" >
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-logos-vector-eps-cdr-svg-download-10.png" alt="" className="icon" />
         Google
        </div>
        <div className="loginButton facebook">
          <img src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png.png?fit=696%2C696&ssl=1" alt="" className="icon" />
          Facebook
        </div>
        <div className="loginButton github">
          <img src='https://www.saashub.com/images/app/service_logos/0/e528bafe4601/large.png?1525414111' alt="" className="icon" />
          Github
        </div>
      </div>
      
      <div className="center">
        <div className="line" />
        <div className="or">OR</div>
      </div>
      
      <div className="right">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button className="submit">Login</button>
      </div>
      
    </div>
  </div>
);
};
  
