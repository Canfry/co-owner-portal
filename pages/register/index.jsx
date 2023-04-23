import NestedLayout from '@/components/NestedLayout';

export default function Register() {
  return <div>Register</div>;
}

Register.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};
