import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </header>


        <main className="space-y-8 pt-6">
          <h2 className="text-xl font-bold mb-4">
            Hello and welcome!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is a project documenting all the streets in Berlin, Germany that
            are named after a woman. Why? Because {' '}
            <a href="https://www.rbb24.de/panorama/beitrag/2025/05/berlin-strassen-plaetze-namen-frauen-maenner-bezirke.html">
              <u>less than 5% of Berlin's streets and squares are named after women,
            compared to nearly 29% named after men</u>
            </a>
            . To counter this, a quota is in effect in certain boroughs (like Friedrichshain-Kreuzberg),
            meaning that any new street built must be named after a woman. This is part of what's
            known as{' '}
            <a href="https://en.wikipedia.org/wiki/Gender_mainstreaming">
              <u>gender mainstreaming</u>
            </a>
            .
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            On top of this, while many of these names are well-known in Germany,
            in some cases there is little or no information about the person available in English.
            That makes no sense, since Berlin is known for being a city with residents
            and visitors from all over the world, many of whom are drawn to it precisely
            because of its layers of history.

            Some of these figures will ring more bells than others; even if we
            don't know exactly what they're known for, they're part of our daily
            lives in Berlin. For instance, anyone who's taken a Sunday stroll
            from Alexanderplatz to Kollwitzplatz will have heard of Rosa
            Luxemburg; she has a whole street and a square. But they might not
            be aware of exactly how she shaped Berlin as we know it today.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            After the dismantling of the Berlin Wall, swathes of vacant land sprung up not
            only along the parts where it had physically divided the city for 28
            years, but also in spaces where decrepit GDR-era buildings had been
            knocked down, and on the outskirts of the city as it grows. Since
            then, rapid development and the resulting permastate of 'becoming
            and never being' (art critic Karl Scheffler, 1910) is said to
            characterise Berlin. Within the constraints of this project, the
            areas where this phenomenon is perhaps most obvious are in highly developed
            commercial centres, such as at Hauptbahnhof (west of Washingtonplatz)
            and off Warschauer Straße (around the Uber Arena). But also, in random
            corners of Neukölln where you probably can't get a flat white with oat milk
            served to you by a Melburnian!
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Some other core concepts guiding this project are{' '}
              <a href="https://en.wikipedia.org/wiki/Digital_humanities">
                <u>digital humanities</u>
              </a>,{' '}
              <a href="https://en.wikipedia.org/wiki/Psychogeography">
                <u>psychogeography</u>
              </a>, and{' '}
              <a href="https://en.wikipedia.org/wiki/Geocaching">
                <u>geocaching</u>
              </a>.
          </p>

          <h2 className="text-xl font-bold mb-4">
            About the creator
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <a href="https://www.rosamundmather.com/"><u>My name is Rosamund</u></a>.
            I'm a Berlin-based software developer with a background in translation and
            writing, originally from the UK. I've always been obsessed with maps and
            streets, even designing my own towns as a kid...
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Since moving here more than a decade ago, my fascination
            has reached a whole new level, and luckily there's still quite a bit for
            me left to uncover. I got the idea for this project when on my
            lockdown walks, I started noticing how many Berlin streets —
            particularly newer ones — were named after women. Whenever I looked
            them up later on, I was often impressed by their stories of courage,
            sacrifice, innovation, and frequently tragedy, but was also struck by
            how many of them were unknown in the English-speaking world.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Details about how I built the project are{' '}
            <a href="/colophon">
              <u>here</u>
            </a>
            . Questions about the project's contents are answered{' '}
            <a href="/faq">
              <u>here</u>
            </a>
            .
          </p>

        </main>
      </div>
    </div>
  );
};

export default AboutPage;
