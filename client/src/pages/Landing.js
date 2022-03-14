import logo from "../assets/images/logo.png";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobber" className="logo" />
      </nav>
      <div className="container page">
        {/* {info} */}
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            placeat harum eius et aspernatur esse voluptatem ab odio nobis?
            Repudiandae, ab sunt. Eaque dignissimos mollitia consequatur, odit
            neque vitae cumque.
          </p>
          <button className="btn btn-hero">login/register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default landing;
