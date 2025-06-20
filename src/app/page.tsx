import Image from "next/image";
import { SendMsg } from "@/components/SendMsg";

export default function Home() {
  return (
    <>
      <section id="about" className="w-full h-screen">
        <h1>This is about section</h1>
      </section>

      <section id="projects" className="w-full h-screen">
        <h1>This is projects section</h1>
      </section>

      <section id="contact" className="w-full h-screen">
        <SendMsg />
      </section>
    </>
  );
}
