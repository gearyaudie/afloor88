import Link from "next/link";

export const SharedNavbar = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto flex justify-between items-center bg-white text-black pt-4">
        <Link href="/">
          <img
            src="/images/afloor-logo.png"
            alt="Afloor Logo"
            style={{ width: 75, cursor: "pointer" }}
          />
        </Link>{" "}
        <div className="flex gap-10 text-sm">
          <Link href="/">
            <div className="cursor-pointer">Home</div>
          </Link>
          <Link href="/blog">
            <div className="cursor-pointer">Artikel</div>
          </Link>
          <Link href="/products">
            <div className="cursor-pointer">Products</div>
          </Link>
        </div>
      </div>
    </>
  );
};
