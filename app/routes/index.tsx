import { Tailwind } from "@react-email/tailwind";
// import { Html } from "@react-email/html"
import { Container } from "@react-email/container";
import { Button } from "@react-email/button";

const theme = {
  extend: {
    spacing: {
      full: "100%",
    },
  },
};
export default function ResetPassword() {
  return (
    <Tailwind config={{ theme }}>
      <Container>
        <h1 className="font-heading text-2xl text-black">Reset Password</h1>
        <p className="font-body text-black">
          Click below to reset your password
        </p>
        <Button
          href={"/reset-password"}
          className="font-body rounded-xs bg-orange-500 px-3 py-3 text-black"
        >
          Reset password
        </Button>
      </Container>
    </Tailwind>
  );
}
