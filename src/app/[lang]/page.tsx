import { notFound } from "next/navigation";
import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { isAssistantEnabled } from "@/lib/ai/config";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const assistant = isAssistantEnabled();

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main id="main">
        <Hero lang={lang} hero={dict.hero} assistant={assistant} />
        <About about={dict.about} />
        <Expertise expertise={dict.expertise} />
        <Projects projects={dict.projects} />
        <Experience experience={dict.experience} />
        <Contact lang={lang} contact={dict.contact} />
      </main>
      <Footer nav={dict.nav} footer={dict.footer} />
      {assistant && <ChatWidget lang={lang} text={dict.assistant} />}
    </>
  );
}
