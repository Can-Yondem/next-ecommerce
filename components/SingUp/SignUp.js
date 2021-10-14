import { AiOutlineUser } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { findUsername } from "../../redux/user/userSlice";
import useForm from "../../validation/useForm";
import validate from "../../validation/validateInfo";

const SignUp = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    handleSubmit,
    validate
  );

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 bg-white sm:w-[475px] w-[350px] rounded-b-xl mx-auto"
      >
        <div>
          <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color">
            <div className="text-lg text-gray-400">
              <AiOutlineUser />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 pl-3 rounded-2xl outline-none w-72"
              placeholder="Ad"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && (
            <p className="text-xs mt-2 text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <div className="flex items-center  border-b-2 border-gray-300 focus-within:border-primary-color">
            <div className="text-lg text-gray-400">
              <AiOutlineUser />
            </div>
            <input
              type="text"
              id="surname"
              name="surname"
              className="p-2 pl-3 rounded-2xl outline-none w-72"
              placeholder="Soyad"
              value={values.surname}
              onChange={handleChange}
            />
          </div>
          {errors.surname && (
            <p className="text-xs mt-2 text-red-500">{errors.surname}</p>
          )}
        </div>
        <div>
          <div>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color">
              <div className="text-lg text-gray-400">
                <VscKey />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                className="p-2 pl-3 rounded-2xl outline-none w-72"
                placeholder="Kullanıcı Adı"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            {errors.username && (
              <p className="text-xs mt-2 text-red-500">{errors.username}</p>
            )}
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color">
              <div className="text-lg text-gray-400">
                <VscKey />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 pl-3 rounded-2xl outline-none w-72"
                placeholder="Şifre"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <p className="text-xs mt-2 text-red-500">{errors.password}</p>
            )}
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color ">
              <div className="text-lg text-gray-400">
                <VscKey />
              </div>
              <input
                type="password"
                id="confPassword"
                name="confPassword"
                className="p-2 pl-3 rounded-2xl outline-none w-72"
                placeholder="Şifre Tekrar"
                value={values.confPassword}
                onChange={handleChange}
              />
            </div>
            {errors.confPassword && (
              <p className="text-xs mt-2 text-red-500">{errors.confPassword}</p>
            )}
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-primary-color">
              <div className="text-lg text-gray-400">
                <AiOutlineMail />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 pl-3 rounded-2xl outline-none w-72"
                placeholder="Eposta"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <p className="text-xs mt-2 text-red-500">{errors.email}</p>
            )}
          </div>
        </div>
        <button
          className="flex items-center gap-3 mb-5 md:px-10 px-5 text-white font-semibold  bg-primary-color hover:bg-yellow-700 p-2 rounded-md mt-4 transition ease-out duration-300"
          type="submit"
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};

export default SignUp;
