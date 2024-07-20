import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="rounded-md border-y-[6px] border-l-[6px] border-black-1">
          <Image
            className="dark:hidden"
            src="/icons/auth-image.svg"
            alt="auth image"
            width={500}
            height={500}
          />
          <Image
            className="dark:block hidden"
            src="/icons/auth-image-dark.svg"
            alt="auth image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
