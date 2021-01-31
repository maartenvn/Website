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
                        <strong>Latijn-Wiskunde</strong>

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
                    <li>
                        Interesse en ervaring met verschillende programmeertalen
                        en frameworks
                    </li>

                    <ul>
                        <li>
                            <strong>Javascript/Typescript (uitgebreid)</strong>

                            <i>
                                (Node.JS, Vue, React, Nest.JS, Nuxt.JS, Next.JS,
                                JQuery, Svelte)
                            </i>
                        </li>

                        <li>
                            <strong>HTML/CSS/SCSS (uitgebreid)</strong>
                        </li>

                        <li>
                            <strong>Python (uitgebreid)</strong>

                            <ul>
                                <li>
                                    <strong>Machine Learning</strong>
                                    <i>(Tensorflow, Keras, Numpy)</i>
                                </li>

                                <li>
                                    <strong>Back-end Development</strong>
                                    <i>(Flask, Django)</i>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Java (uitgebreid)</strong>

                            <i>(Spring Boot, Hibernate, Maven, Gradle)</i>
                        </li>

                        <li>
                            <strong>Kotlin (uitgebreid)</strong>

                            <i>(Android Development, Spring Boot)</i>
                        </li>

                        <li>
                            <strong>SQL (uitgebreid)</strong>

                            <i>(MySQL, PostgreSQL, SQLite 3)</i>
                        </li>

                        <li>
                            <strong>C/C++ (gemiddeld)</strong>
                        </li>

                        <li>
                            <strong>Haskell (gemiddeld)</strong>

                            <i>(Gloss)</i>
                        </li>
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
                        en meewerken aan enkele kleine projecten in teams van
                        een 5-tal mensen. Vooral gericht rond web-development.
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong> Webplatform Oilsjt Mjoezik </strong>

                        <i>(2017 - heden)</i>
                    </div>

                    <div>
                        Deze opdracht bestond uit het volledig uitwerken en
                        programmeren van de website van de Aalsterse
                        carnavalsradio Oilsjt Mjoezik (www.oilsjtmjoezik.be).
                        Dit project werd gerealiseerd in 2 weken en werd
                        geschreven in Vue <i>(Nuxt.JS)</i> en Node.JS
                        <i>(Nest.JS).</i>
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
                        van een label tool voor data-anonimisatie.
                    </div>
                </div>

                <div class="cv-subsection">
                    <div>
                        <strong> Webplatform Caepa Vestigia </strong>

                        <i>(September 2019)</i>
                    </div>

                    <div>
                        Ontwerpen en programmeren van de website van
                        studenten-vereniging Caepa Vestigia (caepavestigia.be).
                        Dit project werd geschreven in Vue en Node.JS
                        <i>(Express)</i>.
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
                        geschreven in Vue.JS & Node.JS. Ik ben een actieve
                        contributor aan dit project.
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
                        <strong>Studenten Vereniging</strong>
                    </div>

                    <div>
                        Lid van de Aalsterse studentenvereniging Caepa Vestigia
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

        &:hover {
            color: var(--color-primary);
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

            page-break-inside: avoid;
        }

        &-title {
            font-size: 1.2em;
            font-weight: bold;
            text-transform: uppercase;

            color: var(--color-primary);
        }

        &-content {
        }
    }

    &-subsection {
        padding: 1em 0;
    }
}
</style>
