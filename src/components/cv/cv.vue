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
                    <a href="https://maartenvn.be" target="_blank">
                        maartenvn.be
                    </a>
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
            <div class="cv-section-title">Opleidingen</div>

            <!-- Content -->
            <div class="cv-section-content">
                <div class="cv-subsection">
                    <div>
                        <strong>Wetenschappen-Wiskunde</strong>

                        <i>(2012 - 2018)</i>
                    </div>

                    <div>SVI-Gijzegem</div>

                    <div>
                        <i>Afgestudeerd met onderscheiding</i>
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong>
                            Academic Bachelor of Science in de informatica
                        </strong>

                        <i>(2018 - heden)</i>
                    </div>

                    <div>Universiteit Gent</div>
                </div>
            </div>
        </div>

        <!-- Vaardigheden -->
        <div class="cv-section">
            <!-- Title -->
            <div class="cv-section-title">Vaardigheden</div>

            <!-- Content -->
            <div class="cv-section-content">
                <ul>
                    <li>Kennis van verscheidene programmeertalen:</li>

                    <ul>
                        <li><b>JavaScript/TypeScript</b></li>
                        <li><b>HTML/CSS</b> (SASS, SCSS)</li>
                        <li><b>Python</b></li>
                        <li><b>Java</b></li>
                        <li>
                            <b>Kotlin</b>
                            (Android Applicaties, Spring Boot)
                        </li>
                        <li>
                            <b>SQL</b>
                            (PostgreSQL, MySQL, SQLite)
                        </li>
                        <li><b>C/C++</b></li>
                    </ul>

                    <br />

                    <li>
                        Full-stack web developer in verschillende
                        programmeertalen en frameworks:
                    </li>

                    <ul>
                        <li>
                            <b>Frontend Frameworks:</b> Vue, Nuxt, React, Next,
                            Svelte & JQuery
                        </li>

                        <li>
                            <b>Backend Frameworks:</b> Express.js, Nest.js,
                            Spring Boot & Flask
                        </li>

                        <li><b>Databases:</b> PostgreSQL, MySQL & SQLite 3</li>

                        <li><b>Architecturen:</b> REST & GraphQL</li>
                    </ul>

                    <br />

                    <li>Ervaring met systeembeheer van (web) platformen:</li>

                    <ul>
                        <li><b>Orchestration:</b> Docker & Docker Compose</li>

                        <li><b>CI/CD:</b> Jenkins, Travis & Github Actions</li>

                        <li><b>Operating Systems:</b> Ubuntu & Arch Linux</li>

                        <li><b>Version Control:</b> Git, Github & Gitlab</li>

                        <li><b>Andere tools:</b> NGINX, Let's Encrypt</li>
                    </ul>
                </ul>
            </div>
        </div>

        <!-- Ervaring -->
        <div class="cv-section">
            <!-- Title -->
            <div class="cv-section-title">Ervaring</div>

            <!-- Content -->
            <div class="cv-section-content">
                <div class="cv-subsection">
                    <div>
                        <strong>Hobbyprogrammeur</strong>

                        <i>(2012 - heden)</i>
                    </div>

                    <div>
                        Programmeren als hobby in verschillende programmeertalen
                        aan solo of open-source projecten. Deze projecten zijn
                        vooral gericht rond web development. Een lijst van
                        projecten is te vinden op mijn persoonlijke website
                        <a href="https://maartenvn.be" target="_blank"
                            >maartenvn.be</a
                        >
                        of op
                        <a href="https://github.com/maartenvn" target="_blank"
                            >Github</a
                        >.
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong> Webplatform Oilsjt Mjoezik </strong>

                        <i>(2018 - heden)</i>
                    </div>

                    <div>
                        Deze opdracht bestond uit het volledig uitwerken en
                        programmeren van de website van de Aalsterse
                        carnavalsradio Oilsjt Mjoezik (<a
                            href="https://www.oilsjtmjoezik.be"
                            target="_blank"
                            >www.oilsjtmjoezik.be</a
                        >). Dit project werd gerealiseerd in 2 weken en werd
                        geschreven in Vue <i>(Nuxt)</i> en Node.js
                        <i> (Nest.js)</i> met een Directus admin paneel voor de
                        eindgebruikers. Het platform draait volledig in docker
                        containers en wordt automatisch gedeployed via een
                        Jenkins server.
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong> Studentenjob ING </strong>

                        <i>(Augustus 2018, Juli 2019)</i>
                    </div>

                    <div>
                        Studentenjob binnen ING bij de Virtual Assistant
                        Services Squad. Deze job bestond uit het realiseren van
                        een klein project rond het crowdsourcen van
                        trainingphrases voor de chatbot Marie en het ontwikkelen
                        van een label tool voor data-anonimisatie. Dit speelde
                        zich af in een Agile omgeving, gebruik makende van het
                        SCRUM model en werken met de Sprint planningstool
                        Service Now.
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong> Webplatform Caepa Vestigia </strong>

                        <i>(September 2019)</i>
                    </div>

                    <div>
                        Ontwerpen en programmeren van de website van
                        studentenvereniging Caepa Vestigia (<a
                            href="https://www.caepavestigia.be"
                            target="_blank"
                            >www.caepavestigia.be</a
                        >). Dit project werd geschreven in Vue en Node.js en
                        wordt gedeployed via een Ansible script op een Ubuntu
                        Linux server.
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong> Directus - Contributor </strong>

                        <i>(September 2020 - heden)</i>
                    </div>

                    <div>
                        Directus is een open-source real-time database-driven
                        headless-CMS voor het beheren van SQL database content
                        en is geschreven in Vue & Node.js. Het zet een
                        relationele SQL database om naar een REST & GraphQL API
                        en geeft een gebruikersvriendelijke Vue admin applicatie
                        aan de eindgebruiker voor het beheren van de database.
                        Ik ben een actieve contributor aan dit project en deel
                        van de key contributors group (<a
                            href="https://directus.io/"
                            >directus.io</a
                        >).
                    </div>
                </div>
            </div>
        </div>

        <!-- Hobbies -->
        <div class="cv-section">
            <!-- Title -->
            <div class="cv-section-title">Hobby's</div>

            <!-- Content -->
            <div class="cv-section-content">
                <div class="cv-subsection">
                    <div>
                        <strong>DJ</strong>
                    </div>

                    <div>
                        Mixen van muziek in clubs, privéfeesten en kleine
                        evenementen.
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong>Studentenvereniging</strong>
                    </div>

                    <div>
                        Lid van de Aalsterse studentenvereniging Caepa Vestigia.
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong>Zeus WPI</strong>
                    </div>

                    <div>
                        Actief lid binnen Zeus WPI, de studentenorganisatie voor
                        Informatica aan de Universiteit Gent.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { mdiLink, mdiGithub, mdiPhone, mdiEmail } from "@mdi/js";

export default defineComponent({
    setup() {
        return {
            icons: {
                mdiLink,
                mdiGithub,
                mdiPhone,
                mdiEmail
            }
        };
    }
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
