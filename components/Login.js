import Image  from 'next/image';
import { signIn } from 'next-auth/client';

function Login() {
    return (
        <div className="grid place-items-center ">
            <Image src="https://links.papareact.com/t4i"
                height={400}
                alt=""
                width={400}
                objectFit="contain"
            />
            <h1 onClick={signIn} className="p-5 bg-blue-500 font-semibold shadow-xl hover:bg-blue-400 rounded-full text-white text-center cursor-pointer " >Login with Facebook</h1>
        </div>
    )
}

export default Login
