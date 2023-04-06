function Value({ title, paragraphs, link }) {
  return (
    <div className="section_header no_vsb">
      <h4>{title}</h4>
      <div className="section_header_contenair flex">
        <div>
          {paragraphs.map((_) => (
            <p>{_}</p>
          ))}
        </div>
        <img src={link} className="scale1" />
      </div>
    </div>
  );
}
function OurValues() {
  let Data = [
    {
      title: "Justice",
      paragraphs: [
        ` Finds (part of) its application in the fulfillment of human rights, in equalrelations
                    between
                    men
                    and women, and in being accountable to each other about our policies and actions. We
                    believe
                    that each individual was created in the image of God, that he is unique and that he
                    deserves
                    the greatest respect.
                `,
        `As a result, we reach out to all those in need, regardless of origin, gender,
                    religion, age or nationality. Wherever possible, we adapt our assistance to needs and
                    contexts,
                    respecting the dignity and autonomy of the people we assist. We also believe that
                    everyone
                    has
                    the inalienable right to live with dignity and realize their potential. We believe the
                    fruit
                    of
                    justice to be peace. Dignity, equity and human rights are values that serve to promote
                    justice.
                `,
      ],
      link: "./Old/img/logo223239.png",
    },
    {
      title: "Compassion",
      paragraphs: [
        `Moves us to be committed to those who suffer and are excluded, in their sorrows as well as
                        their aspirations and hopes. Their appeal on solidarity and justice forms the basis for our
                        work.
                        We wish to relieve the suffering of those living in crisis, disaster or conflict.
                `,
        `We identify the
                        most vulnerable people and reach out to them to offer them practical support in emergency and
                        reconstruction. We believe compassion is more than individual charity. Compassion challenges
                        us to seek the root causes of vulnerability and exclusion. We believe justice to be rooted in
                        com -
                        passion.                `,
      ],
      link: "./Old/img/im2-01.png",
    },
    {
      title: "Stewardship",
      paragraphs: [
        `Means that we take and we share responsibility for the wellbeing of the whole living earth,
                        now and in the future: land and its natural resources, our environment and sources of energy.
                        We feel responsible to relieve the burden our generation has placed on the earth and on future
                        generations.`,
        `We stand in solidarity with those who live on the margins of society as a result of
                        centuries of oppression and work together to address systemic injustice. We believe good
                        stewardship to be rooted in compassion with and justice for the earth`,
      ],
      link: "./Old/img/im3-01.png",
    },
    {
      title: "Hope",
      paragraphs: [
        `leads us to work collaboratively to achieve our shared goals based on long-term commitments.
                        We are not discouraged by setbacks, and we take joy in progress. We want to give hope to
                        people afflicted by crises and oppressed by situations that seem hopeless. We support these
                        communities in the implementation of sustainable improvements and develop their capacities
                        to build a better future.`,
        `We feel responsible to lighten the burden of future generations that
                        our generation has placed on the earth. We believe that hope is rooted in caring, compassion
                        and justice. Hope gives life. And it seems that hope is always there, even in the worst
                        conditions.
                        These core values shape our vision of a peaceful, just and sustainable society. They impact our
                        theory of change and give direction to our practical work. They inspire us to work with people
                        from different cultural and religious backgrounds who share these values.
                        Related to the above values, HOPE FOR AFRICA has defined operating principles, which guide
                        our operations: inclusiveness, accountability, and innovativeness`,
      ],
      link: "./Old/img/im4-01.png",
    },
  ];

  return (
    <React.Fragment>
      <div className="card_view_1">Our Values</div>
      <p>
        The core values guide our work: Justice, Compassion, Stewardship and
        Hope
      </p>
      {Data.map((_) => (
        <Value key={_.title} {..._} />
      ))}
    </React.Fragment>
  );
}

function Trustee({ name }) {
  return (
    <div className="trustee flex">
      <div className="trustee_image"></div>
      <p className="trustee_name">{name}</p>
    </div>
  );
}
function OurTrustees() {
  const Data = [
    { name: "Bashilwango L. Eliphaz" },
    { name: "Angelina A. Bilubi" },
    { name: "ICIMBUELO FALIALA Jules" },
    { name: "Albert E. Mwenebatu" },
    { name: "Brigitte E. Asifiwe" },
    { name: "Marie Bantu" },
    { name: "Ron Storey" },
  ];
  return (
    <React.Fragment>
      {Data.map((_) => (
        <Trustee key={_.name} {..._} />
      ))}
    </React.Fragment>
  );
}

