import SingUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SingInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
