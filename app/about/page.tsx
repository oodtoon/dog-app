import Title from "../components/ui/Title";
import Header from "../components/ui/Header";
import Section from "../components/ui/Section";
import Ul from "../components/ui/Ul";

export default function About() {
  return (
    <div>
      <Section id={"about"}>
        <Title>About</Title>
        <p>This app was built with React and NextJS.</p>
        <p>Reasoning:</p>
        <Ul>
          <li>NextJS server side rendering (SSR) enables API calls</li>
          <li>React enables reactivity</li>
          <li>TypeScript for type safety and intellesense</li>
        </Ul>
      </Section>

      <Section id="component-structure">
        <Header>Component Structure</Header>
        <p>The main page is a NextJS server page so the page can:</p>
        <Ul>
          <li>Run a fetch call to get list of dog breeds</li>
          <li>Render page with list ready</li>
        </Ul>
        <p>DogBreeds is the top component and declares/tracks all state.</p>
        <p>
          The remaining components in the app are stateless components at the
          ends of the component tree and only accept props.
        </p>
      </Section>
      <Section id="api-calls">
        <Header>API Calls</Header>
        <p>
          Both API calls are in their own file. Technically, with NextJS you can
          make an API call directly from the page server, however, I placed all
          API calls in their own files separately for testing purposes.
        </p>
        <p>
          The initial API call on server load first gets a list of all dog
          breeds. Because the breeds are keys, I access them with the
          Object.keys(obj) method.
        </p>
        <p>
          The dogImage API takes an argument “breed” of type string and returns
          an array of all images of the dog breed.
        </p>
      </Section>
      <Section id="search-params">
        <Header>Search Params</Header>
        <p>
          Initially I used state to store the value for the select to show
          corresponding dog breed images. This worked <b>but,</b> users
          could not share a URL of the dog breeds they liked, nor could they navigate to
          previous dog breed images easily.
        </p>
        <p>
          To resolve this, I used search params. The select changes the URL
          params which in turn is used to fetch images of the associated
          dog breed. Now users can:
        </p>
        <Ul>
          <li>search via URL</li>
          <li>share their favorite breeds</li>
          <li>navigate to previously viewed breeds</li>
        </Ul>
      </Section>
      <Section id="testing">
        <Header>Testing</Header>
        <p>
          Testing is an important step in the development process to ensure you
          are creating high quality code.
        </p>
        <p>
          I used Vitest because you can run tests in the file of the function
          itself. I went this route because:
        </p>
        <Ul>
          <li>I wanted to keep the file structure small for this project</li>
          <li>There is only one function per file</li>
        </Ul>
      </Section>
      <Section id="error-handling">
        <Header>Error Handling</Header>
        <p>
          I used a try catch statement within each API call to catch any errors.
          The errors handling here is quite simple and only returns a statement
          that either the dogs or the images could not be found.
        </p>
      </Section>
      <Section id="html-and-accessability">
        <Header>HTML Structure and ADA Compliance</Header>
        <p>
          In attempt to ensure accessibility I wanted to use correct semantic
          HTML. This is because using correct HTML tags have already built in
          accessibility roles for screen readers.
        </p>
        <p>
          For user interaction, I was sure to use &quot;button&quot; and
          &quot;select&quot; to enable users to interact with the page with
          their keyboard.
        </p>
      </Section>
      <Section id="responsive-layout">
        <Header>Responsive Layout</Header>
        <p>
          This app was built with responsiveness in mind. While it isn&apos;t
          the best UI, it still fits to small and large screen sizes.
        </p>
        <p>
          The only items with a fixed width are the images. But as the screen
          shrinks, they are still able to view the images due to the smaller
          size of the image.
        </p>
      </Section>
      <Section id="style">
        <Header>Style</Header>
        <p>
          The colors were chosen because the use of dog photos on the website
          will either be in nature and the colors can complement those. Second,
          a lot of dogs are brown, orange, yellow and all shades in between so
          yellow is nice and complimentary.
        </p>
        <p>
          The layout is simple to bring attention to the dogs, but also to
          compliment the simple joy that dogs bring.
        </p>
      </Section>
      <Section id="navbar">
        <Header>Navbar</Header>
        <p>
          The navbar was not part of the assignment but with NextJS file routing
          system I could easily create additional pages/routes.
        </p>
        <p>
          Hopefully these pages provide better insight into my thought process
          while building the app.
        </p>
      </Section>
    </div>
  );
}
