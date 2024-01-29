function App() {
  return (
    <div className="relative">
      <main className="min-h-screen w-11/12 mx-auto grid place-content-center gap-60 relative z-10">
        <h1 className="text-white font-bold text-5xl">
          Neox<span className="text-violet-700">Chat</span>
        </h1>
        <div className="flex flex-col items-center gap-6">
          <a 
            href="/sign-in"
            className="font-semibold bg-violet-700 border border-violet-700 text-white w-full text-center py-2 px-4 hover:bg-violet-800"
          >
            Sign In
          </a>
          <a 
            href="/sign-up"
            className="font-semibold border border-violet-700 text-white w-full text-center py-2 px-4 bg-violet-700/35 hover:bg-violet-800/35"
          >
            Sign Up
          </a>
        </div>
      </main>
      <div className="absolute w-full h-screen bg-black/25 top-0 left-0 bg-emojis bg-contain bg-center opacity-15" />
    </div>
  )
}

export default App
