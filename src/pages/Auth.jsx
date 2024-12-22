import Left from "../components/Repo/LeftSide.jsx";
import Right from "../components/Repo/RightSide.jsx";
const Auth = () => {
    return (
        <div className={`flex gap-2 w-full justify-center`}>
            <Left />
            <Right />
        </div>
    );
};

export default Auth;