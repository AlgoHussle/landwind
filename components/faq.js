import { useState } from 'react';
import Link from 'next/link';

const faq = () => {
  const [isOpen, setIsOpen] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
  });

  const toggleAccordion = (accordion) => {
    setIsOpen({ ...isOpen, [accordion]: !isOpen[accordion] });
  };

  return (
    <section id="TEAM" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="30"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white"
        >
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h3 id="accordion-flush-heading-1">
              <button
                onClick={() => toggleAccordion('accordion1')}
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded={isOpen.accordion1}
                aria-controls="accordion-flush-body-1"
              >
                <span>Can I use Landwind in open-source projects?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 ${isOpen.accordion1 ? 'rotate-180' : ''} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-1"
              className={`${isOpen.accordion1 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Landwind is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <Link
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    get started
                  </Link>{' '}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-2">
              <button
                onClick={() => toggleAccordion('accordion2')}
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded={isOpen.accordion2}
                aria-controls="accordion-flush-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 ${isOpen.accordion2 ? 'rotate-180' : ''} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-2"
              className={`${isOpen.accordion2 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Landwind is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{' '}
                  <Link
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    Figma design system
                  </Link>{' '}
                  based on the utility classes from Tailwind CSS and components
                  from Landwind.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-3">
              <button
                onClick={() => toggleAccordion('accordion3')}
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded={isOpen.accordion3}
                aria-controls="accordion-flush-body-3"
              >
                <span>
                  What are the differences between Landwind and Tailwind UI?
                </span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 ${isOpen.accordion3 ? 'rotate-180' : ''} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-3"
              className={`${isOpen.accordion3 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Landwind and Tailwind UI are both libraries of interactive
                  components built on top of Tailwind CSS.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  The main difference is that Landwind is open-source and free
                  to use while Tailwind UI is a commercial product. Landwind
                  also provides a Figma design system file while Tailwind UI
                  does not.
                </p>
              </div>
            </div>
            <h3 id="accordion-flush-heading-4">
              <button
                onClick={() => toggleAccordion('accordion4')}
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-4"
                aria-expanded={isOpen.accordion4}
                aria-controls="accordion-flush-body-4"
              >
                <span>How can I contribute to Landwind?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 ${isOpen.accordion4 ? 'rotate-180' : ''} shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-4"
              className={`${isOpen.accordion4 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Landwind is an open-source project and we welcome all
                  contributions from the community.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You can contribute by reporting bugs, suggesting new features,
                  improving documentation, submitting pull requests to fix bugs
                  or add features, and more. Check out our{' '}
                  <Link
                    href="#"
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                  >
                    contributing guide
                  </Link>{' '}
                  to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default faq;
