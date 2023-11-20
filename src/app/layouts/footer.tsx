export const Footer = () => {
    return (
        <footer className="bg-white px-16 pt-24 pb-16 max-w-screen-lg mx-auto text-black">
        <div className="flex pb-16 sm:justify-start justify-center">
          <div className="font-bold mr-16">
            Home
          </div>
          <div className="font-bold">
            Artikel
          </div>
        </div>
        <hr className="py-8"/>
        <div className="flex sm:justify-center items-center md:lg:justify-between flex-col md:lg:flex-row">
          <div className="text-slate-700 font-bold text-lg">
            powered by backbone.id
          </div>
          <div>
            @afloor88 2023
          </div>
        </div>
      </footer>
    )
}