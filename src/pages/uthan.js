import React, { Component } from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
import Styles2 from "../css/single-blog.module.css"
import Album from "../components/album"
import styles from "../css/single-blog.module.css"

const uthan = ({ data }) => {
  return (
    <Layout>
       <section className={Styles.about}>
        <Title title="about" subtitle="Uthan Youth Parliament" />
        <div className={Styles2.center}>
          <article className={Styles2.article}>
            <p>
              Uthan Youth Parliament is an international level youth parliament
              to create awareness among the youth about the working of Indian
              parliament, to inculcate the habit of public speaking and to stand
              up for what is correct. An initiative taken by Unnati, Uthan aims
              at creating awareness on the issues of national and international
              importance and familiarize students on policy making, political
              science and governmental policies. Uthan has successfully
              organised its three blockbuster editions with a participation of
              around 1500 debaters from various schools and universities giving
              their valuable inputs for bringing a change in the the society and
              now looks forward to the fourth edition in November.
            </p>
            <p>
              Uthan is a platform where a person can get all that his
              inquisitive soul craves for by providing them with a platform to
              put their views in the heat of debate. It is an exciting and
              unique platform for debaters, round the corner. Its fundamental
              purpose is to facilitate thought and opinion exchange in addition
              to its primary goal of empowering the youth. Uthan comes with a
              bundle of surprises for its debaters such as badges, goodies, cash
              prizes, etc. Prominent personalities, like Mrs Shiela Dixit, Mr.
              Oscar Fernandez (MP, Rajya Sabha), Mr. Salman Khurshid, Ms.
              Sharmistha Mukherjee and various Civil Services officers have been
              a part of Uthan Youth Parliament as Chief Guests.
            </p>
            <p>
              Team Uthan is all set for its next blockbuster, Uthan Edition 5 in 2020. Register down below to be a part of Uthan legacy.
            </p>
            <a href="https://docs.google.com/forms/d/1TjKSk-y-TwaAlfSKAD94566wzlEh2oGQIxVBLqml_8o/edit">
            Organizing Committee Applications link
                   </a>{" "}
            <br />
            <a href="https://www.facebook.com/uthanyouthparliament/">Find us on facebook</a>
          </article>
        </div>
      </section>
      <Title title="Uthan Youth Parliament" subtitle="events" />
            <div className={styles.center}>
        <div class="card">
          <div class="card-body">
            <article className={styles.article}>
              <h4 class="card-title">Satta: The Power of Words</h4>
              <p class="card-text">
                Edition 2 of Uthan Youth Parliament, Satta: The Power Of Words,
                a legacy of Uthan Youth Parliament on 28th and 29th July, 2018
                was bigger and better. With 8 different Committees and exciting
                agendas, the event was filled with 550 delegates from all across
                the country discussing on national and international issues. Mr
                Salman Khurshid graced the event with his presence and
                remarkable Words. He interacted with the students, heard their
                problems and came out on conclusions.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <div class="card" style={{marginBottom:20}}>
          <div class="card-body">
            <article className={styles.article}>
              <h4 class="card-title">Uthan Youth Parliament Edition 3</h4>
              <p class="card-text">
                After the two successful event, the third Edition of Uthan Youth
                Parliament connected more and more people towards the cause of
                nation. The show stopper, Ms. Sheila Dikshit (Ex CM, Delhi)
                interacted with delegates, shared her life experiences and
                guided the youth towards a better road. Many grievances and
                problems of young India was solved during the interactive
                session. Other guests included Ms. Kiran Walia, Ms Sharmistha
                Mukherjee, IRS Vinod Kumar Meena, Mr. Mudit Agarwal.
              </p>
            </article>
          </div>
        </div>
      </div>  

      {/* <section className={Styles2.imagegallery}>
        <Title title="Uthan" subtitle="2018" />
        <Album id="PDvCQqExBrWKaZnm9" />
      </section> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "abbout.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default uthan
