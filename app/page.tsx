import { ThemeToggleButton } from "@/components/theme/theme-toggle-button";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        <h1 className="text-4xl font-bold">Welcome to create-betternext</h1>
        <p>Check out theme changing:</p>
        <ThemeToggleButton />
      </main>
    </>
  );
}
