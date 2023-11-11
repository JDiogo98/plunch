import Link from "next/link";
import { useRouter } from "next/router";

const Meal = () => {
  const router = useRouter();
  const { meal } = router.query;

  return (
    <>
      <p>Vais comer {meal}. </p>
      <Link href="/"> Home</Link>
    </>
  );
};

export default Meal;
