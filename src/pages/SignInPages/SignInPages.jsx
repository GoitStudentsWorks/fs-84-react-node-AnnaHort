import {
  Image,
  LinkStyled,
  RegisterText,
  RegisterTitle,
} from '../../components/SignUpForm/SignUpRegister.styled';
import RegisterImageMobile from '../../img/register-img-mobile.png';
import RegisterImageTablet from '../../img/register-img-tablet.png';
import RegisterImageDesktop from '../../img/register-img-desktop.png';
import {
  SignInForm,
  InputSignIn,
  ButtonSignIn,
  ForgotElementContainer,
  ForgotPasswordContainer,
  ForgotPasswordLink,
  HaveAnAccountText,
  RegisterTitleContainer,
  SignInBtnContainer,
  SignInPagesContainer,
} from './SignInPages.styled';

const SignInPages = () => {
  return (
    <SignInPagesContainer>
      <Image
        src={RegisterImageMobile}
        srcSet={`${RegisterImageTablet} 834w, ${RegisterImageDesktop} 1440w`}
        sizes="(max-width: 833px) 100vw, (min-width: 834px) 50vw"
        alt="Responsive Image"
      />
      <RegisterTitleContainer>
        <RegisterTitle>Sign in</RegisterTitle>
        <RegisterText>You need to login to use the service</RegisterText>

        <SignInForm autoComplete="off">
          <label htmlFor="email">
          
              <InputSignIn
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
           
          </label>
          <label htmlFor="password">
           
              <InputSignIn
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
           
          </label>

          <ForgotElementContainer>
            <SignInBtnContainer>
              <ButtonSignIn type="submit">Sign In</ButtonSignIn>
              <ForgotPasswordLink to="/forgot-password">
                Forgot your password?
              </ForgotPasswordLink>
            </SignInBtnContainer>

            <ForgotPasswordContainer>
              <HaveAnAccountText>
                If you don&#39;t have an account yet
              </HaveAnAccountText>
              <LinkStyled to="/signup">Sign up</LinkStyled>
            </ForgotPasswordContainer>
          </ForgotElementContainer>
        </SignInForm>
      </RegisterTitleContainer>
    </SignInPagesContainer>
  );
};
export default SignInPages;
