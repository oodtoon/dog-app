import Title from "../components/ui/Title";
import Header from "../components/ui/Header";
import Section from "../components/ui/Section";
import Ul from "../components/ui/Ul";

export default function ForJonHaarmann() {
  return (
    <div>
      <Section id="follow-up-note-for-jon-haarmann">
        <Title>A Follow Up Note for Jon Haarmann</Title>
        <p>Hello Jon,</p>
        <p>
          {" "}
          I wanted to write a quick follow up on the tech questions asked in my
          first interview. This page is not to change my answers in the
          interview, but to show that I am willing and eager to continue
          learning.
        </p>
      </Section>
      <Section id="stateful-vs-stateless-components">
        <Header>Stateful vs Stateless Components</Header>
        <p>
          A Stateful component is a component that has state that it defines and
          changes. A Stateless component is one that does not change state but
          can accept props and appear reactive.
        </p>
        <p>
          I bring this up because in response to your question, “give me an
          example of a stateless component”, I stated, yes a button can be a
          stateless component, but so is a form. Whoops. A form is very much a
          <em> stateful</em> component as it holds and updates the state of the
          form and the inputs.
        </p>
      </Section>
      <Section id="component-lifecycle">
        <Header>Component Lifecycle</Header>
        <p>
          It is important to know how things work to ensure your components are
          displaying correctly and it can help you debug as well. I am writing
          this as I couldn&apos;t give a great answer as to the lifecycle of
          components so this section provides a better answer and understanding
          from what I provided in the interview.
        </p>
        <p>A component lifecycle has 3 phases:</p>
        <Ul>
          <li>Mount</li>
          <li>Update</li>
          <li>UnMount</li>
        </Ul>
        <p>
          <b>Mount</b> is when the component is appended to the DOM (Document
          Object Module). This phase initializes state, renders the component,
          and provides the first call once the component is rendered.
        </p>
        <p>
          <b>Update </b>is the phase while the component is on the page. This
          phase keeps track of if changes happened to state and if updates
          should occur.
        </p>
        <p>
          <b>UnMount </b>is when the component is removed from the page and
          React does clean ups to ensure the component is removed from DOM
          correctly.
        </p>
      </Section>
      <Section id="mysql-queries">
        <Header>MySql Queries</Header>
        <p>
          While I provided pseudo code for your MySQL query question of “how to
          query only employees in the engineering department?” I wanted to
          follow up with actual MySQL queries
        </p>
        <p>
          <b>SubQuery Method: </b> SELECT * FROM employees WHERE department_id =
          (SELECT id FROM departments WHERE name = engineering)
        </p>
        <p>
          <b>Single Query Method: </b> SELECT * FROM employees JOIN departments
          ON employees.department_id = departments.id WHERE departments.name =
          &apos;engineering&apos;
        </p>
      </Section>
      <Section id="thank-you">
        <Header>Thank you</Header>
        <p>
          Thank you so much for taking the time to interview me earlier this
          week. And thank you for reviewing my tech assessment project.
        </p>

        <p>
          I hope you enjoyed this project and I am eager to hear about next
          steps. I am excited to continue learning and ready to hit the ground
          running as a <b>Associate Software Engineer</b> here at 1WorldSync.
        </p>
        <p>Thank you,</p>
        <p>Brody</p>
      </Section>
    </div>
  );
}
