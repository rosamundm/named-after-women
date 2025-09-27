import { FC } from 'react';
// import { Accordion } from '@radix-ui/react-accordion';
import { MessageCircleQuestion } from 'lucide-react';
import { Accordion } from 'radix-ui';

const FaqPage: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            FAQ
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </header>

        <Accordion.Root
		      // className="rounded-md bg-mauve6 shadow-[0_2px_10px]"
		      type="single"
		      // defaultValue="item-1"
		      collapsible
	      >
        {/* <main className="space-y-8"> */}
          <Accordion.Item value="item-1">
            <div className="flex gap-2">

      
            <MessageCircleQuestion />
          <Accordion.Trigger>

            <h2 className="text-xl font-bold mb-4">
              There's a famous Berlin street named after a princess that I can't
              find on here. Why?
            </h2>


  
          </Accordion.Trigger>
          </div>
          <Accordion.Content>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since there are so many such streets (among them Luisenstraße,
            Sophienstraße, and a surprising number of instances of
            Kaiserin-Augusta-Straße), and I have very limited time to work on
            this project, I have decided not to prioritise them. The reason is
            that in general, I prefer not to glorify nobility, and instead would
            like to focus my efforts on ordinary people who earned their
            recognition. Maybe when I'm done adding those, I'll add the others!
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Also, for the people I <em>do</em> add, hopefully it goes without
            saying that I don't necessarily endorse every single thing they
            stood for.
          </p>
          </Accordion.Content>
      </Accordion.Item>

          <h2 className="text-xl font-bold mb-4">
            I see a street missing. Shall I point this out to you?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            It's very likely already on my to-do list, but: yes, feel free! If
            you can provide some interesting sources about the person's story,
            even better.
          </p>
          <h2 className="text-xl font-bold mb-4">
            Why are you using the names of countries that didn't exist at that
            point?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hold on tight, this will get long...
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Many of the people featured here were born in places like Prussia.
            The concept of a nation can be a complex one, but I decided early on
            in the project to refer to cities as they are in the present day.
            For instance, what was then <em>Schwiebus, Prussia</em> will be
            called <em>Świebodzin, Poland</em> here — the modern country and
            endonym.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            One exception is using the established English name where it's
            available, e.g. <em>Vienna</em> and not <em>Wien</em>. My project is
            in English and so I don't want to overcomplicate things by having to
            make decisions like whether I would call it{' '}
            <em>Schwiebus, Preußen</em> (sticking to all German and thus
            presupposing an imperial German lens on the place, as well as the
            reader's knowledge of the German names) or{' '}
            <em>Schwiebus, Prussia</em> (German/English mix, illogical and
            pointless for the intended audience).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            But an exception to this, in turn, is for cases of those who
            perished in concentration camps: using the modern name plus the
            better-known German name in brackets, e.g.{' '}
            <em>Terezín (Theresienstadt), Czech Republic</em>. I want to nod to
            its current location but I also feel it is wrong to obscure the fact
            the person was murdered by Nazis in this repugnant, systematic
            manner.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To take a very topical example on the ethics of naming: many
            Ukrainians, if not most, are asking the world to refer to their
            capital city as <em>Kyiv</em> (Ukrainian transliteration) and not{' '}
            <em>Kiev</em> (Russian transliteration). Although both languages are
            widely spoken in Ukraine, the official language — the one that's
            unique to this culture, which is currently undergoing deliberate
            attempts at extermination by the other culture — takes precedent.
          </p>
          <h2 className="text-xl font-bold mb-4">
            What about non-binary or genderfluid people?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In light of the political climate around the world, I want to make
            it crystal clear that I fully support you.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The question has come up before on how I recognise certain figures
            as women. Generally I go by whether their name is typically
            feminine, and whether they are referred to as "she" on Wikipedia and
            other resources.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As much as I would prefer not deferring to these assumptions, and
            not adhering to a gender binary in my work, the term "women" is what
            I have settled on. On the other hand, I understand many
            non-gender-conforming people would take issue with being included
            here (the implication being they are a subset of "women"). In any
            case, as far as I'm aware, none of the figures I've read about so
            far have been anything other than cis women (on that note, I'll add
            that if I do come across any trans women, they will{' '}
            <em>obviously</em> be treated as women).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From what I can currently tell, there is no perfect answer — but if
            you are someone who is not cis and you have any ideas or feedback,
            feel free to reach out.
          </p>
        {/* </main> */}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default FaqPage;
