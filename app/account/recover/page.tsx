import PageHeader from "@/components/ui/header";
import ResetPasswordForm from "./components/reset-form";

const PasswordResetPage = () => {
  return (
    <main className="min-h-[500px] mt-10 pb-[30px] small:mt-0 xsmall:mt-0">
      <section className="xl:!p-[0px_85px] p-[0px_55px] med-small:p-0">
        <PageHeader headerTitle="Reset Password" second="Reset Password" />
        <div>
          <ResetPasswordForm />
        </div>
      </section>
    </main>
  );
};

export default PasswordResetPage;