function OurTeam({ name, post, image }) {
  return (
    <div className="our_team flex">
      <img className="our_team_img" src={image} />
      <div className="our_team_carpet"></div>
      <div className="our_team_detail flex">
        <p className="our_team_name">{name}</p>
        <p className="our_team_post">{post ? post : "----------------"}</p>
      </div>
    </div>
  );
}
function OurTeams() {
  const Data = [
    {
      name: "Bashilwango L. Eliphaz",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679837/Hope4AfricaTeam/Eliphaz_Bashilwango_Founder_CEO-01_npu0dn.png",
      post: "Founder CEO",
    },
    // {
    //   name: "Brigitte E ASIFIWE",
    //   image:
    //     "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679966/Hope4AfricaTeam/Brigitte_E._ASIFIWE-01_pnyxch.png",
    //   post: "",
    // },
    // {
    //   name: "Ron Storey",
    //   image:
    //     "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679941/Hope4AfricaTeam/Ron_Storey-01_nigcod.png",
    //   post: "",
    // },
    // {
    //   name: "ICIMBUELO FALIALA Jules",
    //   image:
    //     "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679865/Hope4AfricaTeam/ICIMBUELO_FALIALA_Jules-01_ceogn0.png",
    //   post: "",
    // },
    // {
    //   name: "Marie BANTU",
    //   image:
    //     "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679945/Hope4AfricaTeam/Marie_BANTU-01_gf7hf3.png",
    //   post: "",
    // },
    {
      name: "Sifa Bilubi Elizabeth",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675680024/Hope4AfricaTeam/Sifa_Bilubi_Elizabeth_Accountant-01_mo4m9o.png",
      post: "Accountant",
    },
    {
      name: "Bertrand TATANG Yves",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675680010/Hope4AfricaTeam/Program_Manager_Bertrand_TATANG_Yves_KOUDJOU-01_rcjfra.png",
      post: "Program Manager",
    },
    {
      name: "Yves IKOBO LWINGO",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679982/Hope4AfricaTeam/Yves_IKOBO_LWINGO_ABSS_Program_Manager_Assistant-01_toikd6.png",
      post: "Program Manager Assistant",
    },
    {
      name: "Jay Wittmeyer",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679979/Hope4AfricaTeam/Jay_Wittmeyer_International_partnerships-01_mkvsba.png",
      post: "International Partnerships",
    },
    {
      name: "Ombeni Nyota Jeanne",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679975/Hope4AfricaTeam/Ombeni_Nyota_Jeanne_d_Arc_Operations-01_x2rik2.png",
      post: "M.E.A.L",
    },
    {
      name: "Hassan R. John",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679972/Hope4AfricaTeam/John_RIZIKI_Hassan_CANADA_Representative-01_ucnjry.png",
      post: "CANADA Representative",
    },
    {
      name: "LUSAMBYA B Katembo",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679949/Hope4AfricaTeam/LUSAMBYA_B._Katembo_Accountability_Officer-01_ipdix5.png",
      post: "Environment and sustainable development",
    },
    {
      name: "Masfiri Denis",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679887/Hope4AfricaTeam/Masfiri_Denis_Education_Office-01_iywaus.png",
      post: "Education Office",
    },
    {
      name: "Yves A Wilondja",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679882/Hope4AfricaTeam/Yves_A._Wilondja_Food_security_Officer-01_g2gdvc.png",
      post: "Food Security Officer",
    },
    {
      name: "Caleb Mmassa",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679873/Hope4AfricaTeam/Caleb_Mmassa_Graphic_designer-01_boexiu.png",
      post: "Graphic Designer",
    },
    {
      name: "",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679871/Hope4AfricaTeam/Melanie_RZIKI_BICHINGINI_Widows_Childcare_Ministries-01_qbeuo7.png",
      post: "Widows Childcare Ministries",
    },
    {
      name: "Henriette M Natalie",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679866/Hope4AfricaTeam/Henriette_M._Natalie_Field_Officer-01_tbvm2u.png",
      post: "Field Officer",
    },
    {
      name: "BANI B George",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679846/Hope4AfricaTeam/BANI_B._George_CT_D-01_ppvrk8.png",
      post: "CT D",
    },
    {
      name: "Christophe M Wilondja",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679836/Hope4AfricaTeam/Christophe_M._Wilondja_Health_Nutrition_Officer-01_w0l6vf.png",
      post: "Health Nutrition Officer",
    },
    {
      name: "Ferdinand ALIMASI Ernest",
      image:
        "https://res.cloudinary.com/dl6s23xuz/image/upload/v1675679834/Hope4AfricaTeam/Ferdinand_ALIMASI_Ernest_Finance_HR._Administration-01_izhamp.png",
      post: "Finance HR Administration",
    },
  ];
  return (
    <React.Fragment>
      {Data.map((_) => (
        <OurTeam key={_.name} {..._} />
      ))}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("OurValues")).render(<OurValues />);
ReactDOM.createRoot(document.getElementById("OurTrusteesProfile")).render(<OurTrustees />);
ReactDOM.createRoot(document.getElementById("OurTeamProfile")).render(<OurTeams />);