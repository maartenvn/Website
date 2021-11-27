<template>
  <div class="cv">
    <div class="cv-header">
      <!-- Photo -->
      <img
        class="cv-header-image"
        src="/img/maarten-van-neyghem.jpg"
        alt="Profile Picture: Maarten Van Neyghem"
      />

      <!-- Name -->
      <div>
        <div class="cv-header-title">Maarten Van Neyghem</div>
        <div class="cv-header-subtitle">Curriculum Vitae</div>
      </div>

      <!-- Contact -->
      <div class="cv-header-contact">
        <div class="cv-header-contact-detail">
          <v-icon :icon="icons.mdiLink" left />
          <a href="https://maartenvn.be" target="_blank"> maartenvn.be </a>
        </div>

        <div class="cv-header-contact-detail">
          <v-icon :icon="icons.mdiGithub" left />
          <a href="https://github.com/maartenvn" target="_blank">
            github.com/maartenvn
          </a>
        </div>

        <div class="cv-header-contact-detail">
          <v-icon :icon="icons.mdiEmail" left />
          maartenvn.eu@gmail.com
        </div>
      </div>
    </div>

    <!-- Opleiding -->
    <div class="cv-section">
      <!-- Title -->
      <div class="cv-section-title">Education</div>

      <!-- Content -->
      <div class="cv-section-content">
        <div class="cv-subsection">
          <div>
            <strong>Wetenschappen-Wiskunde</strong>

            <i>(2012 - 2018)</i>
          </div>

          <div>SVI-Gijzegem</div>

          <div>
            <i>Graduated with honors.</i>
          </div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong> Academic Bachelor of Computer Science </strong>

            <i>(2018 - 2021)</i>
          </div>

          <div>Ghent University</div>

          <div>
            <i>
              Discontinued in favor of a more practical program with more focus
              on web &amp; mobile development.
            </i>
          </div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong> Professional Bachelor in Electronics-ICT </strong>

            <i>(2021 - present)</i>
          </div>

          <div>Odisee</div>

          <div>
            <i>Specialisation in Web &amp; Mobile Development.</i>
          </div>
        </div>
      </div>
    </div>

    <!-- Vaardigheden -->
    <div class="cv-section">
      <!-- Title -->
      <div class="cv-section-title">Skills</div>

      <!-- Content -->
      <div class="cv-section-content">
        <ul>
          <li>
            Knowledge and experience with different programming languages:
          </li>

          <ul>
            <li><b>JavaScript/TypeScript</b></li>
            <li><b>HTML/CSS</b> (SASS, SCSS)</li>
            <li><b>Python</b></li>
            <li><b>Java</b></li>
            <li>
              <b>Kotlin</b>
              (Android Applications, Spring Boot)
            </li>
            <li>
              <b>SQL</b>
              (PostgreSQL, MySQL, SQLite)
            </li>
            <li><b>C/C++</b></li>
          </ul>

          <br />

          <li>
            Full-stack web developer in different programming languages and
            frameworks.
          </li>

          <ul>
            <li>
              <b>Frontend Frameworks:</b> Vue, Nuxt, React, Next, Svelte &amp;
              JQuery
            </li>

            <li>
              <b>Backend Frameworks:</b> Express.js, Nest.js, Spring Boot &amp;
              Flask
            </li>

            <li><b>Databases:</b> PostgreSQL, MySQL &amp; SQLite 3</li>

            <li><b>API Architectures:</b> REST &amp; GraphQL</li>
          </ul>

          <br />

          <li>Experience with system administration of (web) platforms:</li>

          <ul>
            <li><b>Orchestration:</b> Docker &amp; Docker Compose</li>

            <li><b>CI/CD:</b> Jenkins, Travis &amp; Github Actions</li>

            <li><b>Operating Systems:</b> Ubuntu &amp; Arch Linux</li>

            <li><b>Version Control:</b> Git, Github &amp; Gitlab</li>

            <li><b>Other tools:</b> NGINX, Let's Encrypt</li>
          </ul>

          <br />

          <li>Experience with working in team:</li>

          <ul>
            <li>
              <b>Open-source projects:</b> working on multiple open-source
              projects in different teams.
            </li>
            <li>
              <b>School environment:</b> working on multiple projects with other
              students.
            </li>
            <li>
              <b>Professional environment:</b> working with a team of 5 to 10
              people in an Agile/SCRUM environment.
            </li>
          </ul>
        </ul>
      </div>
    </div>

    <!-- Ervaring -->
    <div class="cv-section">
      <!-- Title -->
      <div class="cv-section-title">Experience</div>

      <!-- Content -->
      <div class="cv-section-content">
        <div class="cv-subsection">
          <div>
            <strong>Hobby Programmer</strong>

            <i>(2012 - present)</i>
          </div>

          <div>
            Programming as a hobby in different programming languages, both solo
            or open-source team projects. A list of my projects is available on
            <a href="https://maartenvn.be" target="_blank">maartenvn.be</a>
            or on
            <a href="https://github.com/maartenvn" target="_blank">Github</a>.
          </div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong> Web platform Oilsjt Mjoezik </strong>

            <i>(2018 - present)</i>
          </div>

          <div>
            The complete development of the web platform for the Aalsterse
            Carnaval Radio: Oilsjt Mjoezik (<a
              href="https://www.oilsjtmjoezik.be"
              target="_blank"
              >www.oilsjtmjoezik.be</a
            >). The original project was written in PHP and later rewritten in
            around 2 weeks using Vue <i>(Nuxt)</i> and Node.js (<i>Nest.js</i>).
            The platform uses a Directus admin panel to offer a user-friendly
            way of managing the data. The entire platform is deployed in docker
            containers and is automatically updated using a Jenkins CI/CD
            server.
          </div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong> Studentenjob ING </strong>

            <i>(August 2018, July 2019)</i>
          </div>

          <div>
            Student job at the Virtual Assistant Services Squad of ING Belgium.
            This job consisted of building a small project around crowdsourcing
            trainingphrases for the chatbot Marie, during the first year, and
            developing a label tool for data anonymization, during the second
            year. This took place in an Agile environment, following the SCRUM
            model and working with the Sprint planning tool Service Now.
          </div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong> Zeus WPI </strong>

            <i>(2019 - present)</i>
          </div>

          <div>
            Zeus WPI is the student association for Computer Science at Ghent
            University. Zeus has a lot of active projects for different
            purposes. I am activly part of this association and also
            contributing to their open-source project. More information and a
            full list of projects can be found on
            <a href="https://zeus.gent/">zeus.gent</a>.
          </div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong> Web platform Caepa Vestigia </strong>

            <i>(September 2019)</i>
          </div>

          <div>
            Development of the website for the student association (<a
              href="https://www.caepavestigia.be"
              target="_blank"
              >www.caepavestigia.be</a
            >). This project is written in Vue and Node.js and is deployed on a
            Ubuntu Linux server using Ansible.
          </div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong> Directus: Contributor </strong>

            <i>(September 2020 - present)</i>
          </div>

          <div>
            Directus is an open-source real-time database-driven headless-CMS
            for managing SQL database content and is written in Vue &amp;
            Node.js. It converts a relational SQL database to a REST &amp;
            GraphQL API and provides a user-friendly Vue admin application to
            the end user for managing the database. <br />
            I am an active contributor to this project and part of the key
            contributors group (<a href="https://directus.io/">directus.io</a>).
          </div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong>UGent: Studium</strong>

            <i>(July 2021 - November 2021)</i>
          </div>

          <div>
            Studium is an open-source platform for sharing study materials
            between students, developed by the Gentse Studentenraad for the
            University of Ghent. I was a member of the team that developed the
            platform. The platform is written in Vue <i>(Nuxt)</i> &amp; Python
            <i>Django</i>.
          </div>
        </div>
      </div>
    </div>

    <!-- Hobbies -->
    <div class="cv-section">
      <!-- Title -->
      <div class="cv-section-title">Hobbies</div>

      <!-- Content -->
      <div class="cv-section-content">
        <div class="cv-subsection">
          <div>
            <strong>DJ</strong>
          </div>

          <div>Providing music on clubs, small events or private parties.</div>
        </div>

        <div class="cv-subsection">
          <div>
            <strong>Sports</strong>
          </div>

          <div>Swimming & running during the weekends.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiEmail, mdiGithub, mdiLink, mdiPhone } from "@mdi/js";
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    return {
      icons: {
        mdiLink,
        mdiGithub,
        mdiPhone,
        mdiEmail,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.cv {
  @media print {
    font-size: 12px;
  }

  a {
    transition: color 200ms ease;
    color: var(--color-primary);

    &:hover {
      filter: brightness(85%);
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1em;

    background-color: rgb(100, 149, 237, 0.2);
    color: black;

    border-radius: 10px;

    a {
      color: black;
    }

    @media not print {
      @media (max-width: $breakpoint-md) {
        flex-direction: column;
        text-align: center;

        > * {
          margin-bottom: 2em;
        }
      }
    }

    @media print {
      margin-bottom: 2em;
    }

    &-image {
      width: 200px;
      height: 200px;

      border-radius: 50%;
      border: 3px solid var(--color-primary);

      @media print {
        width: 100px;
        height: 100px;
      }
    }

    &-title {
      font-size: 2.5em;
      font-weight: bold;

      @media (max-width: $breakpoint-md) {
        font-size: 1.7em;
      }
    }

    &-subtitle {
      font-size: 1.5em;
      color: var(--color-primary);

      margin-top: 0.5em;
    }

    &-contact {
      &-detail {
        width: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0.5em;

        font-size: 1.1em;
        font-weight: bold;

        @media (max-width: $breakpoint-md) {
          font-size: 1em;
        }

        @media print {
          font-weight: normal;
        }

        .v-icon {
          color: var(--color-primary);
        }
      }
    }
  }

  &-section {
    padding-top: 2em;

    @media print {
      padding-top: 1.2em;
    }

    &-title {
      font-size: 1.2em;
      font-weight: bold;
      text-transform: uppercase;

      color: var(--color-primary);
    }
  }

  &-subsection {
    padding: 1em 0;

    @media print {
      page-break-inside: avoid;
    }
  }
}
</style>
