export default function RegisterForm({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) {
  const Classes = {
    inpCla:
      "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
    labCla: "leading-7 text-sm text-gray-600",
    btnCla:
      "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
  };

  return (
    <section className="text-gray-600 body-font relative">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className={Classes.labCla}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={Classes.inpCla}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={Classes.labCla}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={Classes.inpCla}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className={Classes.labCla}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={Classes.inpCla}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="p-2 w-full">
          <button className={Classes.btnCla}>Button</button>
        </div>
      </form>
    </section>
  );
}
