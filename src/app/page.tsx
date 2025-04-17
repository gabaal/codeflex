import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignInButton,
} from "@clerk/nextjs";
const HomePage = () => {
  return (
    <div>
      HomePage
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};
export default HomePage;
