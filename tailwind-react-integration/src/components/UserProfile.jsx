function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 max-w-xs mx-auto my-20 rounded-lg shadow-lg md:p-8 md:max-w-sm hover:shadow-xl">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 mx-auto mb-4 md:w-36 md:h-36 transition-transform duration-300 ease-in-out hover:scale-110" 
      />
      <h1 className="text-lg text-blue-800 my-4 text-center font-bold md:text-xl transition-colors duration-300 hover:text-blue-500 cursor-pointer">
        John Doe
      </h1>
      <p className="text-sm text-gray-600 text-center md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;