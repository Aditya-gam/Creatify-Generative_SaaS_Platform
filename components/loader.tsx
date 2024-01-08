import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full flex-col gap-y-4">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">AI is thinking...</p>
    </div>
  );
};
