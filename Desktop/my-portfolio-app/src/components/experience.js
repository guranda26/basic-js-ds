import { Education } from "./education";
export function Experience() {
  return (
    <section className="experience" id="experience">
      <main>
        <h2>Experience</h2>
        <div className="timeline">
          <div>
            <ul>
              <li>2023 - Present</li>
              <li>Copywriter/Content Maker</li>
              <li>-Simple Steps</li>
            </ul>
            <ul>
              <li>2022</li>
              <li>Marketing Manager</li>
              <li>-Ramada by Wyndham</li>
            </ul>
          </div>
        </div>
        <Education />
      </main>
    </section>
  );
}
