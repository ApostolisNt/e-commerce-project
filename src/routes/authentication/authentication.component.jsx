import SingUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SingInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="flex justify-between my-6 mx-auto w-5/6">
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
