import React from "react"
import Block from "components/_boxes/block"
import Cover from "components/_units/cover"
import Infographic from "components/_units/infographic"
import Testimonials from "components/_units/testimonials"
import SEO from "components/seo"

export default function () {
  return (
    <>
      <SEO />
      <Cover />
      <Block settings={{ split: true }}>
        <div>
          <h1>
            Introducing <strong>Statys&nbsp;Medical Development</strong>
          </h1>
        </div>
        <div>
          <p>
            Our company was founded and has been growing since 1993. With the
            growth of our business, K.C. McKee Medical Development has now been
            rebranded to Statys Medical Development to better represent our
            evolution as an organization.
          </p>
          <p>
            Although we have evolved and re-launched with a new brand, our core
            values and mission to serve you have not changed. Our goal is to
            continue providing the highest level of service which you have come
            to expect and rely upon. Statys Medical Development’s trusted and
            industry respected team is here to optimize your business.
          </p>
          <p>
            Our rebranding reflects our enhanced commitment to bringing you
            increased value through our refined services and full suite of
            medical development business offerings.
          </p>
        </div>
      </Block>
      <Block settings={{ paint: "surface" }}>
        <h2>Advanced medical billing solutions</h2>
        <p>
          Statys MD offers comprehensive medical billing solutions to operations
          of all sizes and scope, ranging from major medical institutions to
          individual physicians and medical clinics.
        </p>
        <p>
          We have the expertise and knowledge to help you identify revenue gaps,
          streamline processes and maximize your revenue.
        </p>
        <p>
          Our innovative and proprietary end-to-end user tools ensure your data
          is secure and protected. They also guarantee the highest degree of
          accuracy in collecting, interpreting and utilizing your data.
        </p>
      </Block>
      <Block>
        <h2>What our customers are saying</h2>
        <Testimonials />
      </Block>
      <Block>
        <Infographic />
      </Block>
      <Block settings={{ split: true }}>
        {/* <div>
          <h2>
            <b>No contract, no obligation</b>
          </h2>
          <p>
            At Statys Medical Development, we hold ourselves to the highest
            standards that you expect from a premium medical billing service. We
            are so confident in our account managers, and our ability to
            increase your revenue, that we offer our service on a month-to-month
            basis that you can cancel at any time. This ensures that we are
            always at our best and you are always satisfied.
          </p>
        </div>
        <div>
          <h2>
            <b>Peace of mind security</b>
          </h2>
          <p>
            The security of sensitive information is always a priority at K.C.
            McKee. All of our data is stored, protected, and encrypted on our
            private servers. We even offer optional training to show you how to
            send us your data safely. With a flawless track record of safety and
            security, you can trust Statys Medical Development with all of your
            billings.
          </p>
        </div>
        <div>
          <h2>
            <b>All specialties</b>
          </h2>
          <p>
            From General Surgery, Internal Medicine, Paediatrics, and Family
            Practice to Gynaecology, Cardiology, and Gastroenterology, Statys
            Medical Development can manage your medical billing regardless of
            your specialty.
          </p>
        </div>
        <div>
          <h2>
            <b>Consistent payment</b>
          </h2>
          <p>
            We are not only dedicated to increasing revenue for our clients, we
            take pride in making sure they receive their payouts on time, every
            month. Our clients do not have to worry about when or if they will
            receive their compensation. Spend more time with your patients than
            worrying about your paperwork with Statys Medical Development.
          </p>
        </div> */}
      </Block>
    </>
  )
}
