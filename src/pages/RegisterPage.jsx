import { useForm } from "react-hook-form"
function RegisterPage() {
    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit((values) =>
            console.log(values)
        )} >
            <h1>Register</h1>
            <label>FullName</label>
            <input name='name' type='name'{...register("fullname)", { required: true })} />
            <label className="block text-sm font-medium leading-6 text-gray-900">Identification Number  </label>
            <input name='idnumber' type='number' {...register("idnumber", { required: true })} />
            <label>Phone Number </label>
            <input name='phonenumber' type='tel' {...register("phonenumber", { required: true })} />
            <label>Email </label>
            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <input name='email' type='email' {...register("email", { required: true })} />
            <label>Adress </label>
            <input name='adreess' type='text' {...register("adress", { required: true })} />
            <label>Password </label>
            <input name='pass' type='password' {...register("password", { required: true })} />
            <button >
                Register
            </button>
        </form >
    )
}

export default RegisterPage
