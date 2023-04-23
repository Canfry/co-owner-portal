import NestedLayout from '@/components/NestedLayout';

export default function SignIn() {
  return <div>SignIn</div>;
}

SignIn.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};
