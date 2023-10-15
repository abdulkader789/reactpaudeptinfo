import { Link } from "react-router-dom";


export const Register = () => {

    // const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

    };

    return (
        <Form
            label={"register"} redirectTo={"login"} handleSubmit={handleSubmit}>

        </Form>
    );
};

export const Login = () => {

    // const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

    };

    return (
        <Form
            label={"login"} redirectTo={"register"} handleSubmit={handleSubmit}>

        </Form>
    );
};

const Form = ({ label, username, setUsername, password, setPassword, redirectTo, handleSubmit }) => {


    return (
        <div className="auth-container md:px-20 pt-5">
            <div className="p-10 bg-white shadow-md border-1">
                <h1 className="mb-8 font-extrabold text-4xl capitalize">{label}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block font-semibold" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"

                                type="text"
                                id="username"
                                // value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />

                        </div>


                        <div className="mt-4">
                            <label className="block font-semibold" htmlFor="password">
                                Password
                            </label>
                            <input
                                className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                                type="password"
                                id="password"
                                // value={password}
                                onChange={(event) => setPassword(event.target.value)}

                            />
                        </div>

                        <div className="flex items-center justify-between mt-8">
                            <button
                                type="submit"
                                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            >
                                {label}
                            </button>
                            <a className="font-semibold capitalize">Need to {redirectTo}?</a>
                            <button className="font-semibold capitalize">
                                <Link to={"/auth" + "/" + redirectTo}>{redirectTo}</Link>

                            </button>
                        </div>
                    </form>

                    <aside>
                        <div className="bg-gray-100 p-8 rounded">
                            <h2 className="font-bold text-2xl">Instructions</h2>
                            <ul className="list-disc mt-4 list-inside">
                                <li>All users must provide a valid email address and password to create an account.</li>
                                <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
                                <li>Users must not create multiple accounts for the same person.</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div >
        </div >
    )
}