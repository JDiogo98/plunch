import Link from "next/link";
import { useRouter } from "next/router";

const Meal = () => {
  const router = useRouter();
  const { meal } = router.query;

  return (
    <>
      <p>Vais comer {meal}. </p>
      <Link href="/" style={{color: "blue"}}> Home</Link>
    </>
  );
};

export default Meal;
