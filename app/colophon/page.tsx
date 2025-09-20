import { FC } from 'react';

const ColophonPage: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Colophon
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </header>

        <main className="space-y-8">
          <h2 className="text-xl font-bold mb-4">
            Here's some information for those interested in the technical
            composition and journey of this site.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I released the site for the first time in May 2023 after ideating
            and building for about a year, using the following:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Backend built with{' '}
              <a href="https://www.djangoproject.com/">
                <u>Django</u>
              </a>{' '}
              and{' '}
              <a href="https://www.django-rest-framework.org/">
                <u>Django REST Framework</u>
              </a>
              , deployed on{' '}
              <a href="https://eu.pythonanywhere.com/">PythonAnywhere</a>;
            </li>
            <li>
              Frontend built with{' '}
              <a href="https://react.dev/">
                <u>React</u>
              </a>{' '}
              and{' '}
              <a href="https://tailwindcss.com/">
                <u>Tailwind</u>
              </a>
              , deployed on <a href="https://www.netlify.com/">Netlify</a>.
            </li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I was essentially using Django as a CMS to enter and manage the
            street data — which there was a lot of. Here's a rough sketch of my
            process:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Use a combination of a custom web scraper and manual research to
              identify the relevant streets, women linked to them, and core
              information such as location;
            </li>
            <li>
              Document these in a spreadsheet and mark to-be-visited streets on
              a map visible only to me;
            </li>
            <li>
              If I was going somewhere in the city, check map for whether there
              are any streets nearby I could do a quick detour to for a photo
              (or do an expedition in my free time);
            </li>
            <li>
              Record these entries in a CMS with information gleaned from the
              spreadsheet, add photo, put together a relatively detailed
              biography of the person using a variety of sources, often
              translating from German.
            </li>
            <li>
              Do final checks, mark it as done, then it became instantly
              available to view on the website.
            </li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            And for a while, this kind of worked. I spoke about the project at{' '}
            <a href="https://www.youtube.com/watch?v=quuJomdu568">
              <u>conferences</u>
            </a>{' '}
            and meetups. I was super proud of it and saw lots of potential in
            it. However, I knew it was going to take forever to complete. After
            all, there was lots of technical maintenance to be done, not to
            mention adding all the content. On top of a full-time job, other
            personal projects, life generally, and, you know, finding time to
            rest, I started to feel exhausted just thinking about Named After
            Women.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            So in May 2025, I made the decision to turn the site static. This
            involves some initial overhead, but it's a massive relief in terms
            of cost, performance, maintainability, and security. It is a bit of
            a shame to move the project away from my beloved Django, but there
            are plenty of other opportunities to use it!
          </p>
          <h2 className="text-xl font-bold mb-4">AI transparency note:</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I used{' '}
            <a href="https://v0.dev/">
              <u>v0</u>
            </a>{' '}
            to bootstrap the basic layout of the new site to save myself the
            headache of designing something to my specifications from scratch,
            enabling me to focus my energies on other aspects. I then made a
            whole lot of corrections and customisations to the code myself (e.g.
            swapping out the generated map component for the one I'd built for
            the previous site).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My overall stance on generative AI remains staunchly critical, primarily for sociopolitical
            and environmental reasons. Yet as someone earning a living as a developer, I've
            accepted that I don't have the option of staying totally out of its way. What I can
            do, however, is endeavour to keep it out of my own projects, where I have more freedom
            to follow my personal ethics.
          </p>
        </main>
      </div>
    </div>
  );
};

export default ColophonPage;
