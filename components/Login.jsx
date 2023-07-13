import Image from "next/legacy/image";
import { signIn } from "next-auth/react";
import { Button } from "@material-tailwind/react";

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Image src='https://links.papareact.com/1ui' height='300' width='550' objectFit='contain' alt='Logo' />
      <Button className='w-fit mt-10' color='blue' variant='filled' ripple onClick={() => signIn()}>
        Login using Google
      </Button>
    </div>
  );
}

export default Login;
