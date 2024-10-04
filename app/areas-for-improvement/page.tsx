import Title from "../components/ui/Title";
import Header from "../components/ui/Header";
import Section from "../components/ui/Section";

export default function AreasForImprovement() {
  return (
    <div>
      <Section id="areas-for-improvement">
        <Title>Areas For Improvement</Title>
        <p>
          While I believe the app is built decently, with the short time limit,
          there are still areas for improvement.
        </p>
      </Section>
      <Section id="api-call">
        <Header>Dog Images API Call</Header>
        <p>
          While the select works to update the component DogImages to display
          images of the correct dogs, the API call gathers all images. If there
          are a lot of images this could mean long loading times.{" "}
        </p>
        <p>
          <b>Potential Solution:</b> first only load 10 images, then on the
          expand and collapse button load the remaining images.
        </p>
      </Section>
      <Section id="images">
        <Header>Images and Responsiveness</Header>
        <p>
          The images are the one place where I set a fixed height and width.
          This created a static size that needed to be changed at smaller phone
          sizes.
        </p>
        <p>
          Additionally, in order to keep the images all the same size, the
          aspect ratio of the dogs have been changed. This makes some of the
          dogs to have a little warped appearance. This can be a less than ideal
          experience for users.
        </p>
        <p>
          <b>Potential Solution:</b> make a function that is able to create a
          Pintrest style mosaic of the dog images. I bet there is a library that
          would enable this too so I might not even need to do the math.
        </p>
      </Section>
      <Section id="accessability">
        <Header>Accessability</Header>
        <p>
          I was very deliberate with my tag usage to ensure that I was using the
          standard HTML tags that have pre-built in screen reading capabilities
          for accessibility.
        </p>
        <p>
          One thing that is apparent is even though a user could change the
          select, there is not real way for them to be alerted that the images
          were updated.
        </p>
        <p>
          <b>Potential Solution:</b> add an alert to notify of images change so
          that vision impaired users can know that there has been an update.
          This can be same for the expanded view functionality.
        </p>
      </Section>
      <Section id="testing">
        <Header>Testing</Header>
        <p>
          While I ran some tests on the API calls themselves, I could have run
          more tests to ensure the components were mounting and updating
          correctly.
        </p>
        <p>
          <b>Potential Solution:</b> run more tests. Since the component files
          are already a little large, I would run these tests in separate test
          file with a cleanup function to dismount the test components.
        </p>
      </Section>
    </div>
  );
}
