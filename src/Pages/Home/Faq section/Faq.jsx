import React from "react";
import SectionTitle from "../../../components/shared/SectionTitle";

const Faq = () => {
  return (
    <div>
      <SectionTitle subtitle={"FAQ"} title={"Want to Know?"}></SectionTitle>
      <div className="bg-[#cdcccc] mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3  items-center gap-4">
          <div>
            <div className="hero ">
              <div className="hero-content ">
                <div className="max-w-md">
                  <p className="text-center">
                    _______Question and Answer________
                  </p>
                  <h1 className="text-4xl mt-4 font-bold">
                    Frequently Asked Questions
                  </h1>
                  <p className="py-6">
                    youll find answers to common questions about our website,
                    find the best survey for you.Create according to your need{" "}
                  </p>
                  <button className="btn bg-main rounded-full px-10 text-base-100">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <img alt="" />
            </div>
          </div>
          <div className="space-y-5 lg:relative right-[50px]">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-base bg-main text-base-100 font-medium">
                How do I create a survey?
              </div>
              <div className="collapse-content">
                <p>
                  If you are a surveyor, log in to your account and navigate to
                  the Create Survey section. Fill in the necessary details, add
                  your questions, and publish your survey.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-base bg-main text-base-100 font-medium">
                How can I report a survey?
              </div>
              <div className="collapse-content">
                <p>
                  If you come across a survey that you believe violates our
                  terms of service or contains inappropriate content, you can
                  report it by clicking the Report button on the survey page and
                  providing a reason for the report.{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-base bg-main text-base-100 font-medium">
                How can I become a Pro User?
              </div>
              <div className="collapse-content">
                <p>
                  To become a Pro User, go to your account settings and select
                  the Upgrade to Pro option. You will be prompted to enter your
                  card payment details to complete the upgrade
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-base bg-main text-base-100 font-medium">
                Is my payment information secure?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we use secure encryption methods to protect your payment
                  information. All transactions are processed through a secure
                  payment gateway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
