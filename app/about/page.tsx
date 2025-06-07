import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </header>

        <main className="space-y-8">
          <h2 className="text-xl font-bold mb-4">Thank you for visiting this site!</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My name is Rosamund. I'm a software developer with a background in translation and writing, originally from the UK. I've always been obsessed with maps and streets,
            even designing my own towns when I was a kid. Since moving to Berlin in 2014, this has reached a whole new level. 
            Given the multiple layers of Berlin's history that draw the interest of people from the world over, there's quite a bit for me left to uncover.
            I got the idea for this project when on my lockdown walks, I started noticing how many Berlin streets — particularly newer ones — were named after women.
            Whenever I looked them up later on, I was often impressed by their stories of courage, sacrifice, innovation, and frequently tragedy. Sadly, it 
            would seem that the majority of them were relegated to another side of history, because aside from a handful of exceptions, I don't hear much about them otherwise.
            Even less so in English-language contexts.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Some of these figures will ring more bells than others. Even if we don't know exactly what they're known for, they're part of our daily lives in Berlin. For instance,
            anyone who's taken a Sunday stroll from Alexanderplatz to Kollwitzplatz will have heard of Rosa Luxemburg; she has a whole street and a square. But they might not be 
            aware of exactly how she shaped Berlin as we know it today. In terms of gender, the distribution of Berlin's street names is lopsided. According
            to <a href="https://web.archive.org/web/20210723104659/https://www.rbb24.de/panorama/beitrag/2020/10/gendergerechte-stadtplanung-gender-mainstreaming-berlin.html"><u>this report</u></a>,
            only 500-600 streets are named after women, compared to some 3,000 named after men. To counter this, a <em>Frauenquote</em> (quota of streets named after women) is in effect, meaning that 
            any new street that is built must be named after a woman. This is part of what's known as <a href="https://en.wikipedia.org/wiki/Gender_mainstreaming"><u>gender mainstreaming</u></a>. 
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            After the Berlin Wall fell, swathes of vacant land sprung up not only along the parts where it had physically divided the city for 28 years, but also in spaces where decrepit GDR-era buildings had been
            knocked down, and on the outskirts of the city as it grows. Since then, rapid development and the resulting permastate of 'becoming and never being' (art critic Karl Scheffler, 1910) is said to characterise
            Berlin. Within the constraints of this project, the areas where this phenomenon is perhaps most obvious are at Hauptbahnhof (west of Washingtonplatz) and off Warschauer Straße (around the Uber Arena). 
            But, also randomly in a corner of Neukölln where you probably can't get a flat white with oat milk served to you by a Melburnian! That's the kind of place I'm most interested in.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Some other key words and concepts I have in mind with this project:
          </p>
          <ul>
            <li>
                <a href="https://en.wikipedia.org/wiki/Digital_humanities"><u>Digital humanities</u></a>
            </li>
            <li>
                <a href="https://en.wikipedia.org/wiki/Psychogeography"><u>Psychogeography</u></a>
            </li>
            <li>
                <a href="https://en.wikipedia.org/wiki/Geocaching"><u>Geocaching</u></a>
            </li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You can find out more about how I developed the project <a href="/technical"><u>here</u></a>. Questions about the contents are answered <a href="/faq"><u>here</u></a>.
          </p>
        </main>
      </div>
    </div>
  )
};

export default AboutPage;
